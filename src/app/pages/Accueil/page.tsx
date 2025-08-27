import React from "react";
import SearchBar from "@/app/components/searchbar";
import Sidebar from "@/app/components/sidebar";
import Board from "@/app/components/board";

export default function Accueil() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F7F7] ">
      <div className="pl-20 pr-22 h-full w-full justify-start my-20">
        <div className=" h-[300px] bg-[#D9D9D9] rounded-md"></div>
        <div className="my-5 h-full w-full flex justify-center items-center gap-5">
          <div className="h-screen w-full max-w-1/4 rounded-md flex flex-col">
            <SearchBar />
            <Sidebar />
          </div>
          <div className="h-screen w-full rounded-md">
            <Board />
          </div>
        </div>
      </div>
    </div>
  );
}
