import Image from "next/image";
import Link from "next/link";
import React from "react";

import Github from "@public/icons/github.svg";
import Linkedin from "@public/icons/linkedin.svg";

const Links = () => {
	return (
		<div className="flex gap-5 items-center">
			<Link href="https://www.linkedin.com/in/akshit1025/">
				<Image src={Linkedin} alt="LinkedIn" width={50} height={50} />
			</Link>
			<Link href="https://github.com/krystln">
				<Image src={Github} alt="GitHub" width={50} height={50} />
			</Link>
		</div>
	);
};

export default Links;
