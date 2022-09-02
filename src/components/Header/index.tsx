import React from "react";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <div className="h-[30vh] flex items-center justify-around">
      <Logo />
      <h1 className="font-bold text-4xl text-[#FA1900] uppercase">&lsaquo;Cheevi/&rsaquo;</h1>
    </div>
  );
};
