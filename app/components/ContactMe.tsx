"use client"
import { useState } from "react"
import Link from "next/link"

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    });
  }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Form submitted");
  }

  return (
    <div className="flex my-[10rem]">
        <div className="border-r-2 border-white px-[2rem] mx-[2rem]">
          <h1 className="text-[55px]">Contact Me</h1>
          <Link href="mailto:contact@akshitgoyal.dev">contact@akshitgoyal.dev</Link>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-1">
            <input type="text" name="name" id="name" placeholder="Name" onChange={handleFormChange} className="formElement"/>
            <input type="email" name="email" id="email" placeholder="Email" onChange={handleFormChange} className="formElement"/>
            <textarea name="message" id="message" cols={30} rows={5} placeholder="Message" onChange={handleFormChange} className="formElement"></textarea>
            <hr className="my-2 bg-gray-400 border-0 h-[0.1rem] mr-[15rem]" />
            <input type="submit" value="Send" className="border-2 border-gray-400 w-[7.5rem] py-[0.2rem] hover:cursor-pointer"/>
        </form>
    </div>
  )
}

export default Contact;