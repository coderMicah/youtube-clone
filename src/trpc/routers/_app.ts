
import { createTRPCRouter } from '../init';
import { studioRouter } from '@/modules/studio/server/procedures';
import { videosRouter } from '@/modules/videos/server/procedures';
import { categoriesRouter } from '@/modules/categories/server/procedure';

export const appRouter = createTRPCRouter({
  videos: videosRouter,
  studio: studioRouter,
  categories: categoriesRouter,
});

export type AppRouter = typeof appRouter;