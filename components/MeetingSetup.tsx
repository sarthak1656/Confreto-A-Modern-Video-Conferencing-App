'use client';
import { useEffect, useState, useRef } from 'react';
import {
  DeviceSettings,
  VideoPreview,
  useCall,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import Alert from './Alert';
import { Button } from './ui/button';
import { useMediaStreamCleanup } from '@/hooks/useMediaStreamCleanup';

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const router = useRouter();
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const { stopAllMediaStreams: cleanupMediaStreams } = useMediaStreamCleanup();

  // https://getstream.io/video/docs/react/guides/call-and-participant-state/#call-state
  const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
  const callStartsAt = useCallStartsAt();
  const callEndedAt = useCallEndedAt();
  const callTimeNotArrived =
    callStartsAt && new Date(callStartsAt) > new Date();
  const callHasEnded = !!callEndedAt;

  const call = useCall();

  if (!call) {
    throw new Error(
      'useStreamCall must be used within a StreamCall component.',
    );
  }

  // https://getstream.io/video/docs/react/ui-cookbook/replacing-call-controls/
  const [isMicCamToggled, setIsMicCamToggled] = useState(false);

  // Function to properly stop all media streams
  const stopAllMediaStreams = () => {
    // Stop Stream SDK camera and microphone
    if (call) {
      call.camera.disable();
      call.microphone.disable();
    }

    // Stop any direct media streams
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => {
        track.stop();
      });
      mediaStreamRef.current = null;
    }

    // Use the cleanup hook
    cleanupMediaStreams();
  };

  useEffect(() => {
    if (isMicCamToggled) {
      call.camera.disable();
      call.microphone.disable();
    } else {
      call.camera.enable();
      call.microphone.enable();
    }

    // Cleanup function to disable camera and microphone when component unmounts
    return () => {
      stopAllMediaStreams();
    };
  }, [isMicCamToggled, call.camera, call.microphone, stopAllMediaStreams]);

  if (callTimeNotArrived)
    return (
      <Alert
        title={`Your Meeting has not started yet. It is scheduled for ${callStartsAt.toLocaleString()}`}
      />
    );

  if (callHasEnded)
    return (
      <Alert
        title="The call has been ended by the host"
        iconUrl="/icons/call-ended.svg"
      />
    );

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      {/* Back button */}
      <div className="absolute top-4 left-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            // Stop all media streams before navigating back
            stopAllMediaStreams();
            router.push('/');
          }}
          className="flex items-center gap-2 text-white hover:bg-white/10"
        >
          <ArrowLeft size={16} />
          Back
        </Button>
      </div>

      <h1 className="text-center text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggled}
            onChange={(e) => setIsMicCamToggled(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call.join();

          setIsSetupComplete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
