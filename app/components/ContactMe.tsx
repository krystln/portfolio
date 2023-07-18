"use client"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {

  const form = useRef<HTMLFormElement>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailjs.sendForm('service_d6hnjig', 'template_olm8gj7', form.current as HTMLFormElement, 'NrBLYYazrNZFskqvD')
      .then((result) => {alert(result.text)}, (error) => {alert(error.text)});
  }

  return (
    <div className="flex my-[10rem]">
        <div className="border-r-2 border-white px-[2rem] mx-[2rem]">
          <h1 className="text-[55px]">Contact Me</h1>
          <a href="mailto:contact@akshitgoyal.dev">contact@akshitgoyal.dev</a>  
        </div>
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-y-1">
            <input type="text" name="contact_name" id="name" placeholder="Name" className="formElement"/>
            <input type="email" name="contact_mail" id="email" placeholder="Email" className="formElement"/>
            <textarea name="message" id="message" cols={30} rows={5} placeholder="Message" className="formElement"></textarea>
            <hr className="my-2 bg-gray-400 border-0 h-[0.1rem] mr-[15rem]" />
            <input type="submit" value="Send" className="border-2 border-gray-400 w-[7.5rem] py-[0.2rem] hover:cursor-pointer"/>
        </form>
    </div>
  )
}

export default Contact;