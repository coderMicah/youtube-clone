'use client';

import MuxPlayer from '@mux/mux-player-react';

interface VideoPlayerProps {
  playbackId?: string | null | undefined;
  thumbnailUrl?: string | null | undefined;
  autoPlay?: boolean;
  onPlay?: () => void;
}

const VideoPlayer = ({ playbackId, thumbnailUrl, autoPlay, onPlay }: VideoPlayerProps) => {
  //   if (!playbackId) return null;
  return (
    <MuxPlayer
      playbackId={playbackId || ''}
      poster={thumbnailUrl || '/placeholder.svg'}
      playerInitTime={0}
      autoPlay={autoPlay}
      thumbnailTime={0}
      className="h-full w-full object-contain"
      accentColor="#ff2056"
      onPlay={onPlay}
    />
  );
};

export default VideoPlayer;
