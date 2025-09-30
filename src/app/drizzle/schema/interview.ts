import { pgTable, uuid, varchar } from "drizzle-orm/pg-core"
import { createdAt, id, updatedAt } from "../schemaHelpers"
import { jobInfoTable } from "./jobInfo"
import { relations } from "drizzle-orm/relations"

export const InterviewTable = pgTable("interviews", {
  id,
  jobInfoId: uuid()
    .references(() => jobInfoTable.id, { onDelete: "cascade" })
    .notNull(),
  duration: varchar().notNull(),
  humeChatId: varchar(),
  feedback: varchar(),
  createdAt,
  updatedAt,
})

export const interviewRelations = relations(InterviewTable, ({ one }) => ({
  jobInfo: one(jobInfoTable, {
    fields: [InterviewTable.jobInfoId],
    references: [jobInfoTable.id],
  }),
}))