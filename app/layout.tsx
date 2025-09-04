import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Outfit } from 'next/font/google';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Confreto - Modern Video Conferencing App',
  description:
    'Connect, collaborate, and celebrate from anywhere with Confreto. A powerful video conferencing platform built for teams.',
  keywords: [
    'video conferencing',
    'team collaboration',
    'virtual meetings',
    'remote work',
    'video calls',
  ],
  authors: [{ name: 'Confreto Team' }],
  creator: 'Confreto',
  publisher: 'Confreto',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://confreto.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://confreto.vercel.app',
    title: 'Confreto - Modern Video Conferencing App',
    description:
      'Connect, collaborate, and celebrate from anywhere with Confreto. A powerful video conferencing platform built for teams.',
    siteName: 'Confreto',
    images: [
      {
        url: '/images/hero-background.png',
        width: 1200,
        height: 630,
        alt: 'Confreto Video Conferencing Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Confreto - Modern Video Conferencing App',
    description:
      'Connect, collaborate, and celebrate from anywhere with Confreto.',
    images: ['/images/hero-background.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icons/logo.svg',
    shortcut: '/icons/logo.svg',
    apple: '/icons/logo.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          variables: {
            colorText: '#fff',
            colorPrimary: '#0E78F9',
            colorBackground: '#1C1F2E',
            colorInputBackground: '#252A41',
            colorInputText: '#fff',
          },
        }}
        afterSignInUrl="/home"
        afterSignUpUrl="/home"
      >
        <body className={`${outfit.className} bg-dark-2`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
