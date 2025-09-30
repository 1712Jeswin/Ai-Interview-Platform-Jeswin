import { pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";
import { desc, relations } from "drizzle-orm";
import { UserTable } from "./user";
import { jobInfoTable } from "./jobInfo";

export const questionDifficulties = ["easy", "medium", "hard"] as const;
export type QuestionDifficulty = (typeof questionDifficulties)[number];
export const questionDifficultyEnum = pgEnum(
  "questions_question_difficulty",
  questionDifficulties
);

export const QuestionTable = pgTable("questions", {
  id,
  jobInfoId: uuid()
    .references(() => jobInfoTable.id, { onDelete: "cascade" }).notNull(),
  text: varchar().notNull(),
  difficulty: questionDifficultyEnum().notNull(),
  description: varchar().notNull(),
  createdAt,
  updatedAt,
});

export const questionRelations = relations(QuestionTable,({ one }) => ({
    user: one(jobInfoTable, {
        fields: [QuestionTable.jobInfoId],
        references: [jobInfoTable.id],
    })
}))
