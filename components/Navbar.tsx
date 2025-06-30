import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Confreto logo"
          className="max-sm:size-10"
        />
        <span className="text-[26px] font-extrabold text-white max-sm:hidden">
          Confreto
        </span>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <SignedOut>
          <div className="flex gap-2 items-center">
            <Link href="/sign-up">
              <button className="h-10 px-6 text-base font-semibold bg-[#0E78F9] hover:bg-blue-700 text-white rounded-md transition-all shadow-sm whitespace-nowrap">
                Sign Up
              </button>
            </Link>
            <Link href="/sign-in">
              <button className="h-10 px-6 text-base font-semibold bg-[#23263A] hover:bg-[#252A41] text-white rounded-md border border-[#252A41] transition-all shadow-sm whitespace-nowrap">
                Log In
              </button>
            </Link>
          </div>
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
