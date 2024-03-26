import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().min(1),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  role: z.string({ required_error: "Please select your role." }),
});
