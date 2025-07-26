import { z } from 'zod';

// Contact Message Schemas
export const insertContactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required")
});

export const contactMessageSchema = insertContactMessageSchema.extend({
  _id: z.string(),
  createdAt: z.date()
});

// Types
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = z.infer<typeof contactMessageSchema>;

// User Schemas (keeping for compatibility)
export const insertUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

export const userSchema = insertUserSchema.extend({
  _id: z.string(),
  createdAt: z.date()
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = z.infer<typeof userSchema>;