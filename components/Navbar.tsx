import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex-between w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Confreto logo"
          className="max-sm:size-10"
        />
        <span className="max-sm:hidden font-extrabold text-[26px] text-white">
          Confreto
        </span>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-2">
            <Link
              href="/sign-up"
              className="inline-block h-10 rounded-md bg-[#0E78F9] px-6 text-base font-semibold text-white shadow-sm transition-all hover:bg-blue-700 whitespace-nowrap"
            >
              Sign Up
            </Link>
            <Link
              href="/sign-in"
              className="inline-block h-10 rounded-md border border-[#252A41] bg-[#23263A] px-6 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#252A41] whitespace-nowrap"
            >
              Log In
            </Link>
          </div>
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
