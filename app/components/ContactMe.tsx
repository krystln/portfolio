import ContactForm from "./ui/ContactForm";

const Contact = () => {
	return (
		<div
			className="flex gap-20 items-center justify-center h-[100vh] w-full max-[650px]:flex-col max-[650px]:gap-10"
			id="Contact">
			<div className="flex flex-col items-center">
				<h1 className="text-4xl font-mono font-[700] hover:cursor-default mb-4">
					Contact Me
				</h1>
				<a href="mailto:akshitgoyal1025@gmail.com" target="_blank" className="">
					akshitgoyal1025@gmail.com
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
