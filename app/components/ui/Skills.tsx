"use client";
import { useState } from "react";
import Image from "next/image";

import HtmlLogo from "@public/skillsLogo/html.svg";
import CssLogo from "@public/skillsLogo/css.svg";
import JavascriptLogo from "@public/skillsLogo/js.svg";
import ReactLogo from "@public/skillsLogo/react.svg";
import NextLogo from "@public/skillsLogo/next.svg";
import GitLogo from "@public/skillsLogo/git.svg";
import MongoLogo from "@public/skillsLogo/mongodb.svg";
import CppLogo from "@public/skillsLogo/cpp.svg";
import CLogo from "@public/skillsLogo/c.svg";
import NodeLogo from "@public/skillsLogo/nodejs.svg";

const Skills = () => {
  const [tag, setTag] = useState<string>("Languages");

  function changeTag(tag: string) {
    setTag(tag);
  }

  return (
    <>
      <div className="flex justify-around">
        <button onClick={() => changeTag("Languages")}>Languages</button>
        <button onClick={() => changeTag("Front-End")}>Front-End</button>
        <button onClick={() => changeTag("Back-End")}>Back-End</button>
      </div>
      <div className="bg-[rgb(var(--foreground-rgb))] p-10 flex">
        {tag === "Languages" && (
          <>
            <Image src={CLogo} alt="C logo" width={200} height={200} />
            <Image src={CppLogo} alt="C++ logo" width={200} height={200} />
            <Image
              src={JavascriptLogo}
              alt="javascript logo"
              width={200}
              height={200}
            />
          </>
        )}
        {tag === "Front-End" && (
          <>
            <Image src={HtmlLogo} alt="html logo" width={200} height={200} />
            <Image src={CssLogo} alt="css logo" width={200} height={200} />
            <Image src={ReactLogo} alt="react logo" width={200} height={200} />
            <Image src={NextLogo} alt="next logo" width={200} height={200} />
          </>
        )}
        {tag === "Back-End" && (
          <>
            <Image src={NodeLogo} alt="node logo" width={200} height={200} />
            <Image src={MongoLogo} alt="mongo logo" width={200} height={200} />
          </>
        )}
      </div>
    </>
  );
};

export default Skills;
