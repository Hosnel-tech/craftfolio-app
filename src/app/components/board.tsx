import React from "react";
import { FaEye } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { RiShareBoxLine } from "react-icons/ri";

const cards = [
  { title: "Carte 1", description: "Description de la carte 1" },
  { title: "Carte 2", description: "Description de la carte 2" },
  { title: "Carte 3", description: "Description de la carte 3" },
  { title: "Carte 4", description: "Description de la carte 4" },
  // Ajoute d'autres cartes si besoin
];

export default function Board() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 h-full w-full">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className=" h-[340px] bg-[#D9D9D9]  rounded-xl flex items-end"
        >
          <div className="bg-white h-[58%] w-full p-3 flex flex-col ">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-md ">Card Title</h2>
              <div className="bg-[#FDEDE4] text-[#EB5D12] text-xs px-3 rounded-full">
                <p>Design</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[13px] text-gray-900 mt-2">
                C’est un design mobile d’une application qui te permet de
                contrôler ton.....
              </p>
              <div className="flex gap-2 mt-3">
                <div className=" border border-gray-400 text-[11px] px-3 rounded-full">
                  <p>Design</p>
                </div>
                <div className=" border border-gray-400 text-[11px] px-3 rounded-full">
                  <p>Photoshop</p>
                </div>
                <div className=" border border-gray-400 text-[11px] px-3 rounded-full">
                  <p className="">Canva</p>
                </div>
              </div>
              <div className="flex gap-3 pl-1 mt-4">
                <button className=" bg-[#1D4ED8] text-white text-[14px] font-semibold px-4 py-2 rounded-md ">
                  <FaRegEye className="inline mr-1" />
                  <span>Voir plus</span>
                </button>
                <button className="px-3 py-1 rounded-md border-1 border-gray-500 ">
                  <FiGithub className="inline " />
                </button>
                <button className="px-3 py-1 rounded-md bg-[#10B981] text-white">
                  <RiShareBoxLine className="inline " />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
