import { db } from "@/db";
import { videos } from "@/db/schema";
import { mux } from "@/lib/mux";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";


export const videosRouter = createTRPCRouter({
    create: protectedProcedure.mutation(async ({ ctx }) => {
        const { id: userId } = ctx.user

        //This fn initiates a new video upload in Mux, and once Mux processes the upload,
        //it will trigger relevant webhooks (if they are set up).
        const upload = await mux.video.uploads.create({
            new_asset_settings: {
                passthrough: userId,
                playback_policy: ["public"],
                input: [
                    {
                        generated_subtitles: [
                            {
                                language_code: "en",
                                name: "English"
                            }
                        ]
                    }
                ]
                // mp4_support: "standard",
            },
            cors_origin: "*"
        })


        const [video] = await db.insert(videos).values({
            userId: userId,
            title: "Video Title to come",
            muxStatus: "waiting",
            muxUploadId: upload.id
        }).returning()

        return { video: video, url: upload.url }
    })
})