import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { jobInfoTable } from "./jobInfo";

export const UserTable = pgTable("users", {
    id: varchar().primaryKey(),
    name: varchar().notNull(),
    email: varchar().notNull().unique(),
    image: varchar().notNull(),
    createdAt,
    updatedAt
})


export const UserRelations = relations(UserTable, ({ many }) => ({
    jobInfos: many(jobInfoTable),
}))