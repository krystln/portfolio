"use client";

import { useEffect, useState } from "react";

import Links from "./links";

const Hero = () => {
	return (
		<div
			className="flex flex-col gap-5 items-center w-1/3 h-[100vh] justify-center max-[840px]:w-2/3"
			id="Hero">
			<SubTitle />
			<p className="font-[400] text-xl text-center ">
				👋 Welcome! I&apos;m <span className="font-[600]">Akshit Goyal</span>, a
				full-stack web developer driven by a love for detail and a flair for
				creating captivating web experiences. From just wire frames to beautiful
				code, I transform ideas into digital enchantment.
			</p>
			<Links />
		</div>
	);
};

function SubTitle() {
	const words = ["Passionate Web Developer", "Crafting Engaging Experiences"];

	const [word, setWord] = useState<string>(words[0]);

	//Typing Effect
	useEffect(() => {
		let offset = 0,
			forward = true,
			i = 0;
		const delay = 10;

		const interval = setInterval(() => {
			if (forward) {
				if (offset <= words[i].length) {
					setWord(words[i].slice(0, offset));
					offset++;
				} else {
					if (delay === offset - words[i].length) {
						forward = false;
					} else {
						offset++;
					}
				}
			} else {
				if (offset > 0) {
					setWord(words[i].slice(0, offset));
					offset--;
				} else {
					forward = true;
					i = (i + 1) % words.length;
				}
			}
		}, 100);
		return () => clearInterval(interval);
	}, []);

	return (
		<h5 className="text-stone-400 text-lg text-center flex font-mono h-[56px]">
			{word + "|"}
		</h5>
	);
}

export default Hero;
