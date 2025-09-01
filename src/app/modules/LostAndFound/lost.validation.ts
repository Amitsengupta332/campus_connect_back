import { z } from "zod";

export const createItemZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required" })
            .min(3, "Title must be at least 3 characters"),
    description: z.string({ required_error: "Description is required" })
                  .min(5, "Description must be at least 5 characters"),
    category: z.enum(['ID Card', 'Phone', 'Laptop', 'Book', 'Wallet', 'Charger', 'Other'], {
      required_error: "Category is required"
    }),
    status: z.enum(['lost', 'found']).default('lost'),
    image: z.string().url("Image must be a valid URL").optional(),
    date: z.string().optional(),
  }),
});

export const updateItemZodSchema = z.object({
  body: z.object({
    title: z.string().min(3).optional(),
    description: z.string().min(5).optional(),
    category: z.enum(['ID Card', 'Phone', 'Laptop', 'Book', 'Wallet', 'Charger', 'Other']).optional(),
    status: z.enum(['lost', 'found']).optional(),
    image: z.string().url("Image must be a valid URL").optional(),
    date: z.string().optional(),
  }),
});
