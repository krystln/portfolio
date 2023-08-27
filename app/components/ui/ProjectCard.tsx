"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@components/Theme";

type PCprop = {
  title: string;
  description: string;
  url: string;
  codeUrl: string;
};

const ProjectCard = ({ title, description, url, codeUrl }: PCprop) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const link = isDarkTheme ? "./icons/dark/link.svg" : "./icons/light/link.svg";
  const github = isDarkTheme
    ? "./icons/dark/github.svg"
    : "./icons/light/github.svg";

  return (
    <div className="flex flex-col w-[480px] gap-2 items-center">
      <Image
        src={`/projectImg/${title}.png`}
        alt=""
        width={420}
        height={240}
        className="border border-white z-0"
      />

      <h2 className="flex justify-between text-2xl w-full px-5 font-bold">
        {title}
        <div className="flex gap-2">
          <Link href={url}>
            <Image
              src={link}
              alt="🔗"
              width={30}
              height={30}
              className="bg-white"
            />
          </Link>
          <Link href={codeUrl}>
            <Image
              src={github}
              alt="👩‍💻"
              width={30}
              height={30}
              className="bg-white"
            />
          </Link>
        </div>
      </h2>
      <p className="text-center text-lg font-thin">{description}</p>
    </div>
  );
};

export default ProjectCard;
