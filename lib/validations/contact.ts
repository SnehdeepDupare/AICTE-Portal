import * as z from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2, { message: "First Name Required" }).max(50),
  lastName: z.string().min(2, { message: "Last Name Required" }).max(50),
  email: z.string().email(),
  subject: z.string().min(5, { message: "Subject is Required" }),
  message: z.string().min(5, { message: "Message is Required" }),
});
