import {
  clerkMiddleware,
  createRouteMatcher,
  redirectToSignIn,
} from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const protectedRoute = createRouteMatcher([
  '/upcoming',
  '/meeting(.*)',
  '/previous',
  '/recordings',
  '/personal-room',
]);

const publicRoute = createRouteMatcher(['/']);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();
  const isPublicRoute = publicRoute(req);
  const isProtectedRoute = protectedRoute(req);

  // If user is authenticated and trying to access landing page, redirect to home
  if (userId && isPublicRoute) {
    return NextResponse.redirect(new URL('/home', req.url));
  }

  // If user is not authenticated and trying to access protected route, redirect to sign-in
  if (!userId && isProtectedRoute) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  // Protect the protected routes
  if (isProtectedRoute) {
    auth().protect();
  }

  // Return undefined for non-redirect cases
  return undefined;
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
