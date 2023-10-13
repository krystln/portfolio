"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import { ThemeContext } from "./Theme";

const Hero = () => {
	return (
		<div className="flex flex-col gap-5 items-center w-1/3 h-[100vh] justify-center max-[840px]:w-2/3">
			<SubTitle />
			<p className="font-[400] text-xl text-center ">
				👋 Welcome! I&apos;m <span className="font-[600]">Akshit Goyal</span>, a
				full-stack web developer driven by a love for detail and a flair for
				creating captivating web experiences. From just wire frames to beautiful
				code, I transform ideas into digital enchantment.
			</p>
			<SMLinks />
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

function SMLinks() {
	const { isDarkTheme } = useContext(ThemeContext);

	const linkedinIcon = isDarkTheme
		? "./icons/dark/linkedin.svg"
		: "./icons/light/linkedin.svg";
	const twitterIcon = isDarkTheme
		? "./icons/dark/twitter.svg"
		: "./icons/light/twitter.svg";
	const githubIcon = isDarkTheme
		? "./icons/dark/github.svg"
		: "./icons/light/github.svg";

	return (
		<div className="flex gap-5 items-center">
			<Link href="/">
				<Image src={linkedinIcon} alt="LinkedIn" width={50} height={50} />
			</Link>
			<Link href="/">
				<Image src={twitterIcon} alt="Twitter" width={75} height={75} />
			</Link>
			<Link href="/">
				<Image src={githubIcon} alt="GitHub" width={50} height={50} />
			</Link>
		</div>
	);
}

export default Hero;
