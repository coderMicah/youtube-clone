"use client"
import { trpc } from '@/trpc/client';

const Greetings = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: 'Micah' });
  return <div>{data.greeting}</div>;
};

export default Greetings;
