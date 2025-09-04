'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="flex-center h-screen w-full flex-col gap-6 bg-dark-2 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-red-500">Oops!</h1>
        <h2 className="mb-2 text-2xl font-semibold">Something went wrong</h2>
        <p className="mb-6 text-gray-400">
          {error.message || 'An unexpected error occurred'}
        </p>

        <div className="flex justify-center gap-4">
          <Button onClick={reset} className="bg-blue-600 hover:bg-blue-700">
            Try again
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <a href="/">Go home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
