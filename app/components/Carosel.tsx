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
    <div className="flex overflow-hidden items-center">
      <button onClick={cycleLeft}>&larr;</button>
      <div>{children[current]}</div>
      <button onClick={cycleRight}>&rarr;</button>
    </div>
  );
};

export default Carosel;
