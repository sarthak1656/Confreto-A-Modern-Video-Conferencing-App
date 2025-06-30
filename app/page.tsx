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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1C1F2E] text-white flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 pt-32 pb-12">
        {/* Hero Section */}
        <section
          className="relative rounded-xl p-0 flex flex-col md:flex-row items-center mb-12 shadow-lg overflow-hidden min-h-[340px]"
          style={{ minHeight: '340px' }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBJ6pwJP-YA8BoTTkE2rTKXv_9r2upgdWHXZtsugco75DvnuovV0ect8Nx371mZQC3Y_WVs9uGtkylzHwBtg5NgP8YIzVmJtwfcgjC2Gj2B_DBdo405_BhPpLAo6W9wHxAWM7vxHXS-lvIVW2JyDhUaVl2mH3CtTbaewWIu3DMyLZziSNM8NjzI77cjs5knnYnzwVEG7fJbd7AlA6vwuaR3PG2n0vhHtHESyL9Jkb_WDvM0a6oKIWGLLXVhsEhDiocynE0s-E807ts)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30 z-10" />
          <div className="relative z-20 flex-1 flex flex-col justify-center items-start p-8 md:p-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
              Connect, collaborate, and celebrate
              <br />
              from anywhere
            </h1>
            <p className="text-lg text-gray-200 mb-6 max-w-lg">
              Confreto brings teams together with seamless video conferencing,
              screen sharing, and real-time collaboration tools.
            </p>
            <Link href="/sign-up">
              <button className="bg-[#0E78F9] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all">
                Get Started Free
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold mb-2">
            Features that empower your team
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl">
            Confreto offers a comprehensive suite of tools to enhance your
            virtual meetings and collaboration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#23263A] rounded-lg p-6 flex flex-col gap-2 border border-[#252A41] items-center">
              <div className="mb-2">
                <FaVideo size={32} />
              </div>
              <h3 className="font-bold text-xl">High-Quality Video</h3>
              <p className="text-gray-400 text-base">
                Experience crystal-clear video and audio for more engaging
                meetings.
              </p>
            </div>
            <div className="bg-[#23263A] rounded-lg p-6 flex flex-col gap-2 border border-[#252A41] items-center">
              <div className="mb-2">
                <FaRegShareSquare size={32} />
              </div>
              <h3 className="font-bold text-xl">Screen Sharing</h3>
              <p className="text-gray-400 text-base">
                Share your screen with ease, allowing for effective
                presentations and demonstrations.
              </p>
            </div>
            <div className="bg-[#23263A] rounded-lg p-6 flex flex-col gap-2 border border-[#252A41] items-center">
              <div className="mb-2">
                <FaUsers size={32} />
              </div>
              <h3 className="font-bold text-xl">Team Collaboration</h3>
              <p className="text-gray-400 text-base">
                Collaborate in real-time with shared documents, whiteboards, and
                interactive tools.
              </p>
            </div>
            <div className="bg-[#23263A] rounded-lg p-6 flex flex-col gap-2 border border-[#252A41] items-center">
              <div className="mb-2">
                <FaComments size={32} />
              </div>
              <h3 className="font-bold text-xl">Integrated Chat</h3>
              <p className="text-gray-400 text-base">
                Stay connected before, during, and after meetings with built-in
                chat functionality.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold mb-2">
            Flexible solutions for every need
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl">
            Whether you're a small startup or a large enterprise, Confreto has a
            plan to fit your requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#252A41] rounded-lg p-6 flex flex-col gap-2 items-center text-center">
              <div className="mb-2">
                <FaUserFriends size={48} />
              </div>
              <h3 className="font-bold text-lg">Small Teams</h3>
              <p className="text-gray-400 text-base">
                Ideal for small teams and startups, offering essential features
                for effective collaboration.
              </p>
            </div>
            <div className="bg-[#252A41] rounded-lg p-6 flex flex-col gap-2 items-center text-center">
              <div className="mb-2">
                <FaChartLine size={48} />
              </div>
              <h3 className="font-bold text-lg">Growing Businesses</h3>
              <p className="text-gray-400 text-base">
                Designed for growing businesses with enhanced features and
                scalability.
              </p>
            </div>
            <div className="bg-[#252A41] rounded-lg p-6 flex flex-col gap-2 items-center text-center">
              <div className="mb-2">
                <FaBuilding size={48} />
              </div>
              <h3 className="font-bold text-lg">Enterprise Solutions</h3>
              <p className="text-gray-400 text-base">
                Customizable solutions for large organizations with advanced
                security and support.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to transform your virtual meetings?
          </h2>
          <p className="text-gray-300 mb-6">
            Sign up for Confreto today and experience the future of
            collaboration.
          </p>
          <Link href="/sign-up">
            <button className="bg-[#0E78F9] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all">
              Get Started Free
            </button>
          </Link>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#1C1F2E] border-t border-[#23263A] py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div className="flex flex-wrap gap-6 mb-2 md:mb-0">
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
        <div className="text-center text-gray-500 text-xs mt-4">
          © 2023 Confreto. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
