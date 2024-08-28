import Link from "next/link";
// import ContactForm from "./ui/ContactForm";

const Contact = () => {
	return (
		<div
			className="flex gap-20 items-center justify-center h-[100vh] w-full max-[650px]:flex-col max-[650px]:gap-10"
			id="Contact">
			<div className="flex flex-col items-center">
				<h1 className="text-4xl font-mono font-[700] hover:cursor-default mb-4">
					Contact Me
				</h1>
				<a
					href="mailto:akshitgoyal1025@gmail.com"
					target="_blank"
					className="hover:underline">
					akshitgoyal1025@gmail.com
				</a>
				<a
					href="https://www.linkedin.com/in/akshit1025/"
					target="_blank"
					className="hover:underline">
					linkedin.com/in/akshit1025
				</a>
				<Link href="/resume" target="_blank" className="hover:underline">
					Resume &#128279;
				</Link>
			</div>
			{/* <ContactForm /> */}
		</div>
	);
};

export default Contact;
