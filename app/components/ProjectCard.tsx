"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@components/Theme";

type PCprop = {
  title: string;
  description: string;
  url: string;
  codeUrl: string;
};

const ProjectCard = ({ title, description, url, codeUrl }: PCprop) => {
  const isDarkTheme = useContext(ThemeContext);
  const linkIcon = isDarkTheme
    ? "./icons/dark/link.svg"
    : "./icons/light/link.svg";
  const githubIcon = isDarkTheme
    ? "./icons/dark/github.svg"
    : "./icons/light/github.svg";

  return (
    <>
      <Image
        src={`/projectImg/${title}.png`}
        alt=""
        width={1280}
        height={720}
        className="border border-white z-0 "
      />

      <h2 className="flex justify-between text-2xl w-full px-5 font-bold">
        {title}
        <div className="flex gap-2">
          <a href={url} target="_blank">
            <Image
              src={linkIcon}
              alt="🔗"
              width={30}
              height={30}
              className=""
            />
          </a>
          <a href={codeUrl} target="_blank">
            <Image
              src={githubIcon}
              alt="👩‍💻"
              width={30}
              height={30}
              className=""
            />
          </a>
        </div>
      </h2>
      <p className="text-center text-lg font-thin">{description}</p>
    </>
  );
};

export default ProjectCard;
