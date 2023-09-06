"use client";
import { LegacyRef, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_d6hnjig",
        "template_olm8gj7",
        form.current as HTMLFormElement,
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div className="flex gap-4 items-center justify-center h-[100vh] w-full">
      <div className="flex flex-col">
        <h1 className="text-4xl font-mono font-[700] hover:cursor-default">
          Contact Me
        </h1>
        <a href="mailto:contact@akshitgoyal.dev" target="_blank" className="">
          contact@akshitgoyal.dev
        </a>
        <a
          href="https://www.linkedin.com/in/akshit1025/"
          target="_blank"
          className="">
          linkedin.com/in/akshit1025
        </a>
      </div>
      <form
        ref={form as LegacyRef<HTMLFormElement>}
        onSubmit={handleSubmit}
        className="flex flex-col gap-1">
        <input
          type="text"
          name="contact_name"
          id="name"
          placeholder="Name"
          className="bg-transparent border-2 border-white rounded-md p-2 font-mono"
        />
        <input
          type="email"
          name="contact_mail"
          id="email"
          placeholder="Email"
          className="bg-transparent border-2 border-white rounded-md p-2 font-mono"
        />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={5}
          placeholder="Message"
          className="bg-transparent border-2 border-white rounded-md p-2 font-mono"></textarea>
        <hr className="my-2 bg-[#e5e5e5] border-0 h-[0.1rem] mr-[15rem]" />
        <input
          type="submit"
          value="Send"
          className="border-2 border-white w-[7.5rem] py-2 hover:cursor-pointer hover:bg-white hover:text-black rounded-md font-mono"
        />
      </form>
    </div>
  );
};

export default Contact;
