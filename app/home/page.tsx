'use client';

import { useUser } from '@clerk/nextjs';
import MeetingTypeList from '@/components/MeetingTypeList';
import HomeHero from '@/components/HomeHero';
import Loader from '@/components/Loader';

const Home = () => {
  const { user, isLoaded } = useUser();

  // Show loader while authentication is loading
  if (!isLoaded) return <Loader />;

  // Show loader while user data is loading
  if (!user) return <Loader />;

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <HomeHero />
      <MeetingTypeList />
    </section>
  );
};

export default Home;
