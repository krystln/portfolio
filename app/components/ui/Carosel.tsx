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
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center mb-4 gap-2">
        <button
          onClick={cycleLeft}
          className="text-2xl bg-stone-800 pt-2 pb-3 px-8 rounded-l-full rounded-r-md">
          &larr;
        </button>
        <button
          onClick={cycleRight}
          className="text-2xl  bg-stone-800 pt-2 pb-3 px-8 rounded-r-full rounded-l-md">
          &rarr;
        </button>
      </div>
      <div className="flex items-center justify-center max-[500px]:w-[90%] w-[480px] flex-col gap-2">
        {children[current]}
      </div>
    </div>
  );
};

export default Carosel;
