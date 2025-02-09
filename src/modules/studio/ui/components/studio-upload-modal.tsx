'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { trpc } from '@/trpc/client';
import { Loader2Icon, PlusIcon } from 'lucide-react';

const StudioUploadModal = () => {
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
  return (
    <Button variant={'secondary'} onClick={() => create.mutate()} disabled={create.isPending}>
      {create.isPending ? <Loader2Icon className="animate-spin" /> : <PlusIcon />} Create
    </Button>
  );
};

export default StudioUploadModal;
