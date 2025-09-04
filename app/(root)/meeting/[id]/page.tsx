'use client';

import { useState, useEffect, useCallback } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { Loader } from 'lucide-react';

import { useGetCallById } from '@/hooks/useGetCallById';
import { useMediaStreamCleanup } from '@/hooks/useMediaStreamCleanup';
import Alert from '@/components/Alert';
import MeetingSetup from '@/components/MeetingSetup';
import MeetingRoom from '@/components/MeetingRoom';

const MeetingPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { stopAllMediaStreams: cleanupMediaStreams } = useMediaStreamCleanup();

  // Ensure id is a string and handle array case
  const callId = Array.isArray(id) ? id[0] : id;

  // Only call useGetCallById if we have a valid callId
  const { call, isCallLoading } = useGetCallById(callId || '');

  // Comprehensive cleanup function
  const stopAllMediaStreams = useCallback(() => {
    if (call) {
      call.camera.disable();
      call.microphone.disable();
    }

    // Use the cleanup hook
    cleanupMediaStreams();
  }, [call, cleanupMediaStreams]);

  // Cleanup effect to ensure camera/microphone are disabled when component unmounts
  useEffect(() => {
    return () => {
      stopAllMediaStreams();
    };
  }, [call, stopAllMediaStreams]);

  // Early return if no valid call ID
  if (!callId) {
    return (
      <p className="text-center text-3xl font-bold text-white">
        Invalid Call ID
      </p>
    );
  }

  if (!isLoaded || isCallLoading) return <Loader />;

  if (!call)
    return (
      <p className="text-center text-3xl font-bold text-white">
        Call Not Found
      </p>
    );

  // get more info about custom call type:  https://getstream.io/video/docs/react/guides/configuring-call-types/
  const notAllowed =
    call.type === 'invited' &&
    (!user || !call.state.members.find((m) => m.user.id === user.id));

  if (notAllowed)
    return <Alert title="You are not allowed to join this meeting" />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
