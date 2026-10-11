import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-orm/zod";
import * as z from "zod";
import { users } from "../../../core/db/schema";

export const userSelectSchema = createSelectSchema(users);
export type User = z.infer<typeof userSelectSchema>;

export const userInsertSchema = createInsertSchema(users, {
  name: z.string(),
  email: z.string(),
  emailVerified: z.string(),
  image: z.string(),
}).omit({
  id: true,
  createdAt: true,
});
export type CreateUserDTO = z.infer<typeof userInsertSchema>;

export const userUpdateSchema = createUpdateSchema(users).omit({
  id: true,
  createdAt: true,
});
export type UpdateUserDTO = z.infer<typeof userUpdateSchema>;
