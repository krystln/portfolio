import React from "react";
import BgCurve from "./ui/BgCurve";

export const Scroll = () => {
  return (
    <>
      <div className="fixed right-10 top-0 flex flex-col justify-between h-full py-10">
        <button className="text-4xl px-10 pb-4 rounded-full bg-stone-950 w-24 h-24">
          &uarr;
        </button>
        <button className="text-4xl px-10 pb-4 rounded-full bg-stone-950 w-24 h-24">
          &darr;
        </button>
      </div>
      <div className="fixed bottom-0 left-1/3 z-[-1]">
        <BgCurve />
      </div>
    </>
  );
};
