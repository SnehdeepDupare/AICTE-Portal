import ContactForm from "@/components/forms/ContactForm";
import React from "react";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-5 pb-24">
      <section className="mt-10 flex flex-col mx-auto max-w-2xl">
        <h1 className="font-bold text-3xl mb-5">Contact Us</h1>
        <ContactForm />
      </section>
    </main>
  );
}
