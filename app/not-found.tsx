import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex-center h-screen w-full flex-col gap-6 bg-dark-2 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-bold text-red-500">404</h1>
        <h2 className="mb-2 text-2xl font-semibold">Page Not Found</h2>
        <p className="mb-6 text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex justify-center gap-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/">Go Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <a href="javascript:history.back()">Go Back</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
