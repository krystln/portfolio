"use client";

import React, { useContext } from "react";
import Image from "next/image";
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
      {/* Desktop UI */}
      <div className="fixed right-10 top-0 flex flex-col justify-between h-full py-10 text-white max-[900px]:hidden">
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

      {/* Mobile UI */}
      <div className="fixed bottom-10 flex items-center justify-center w-full min-[900px]:hidden gap-1">
        <button
          className="bg-stone-800 text-2xl px-10 pb-2 rounded-l-full rounded-r-sm"
          onClick={scrollUp}>
          &uarr;
        </button>
        <button
          onClick={switchTheme}
          className="bg-stone-800 text-2xl px-10 py-[0.3rem] rounded-sm flex items-center justify-center">
          <Image
            src={theme}
            alt={isDarkTheme ? "🌞" : "🌑"}
            width={30}
            height={30}
          />
        </button>
        <button
          onClick={scrollDown}
          className="bg-stone-800 text-2xl px-10 pb-2 rounded-r-full rounded-l-sm">
          &darr;
        </button>
      </div>
    </>
  );
};

export default Scroll;
