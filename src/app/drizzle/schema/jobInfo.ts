import { pgEnum, pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";
import { desc, relations } from "drizzle-orm";
import { UserTable } from "./user";
import { QuestionTable } from "./question";
import { InterviewTable } from "./interview";

export const experienceLevels = ["junior", "mid-level", "senior"] as const;
export type ExperienceLevel = (typeof experienceLevels)[number];
export const experienceLevelEnum = pgEnum(
  "job_infos_experience_level",
  experienceLevels
);

export const jobInfoTable = pgTable("job_info", {
  id,
  title: varchar(),
  name: varchar().notNull(),
  experienceLevel: experienceLevelEnum().notNull(),
  description: varchar().notNull(),
  userId: varchar()
    .references(() => UserTable.id, { onDelete: "cascade" })
    .notNull(),
  createdAt,
  updatedAt,
});

export const JobinfoRelations = relations(jobInfoTable,({ one, many }) => ({
    user: one(UserTable, {
        fields: [jobInfoTable.userId],
        references: [UserTable.id],
    }),
    questions: many(QuestionTable),
    interviews: many(InterviewTable)
    ,
}))
