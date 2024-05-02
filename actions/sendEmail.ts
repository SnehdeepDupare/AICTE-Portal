"use server";

import EmailTemplate from "@/components/EmailTemplate";
import { getErrorMessage } from "@/lib/utils";
import { contactSchema } from "@/lib/validations/contact";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: z.infer<typeof contactSchema>) => {
  const result = contactSchema.safeParse(data);

  if (result.success) {
    const { firstName, lastName, email, subject, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "duparesnehdeep@gmail.com",
        subject: subject,
        react: EmailTemplate({
          firstName: firstName,
          lastName: lastName,
          email: email,
          message: message,
        }),
        reply_to: email,
      });
      return { success: true, data };
    } catch (error: unknown) {
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  }

  if (result.error) {
    return {
      success: false,
      error: getErrorMessage(result.error.format()),
    };
  }
};
