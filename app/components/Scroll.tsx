"use client";

import React, { useContext } from "react";
import Image from "next/image";
import BgCurve from "./ui/BgCurve";
import { ThemeContext, ThemeSwitcherContext } from "@components/Theme";

const Scroll = () => {
  function scrollUp() {
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  }

  function scrollDown() {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  }

  const switchTheme = useContext(ThemeSwitcherContext);
  const isDarkTheme = useContext(ThemeContext);

  const theme = isDarkTheme
    ? "./icons/light/theme.svg"
    : "./icons/dark/theme.svg";

  return (
    <>
      <div className="fixed right-10 top-0 flex flex-col justify-between h-full py-10 text-white">
        <button
          className="text-4xl px-10 pb-4 rounded-full bg-stone-800 w-24 h-24"
          onClick={scrollUp}>
          &uarr;
        </button>
        <button
          className="text-4xl rounded-full bg-stone-800 w-24 h-24 flex items-center justify-center"
          onClick={switchTheme}>
          <Image
            src={theme}
            alt={isDarkTheme ? "🌞" : "🌑"}
            width={30}
            height={30}
          />
        </button>
        <button
          className="text-4xl px-10 pb-4 rounded-full bg-stone-800 w-24 h-24"
          onClick={scrollDown}>
          &darr;
        </button>
      </div>
      <div className="fixed bottom-0 left-1/3 z-[-1] ">
        <BgCurve />
      </div>
    </>
  );
};

export default Scroll;
