import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  message: text("message").notNull(),
  read: boolean("read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  read: true,
  createdAt: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export const experiences = pgTable("experiences", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyEn: text("company_en").notNull(),
  companyEs: text("company_es").notNull(),
  positionEn: text("position_en").notNull(),
  positionEs: text("position_es").notNull(),
  location: text("location").notNull(),
  startYear: text("start_year").notNull(),
  endYear: text("end_year"),
  isEarly: boolean("is_early").default(false),
  sortOrder: text("sort_order").notNull(),
});

export const insertExperienceSchema = createInsertSchema(experiences).omit({
  id: true,
});

export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type Experience = typeof experiences.$inferSelect;

export const education = pgTable("education", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  degreeEn: text("degree_en").notNull(),
  degreeEs: text("degree_es").notNull(),
  institutionEn: text("institution_en").notNull(),
  institutionEs: text("institution_es").notNull(),
  fieldEn: text("field_en").notNull(),
  fieldEs: text("field_es").notNull(),
  startYear: text("start_year").notNull(),
  endYear: text("end_year").notNull(),
  type: text("type").notNull(),
  sortOrder: text("sort_order").notNull(),
});

export const insertEducationSchema = createInsertSchema(education).omit({
  id: true,
});

export type InsertEducation = z.infer<typeof insertEducationSchema>;
export type Education = typeof education.$inferSelect;

export const skills = pgTable("skills", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  titleEn: text("title_en").notNull(),
  titleEs: text("title_es").notNull(),
  descriptionEn: text("description_en").notNull(),
  descriptionEs: text("description_es").notNull(),
  icon: text("icon").notNull(),
  sortOrder: text("sort_order").notNull(),
});

export const insertSkillSchema = createInsertSchema(skills).omit({
  id: true,
});

export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type Skill = typeof skills.$inferSelect;
