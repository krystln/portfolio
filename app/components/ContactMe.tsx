"use client"
import { LegacyRef, useRef } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {

  const form = useRef<HTMLFormElement>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailjs.sendForm('service_d6hnjig', 'template_olm8gj7', form.current as HTMLFormElement, process.env.EMAILJS_PUBLIC_KEY)
      .then((result) => {alert(result.text)}, (error) => {alert(error.text)});
  }

  return (
    <div className="flex my-[10rem] gap-[2rem] ContactMe">
        <div className="border-r-2 border-[#e5e5e5] px-[2rem] mx-[2rem] flex flex-col gap-2 ContactTitle">
          <h1 className="text-[55px]">Contact Me</h1>   
          <a href="mailto:contact@akshitgoyal.dev" className="pl-3">contact@akshitgoyal.dev</a>
          <a href="https://www.linkedin.com/in/akshit1025/" className="pl-3">linkedin.com/in/akshit1025</a>
          
        </div>
        <form ref={form as LegacyRef<HTMLFormElement>} onSubmit={handleSubmit} className="flex flex-col gap-y-1">
            <input type="text" name="contact_name" id="name" placeholder="Name" className="formElement"/>
            <input type="email" name="contact_mail" id="email" placeholder="Email" className="formElement"/>
            <textarea name="message" id="message" cols={30} rows={5} placeholder="Message" className="formElement"></textarea>
            <hr className="my-2 bg-[#e5e5e5] border-0 h-[0.1rem] mr-[15rem]" />
            <input type="submit" value="Send" className="border-2 border-[#e5e5e5] w-[7.5rem] py-[0.2rem] hover:cursor-pointer"/>
        </form>
    </div>
  )
}

export default Contact;