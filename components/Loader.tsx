import Image from 'next/image';

interface LoaderProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

const Loader = ({
  message = 'Loading...',
  size = 'md',
  fullScreen = true,
}: LoaderProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const containerClasses = fullScreen
    ? 'flex-center h-screen w-full flex-col gap-4'
    : 'flex-center w-full flex-col gap-4 py-8';

  return (
    <div className={containerClasses}>
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
        width={size === 'sm' ? 24 : size === 'md' ? 32 : 48}
        height={size === 'sm' ? 24 : size === 'md' ? 32 : 48}
        className="animate-spin"
      />
      {message && (
        <p className="text-gray-400 text-sm font-medium">{message}</p>
      )}
    </div>
  );
};

export default Loader;
