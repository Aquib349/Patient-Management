import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(5, "Username should be of atleast of 6 character")
    .max(50, "not more that 50 character"),
  email: z.string().email("Invalid email address."),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number "),
});
