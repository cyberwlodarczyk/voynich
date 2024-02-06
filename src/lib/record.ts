import { z } from "zod";

export const CATEGORIES = [
  "personal",
  "work",
  "finance",
  "shopping",
  "travel",
  "social",
  "other",
] as const;

export type Category = (typeof CATEGORIES)[number];

const RECORD = z.object({
  id: z.string().uuid(),
  name: z.string(),
  category: z.enum(CATEGORIES),
  username: z.optional(z.string()),
  email: z.optional(z.string()),
  password: z.optional(z.string()),
  description: z.optional(z.string()),
  createdAt: z.coerce.date(),
  editedAt: z.optional(z.coerce.date()),
});

const SCHEMA = z.array(RECORD);

export type Record = z.infer<typeof RECORD>;

export function parse(data: string) {
  return SCHEMA.parse(JSON.parse(data));
}
