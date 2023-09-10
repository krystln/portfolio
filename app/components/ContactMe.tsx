import ContactForm from "./ui/ContactForm";

const Contact = () => {
  return (
    <div className="flex gap-20 items-center justify-center h-[100vh] w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-mono font-[700] hover:cursor-default mb-4">
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
      <ContactForm />
    </div>
  );
};

export default Contact;
