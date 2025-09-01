import React from "react";
import { FiGithub } from "react-icons/fi";
import { RiShareBoxLine } from "react-icons/ri";

export default function Details() {
  return (
    <div className="bg-[#F7F7F7] h-screen w-full flex flex-col mt-16 py-8 px-35">
      <div className="w-full flex items-center justify-between">
        <p className="font-semibold text-4xl">MealMeat</p>
        <div className="bg-[#FDEDE4] text-[#EB5D12] text-md px-5 py-1 rounded-full">
          <p>Design</p>
        </div>
      </div>
      <div className="flex gap-5 mt-4">
        <div className=" border border-gray-500 font-medium text-[13px] py-0.5 px-4 rounded-full">
          <p>Design</p>
        </div>
        <div className=" border border-gray-500 font-medium text-[13px] py-0.5 px-4 rounded-full">
          <p>Photoshop</p>
        </div>
        <div className=" border border-gray-500 font-medium text-[13px] py-0.5 px-4 rounded-full">
          <p className="">Canva</p>
        </div>
      </div>
      <p className="text-[16px] mt-6">
        MealMeat est le design d’une application qui te permet de contrôler ton
        régime alimentaire. Sur cette dernière l’on peut consommer les repas en
        fonctions de ses carences ou problèmes personnels que ce soit de.....
      </p>
      <div className=" mt-6 h-[50%] w-full bg-[#D9D9D9] rounded-md "></div>
      <div className="mt-6 flex items center gap-5">
        <button className="w-full border flex gap-2 items-center justify-center py-1.5 rounded-md">
          <FiGithub size={20} className=" " />
          <p className=" font-medium">Code</p>
        </button>
        <button className="w-full bg-[#10B981] text-white flex gap-2 items-center justify-center py-1.5 rounded-md">
          <RiShareBoxLine size={20} className=" " />
          <p className=" font-medium">Code</p>
        </button>
      </div>
    </div>
  );
}
