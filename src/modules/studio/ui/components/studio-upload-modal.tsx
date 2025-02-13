'use client';

import ResponsiveModal from '@/components/responsive-modal';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { trpc } from '@/trpc/client';
import { Loader2Icon, PlusIcon } from 'lucide-react';
import StudioUploader from './studio-uploader';
import { useRouter } from 'next/navigation';

const StudioUploadModal = () => {
  const router = useRouter();
  const { toast } = useToast();
  const utilis = trpc.useUtils();
  const create = trpc.videos.create.useMutation({
    onSuccess: () => {
      toast({
        title: 'Video created successfully!',
      });
      utilis.studio.getMany.invalidate();
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        // description: error.message,
      });
    },
  });

  const onSuccess = () => {
    if (!create.data?.video.id) return;
    create.reset();
    router.push(`/studio/videos/${create.data.video.id}`);
  };

  return (
    <>
      <ResponsiveModal
        open={!!create.data?.url}
        setOpen={() => create.reset()}
        title={'Upload a video !'}>
        {create.data?.url ? (
          <StudioUploader endpoint={create.data?.url} onSuccess={onSuccess} />
        ) : (
          <Loader2Icon />
        )}
      </ResponsiveModal>
      <Button variant={'secondary'} onClick={() => create.mutate()} disabled={create.isPending}>
        {create.isPending ? <Loader2Icon className="animate-spin" /> : <PlusIcon />} Create
      </Button>
    </>
  );
};

export default StudioUploadModal;
