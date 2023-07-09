'use client'
import { useState } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Form submitted');
  }

  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-1'>
            <input type="text" name="name" id="name" placeholder="Name"/>
            <input type="email" name="email" id="email" placeholder="Email"/>
            <textarea name="message" id="message" cols={30} rows={10} placeholder="Message"></textarea>
            <input type="submit" value="Send"/>
        </form>
    </div>
  )
}

export default Contact;