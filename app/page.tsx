import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import {
  FaVideo,
  FaRegShareSquare,
  FaUsers,
  FaComments,
  FaUserFriends,
  FaChartLine,
  FaBuilding,
} from 'react-icons/fa';
import Link from 'next/link';

export default async function LandingPage() {
  const { userId } = await auth();

  // If user is authenticated, redirect to home page
  if (userId) {
    redirect('/home');
  }
  return (
    <div className="flex min-h-screen flex-col bg-[#1C1F2E] text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl flex-1 px-4 pb-12 pt-32">
        {/* Hero Section */}
        <section
          className="relative mb-12 flex min-h-[340px] flex-col overflow-hidden rounded-xl p-0 shadow-lg md:flex-row md:items-center"
          style={{ minHeight: '340px' }}
        >
          <div
            className="absolute inset-0 size-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBJ6pwJP-YA8BoTTkE2rTKXv_9r2upgdWHXZtsugco75DvnuovV0ect8Nx371mZQC3Y_WVs9uGtkylzHwBtg5NgP8YIzVmJtwfcgjC2Gj2B_DBdo405_BhPpLAo6W9wHxAWM7vxHXS-lvIVW2JyDhUaVl2mH3CtTbaewWIu3DMyLZziSNM8NjzI77cjs5knnYnzwVEG7fJbd7AlA6vwuaR3PG2n0vhHtHESyL9Jkb_WDvM0a6oKIWGLLXVhsEhDiocynE0s-E807ts)',
            }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/70 to-black/30" />
          <div className="relative z-20 flex flex-1 flex-col items-start justify-center p-8 md:p-16">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Connect, collaborate, and celebrate
              <br />
              from anywhere
            </h1>
            <p className="mb-6 max-w-lg text-lg text-gray-200">
              Confreto brings teams together with seamless video conferencing,
              screen sharing, and real-time collaboration tools.
            </p>
            <Link
              href="/sign-up"
              className="inline-block rounded-lg bg-[#0E78F9] px-6 py-3 text-lg font-bold text-white transition-all hover:bg-blue-700"
            >
              Get Started Free
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="mb-2 text-3xl font-extrabold">
            Features that empower your team
          </h2>
          <p className="mb-6 max-w-2xl text-gray-300">
            Confreto offers a comprehensive suite of tools to enhance your
            virtual meetings and collaboration.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-2 rounded-lg border border-[#252A41] bg-[#23263A] p-6">
              <div className="mb-2">
                <FaVideo size={32} />
              </div>
              <h3 className="text-xl font-bold">High-Quality Video</h3>
              <p className="text-base text-gray-400">
                Experience crystal-clear video and audio for more engaging
                meetings.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-[#252A41] bg-[#23263A] p-6">
              <div className="mb-2">
                <FaRegShareSquare size={32} />
              </div>
              <h3 className="text-xl font-bold">Screen Sharing</h3>
              <p className="text-base text-gray-400">
                Share your screen with ease, allowing for effective
                presentations and demonstrations.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-[#252A41] bg-[#23263A] p-6">
              <div className="mb-2">
                <FaUsers size={32} />
              </div>
              <h3 className="text-xl font-bold">Team Collaboration</h3>
              <p className="text-base text-gray-400">
                Collaborate in real-time with shared documents, whiteboards, and
                interactive tools.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-[#252A41] bg-[#23263A] p-6">
              <div className="mb-2">
                <FaComments size={32} />
              </div>
              <h3 className="text-xl font-bold">Integrated Chat</h3>
              <p className="text-base text-gray-400">
                Stay connected before, during, and after meetings with built-in
                chat functionality.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="mb-16">
          <h2 className="mb-2 text-3xl font-extrabold">
            Flexible solutions for every need
          </h2>
          <p className="mb-6 max-w-2xl text-gray-300">
            Whether you&apos;re a small startup or a large enterprise, Confreto
            has a plan to fit your requirements.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-lg bg-[#252A41] p-6 text-center">
              <div className="mb-2">
                <FaUserFriends size={48} />
              </div>
              <h3 className="text-lg font-bold">Small Teams</h3>
              <p className="text-base text-gray-400">
                Ideal for small teams and startups, offering essential features
                for effective collaboration.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-[#252A41] p-6 text-center">
              <div className="mb-2">
                <FaChartLine size={48} />
              </div>
              <h3 className="text-lg font-bold">Growing Businesses</h3>
              <p className="text-base text-gray-400">
                Designed for growing businesses with enhanced features and
                scalability.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-[#252A41] p-6 text-center">
              <div className="mb-2">
                <FaBuilding size={48} />
              </div>
              <h3 className="text-lg font-bold">Enterprise Solutions</h3>
              <p className="text-base text-gray-400">
                Customizable solutions for large organizations with advanced
                security and support.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold">
            Ready to transform your virtual meetings?
          </h2>
          <p className="mb-6 text-gray-300">
            Sign up for Confreto today and experience the future of
            collaboration.
          </p>
          <Link
            href="/sign-up"
            className="inline-block rounded-lg bg-[#0E78F9] px-6 py-3 text-lg font-bold text-white transition-all hover:bg-blue-700"
          >
            Get Started Free
          </Link>
        </section>
      </main>
      {/* Footer */}
      <footer className="mt-auto w-full border-t border-[#23263A] bg-[#1C1F2E] py-8">
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 px-4 text-sm text-gray-400 md:flex-row">
          <div className="mb-2 flex flex-wrap gap-6 md:mb-0">
            <Link href="#">Product</Link>
            <Link href="#">Solutions</Link>
            <Link href="#">Resources</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Contact Us</Link>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="#">Terms of Service</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          © 2023 Confreto. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
