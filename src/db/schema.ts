import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  clerkId: text("clerk_id").unique().notNull(),
  name: text().notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
}, (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)]);

export const usersRelations = relations(users, (({ many }) => ({
  user: many(videos)
})))

export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
}, (t) => [uniqueIndex("name_idx").on(t.name)])

export const categoryRelations = relations(users, (({ many }) => ({
  videos: many(videos)
})))

export const videoVisibility = pgEnum("video_visibility", ["private", "public"])

export const videos = pgTable("videos", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("name").notNull(),
  description: text("description"),
  muxStatus: text("mux_status"),
  muxAssetsId: text("mux_assets_id").unique(),
  muxUploadId: text("mux_upload_id").unique(),
  muxPlaybackId: text("mux_playback_id").unique(),
  muxTrackId: text("mux_track_id").unique(),
  muxTrackStatus: text("mux_track_status").unique(),
  thumbnailUrl: text("tumbnail_url"),
  previewUrl: text("preview_url"),
  duration: integer("duration").default(0).notNull(),
  visibility:videoVisibility("visibility").default("private").notNull(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  categoryId: uuid("category_id").references(() => categories.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
})

export const videosRelations = relations(videos, (({ one }) => ({
  user: one(users, {
    fields: [videos.userId],
    references: [users.id]
  }),
  category: one(categories, {
    fields: [videos.categoryId],
    references: [categories.id]
  })
})))