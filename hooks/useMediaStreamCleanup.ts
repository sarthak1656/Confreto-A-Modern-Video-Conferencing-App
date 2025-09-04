import { useEffect, useRef } from 'react';

export const useMediaStreamCleanup = () => {
  const mediaStreamsRef = useRef<MediaStream[]>([]);

  const stopAllMediaStreams = () => {
    // Stop all tracked media streams
    mediaStreamsRef.current.forEach((stream) => {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    });
    mediaStreamsRef.current = [];

    // Also try to stop any active media streams
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        stream.getTracks().forEach((track) => track.stop());
      })
      .catch(() => {
        // Ignore errors as this is just cleanup
      });
  };

  const trackMediaStream = (stream: MediaStream) => {
    mediaStreamsRef.current.push(stream);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      stopAllMediaStreams();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAllMediaStreams();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      stopAllMediaStreams();
    };
  }, []);

  return { stopAllMediaStreams, trackMediaStream };
};
