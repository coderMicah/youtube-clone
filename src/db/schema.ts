import { pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: uuid().primaryKey().defaultRandom(),
    clerkId:text("clerk_id").unique().notNull(),
    name: text().notNull(),
    imageUrl:text("image_url").notNull(),
    createdAt:timestamp("created_at").defaultNow().notNull(),
    updatedAt:timestamp("updated_at").defaultNow().notNull()
  }, (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)]);