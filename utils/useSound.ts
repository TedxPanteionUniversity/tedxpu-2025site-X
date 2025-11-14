import { useCallback, useRef } from "react";

export function useSound(src: string, volume = 0.4) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!audioRef.current && typeof Audio !== "undefined") {
    audioRef.current = new Audio(src);
    audioRef.current.volume = volume;
  }

  const play = useCallback(() => {
    if (audioRef.current) {
      // Restart from beginning each time
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  return play;
}
