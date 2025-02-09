'use client';

import { DEFAULT_LIMIT } from '@/constants';
import { trpc } from '@/trpc/client';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const VideosSection = () => {
  return (
    <ErrorBoundary fallback={<p>Something went wrong...</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <VideosSectionSuspense />
      </Suspense>
    </ErrorBoundary>
  );
};

const VideosSectionSuspense = () => {
  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    { limit: DEFAULT_LIMIT },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  return <div>{JSON.stringify(data)}</div>;
};

export default VideosSection;
