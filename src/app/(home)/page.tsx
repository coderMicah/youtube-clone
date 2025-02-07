import { HydrateClient, trpc } from '@/trpc/server';
import { ErrorBoundary } from 'react-error-boundary';

import { Suspense } from 'react';
import Greetings from './greetings';

export default async function Home() {
  void trpc.hello.prefetch({ text: 'Micah' });
  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Greetings />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
