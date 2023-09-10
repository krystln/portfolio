"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { twMerge } from "tailwind-merge";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<boolean | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validation
    if (!formRef.current) return;
    const { contact_name, contact_mail, message } = formRef.current;
    if (!contact_name.value) {
      contact_name.focus();
      return;
    } else if (!contact_mail.value) {
      contact_mail.focus();
      return;
    } else if (!message.value) {
      message.focus();
      return;
    }

    // Send email
    emailjs
      .sendForm(
        "service_d6hnjig",
        "template_olm8gj7",
        formRef.current,
        "8RV3cLFld_ZAUnaDb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus(true);
        },
        (error) => {
          console.log(error.text);
          setStatus(false);
        }
      );

    // Reset form
    formRef.current.reset();
  }

  useEffect(() => {
    emailjs.init("8RV3cLFld_ZAUnaDb");
  }, []);

  return (
    <form
      className="flex flex-col gap-1 relative"
      ref={formRef}
      onSubmit={handleSubmit}>
      <input
        type="text"
        name="contact_name"
        placeholder="Name"
        className="bg-transparent border-2 border-white rounded-md p-2 font-mono"
      />
      <input
        type="email"
        name="contact_mail"
        placeholder="Email"
        className="bg-transparent border-2 border-white rounded-md p-2 font-mono"
      />
      <textarea
        name="message"
        cols={30}
        rows={5}
        placeholder="Message"
        className="bg-transparent border-2 border-white rounded-md resize-y p-2 font-mono"></textarea>
      <hr className="my-2 bg-[#e5e5e5] border-0 h-[0.1rem] mr-[15rem]" />
      <input
        type="submit"
        value="Send"
        className="border-2 border-white w-[7.5rem] py-2 hover:cursor-pointer hover:bg-white hover:text-black rounded-md font-mono"
      />
      {status !== null && (
        <div
          className={twMerge(
            "font-mono",
            status ? "text-green-500" : "text-red-600"
          )}>
          {status ? "Message Sent" : "Failed to send message"}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
