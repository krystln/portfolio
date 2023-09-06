"use client";

import { useState } from "react";

type Props = {
  children: JSX.Element[];
};

const Carosel = ({ children }: Props) => {
  const [current, setCurrent] = useState(0);

  function cycleLeft() {
    setCurrent((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  }

  function cycleRight() {
    setCurrent((curr) => (curr + 1) % children.length);
  }

  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-around mb-4">
        <button
          onClick={cycleLeft}
          className="text-2xl bg-stone-800 py-2 px-8 rounded-full">
          &larr;
        </button>
        <button
          onClick={cycleRight}
          className="text-2xl  bg-stone-800 py-2 px-8 rounded-full">
          &rarr;
        </button>
      </div>
      <div>{children[current]}</div>
    </div>
  );
};

export default Carosel;
