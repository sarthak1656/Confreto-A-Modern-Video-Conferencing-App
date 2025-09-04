'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import MeetingTypeList from '@/components/MeetingTypeList';
import Loader from '@/components/Loader';

const Home = () => {
  const [time, setTime] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const istTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      });

      const istDate = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
        timeZone: 'Asia/Kolkata',
      }).format(now);

      setTime(istTime);
      setDate(istDate);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Every minute

    return () => clearInterval(interval);
  }, []);

  // Show loader while authentication is loading
  if (!isLoaded) return <Loader />;

  // Show loader while user data is loading
  if (!user) return <Loader />;

  if (!time || !date) return null; // 👈 prevent rendering until client mounts

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time} IST</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
