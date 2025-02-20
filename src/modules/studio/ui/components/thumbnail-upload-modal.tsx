import ResponsiveModal from '@/components/responsive-modal';
import { UploadDropzone } from '@/lib/uploadthing';
import { trpc } from '@/trpc/client';

interface ThumbnailUploadModalProps {
  videoId: string;
  open: boolean;
  onChange: (open: boolean) => void;
}

const ThumbnailUploadModal = ({ videoId, open, onChange }: ThumbnailUploadModalProps) => {
  const utils = trpc.useUtils();

  const onUploadComplete = () => {
    utils.studio.getMany.invalidate();
    utils.studio.getOne.invalidate({ id: videoId });
    onChange(false);
  };
  return (
    <ResponsiveModal open={open} setOpen={onChange} title={'Upload a thumbnail'}>
      <UploadDropzone
        endpoint={'thumbnailUploader'}
        input={{ videoId }}
        onClientUploadComplete={onUploadComplete}
      />
    </ResponsiveModal>
  );
};

export default ThumbnailUploadModal;
