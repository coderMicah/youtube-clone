import { formatDuration } from '@/lib/utils';
import Image from 'next/image';

interface VideoThumbnailProps {
  imageUrl?: string | null;
  title: string;
  previewUrl?: string | null;
  duration: number;
}

const VideoThumbnail = ({ imageUrl, title, previewUrl, duration }: VideoThumbnailProps) => {
  return (
    <div className="group relative">
      {/* Thumbnail wrapper */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <Image
          src={imageUrl ?? '/placeholder.svg'}
          alt={title}
          fill
          className="size-full object-cover group-hover:opacity-0"
        />
        <Image
          unoptimized={!!previewUrl}
          src={previewUrl ?? '/placeholder.svg'}
          alt={title}
          fill
          className="size-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>

      {/*Video Duration box */}
      <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1 py-0.5 text-xs font-medium text-white">
        {formatDuration(duration)}
      </div>
    </div>
  );
};

export default VideoThumbnail;
