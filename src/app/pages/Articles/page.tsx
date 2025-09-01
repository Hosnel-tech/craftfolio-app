import React from "react";
import SearchBar from "@/app/components/searchbar";
import { MdFilterList } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { RiShareBoxLine } from "react-icons/ri";
import Board from "@/app/components/board";

export default function Articles() {
  return (
    <div className="bg-[#F7F7F7] h-full w-full flex flex-col mt-16 py-8 px-20">
      <div className=" w-full flex items-center justify-between ">
        <div className=" w-9/10 ">
          <SearchBar />
        </div>
        <div className=" mr-3 bg-[#E1E2F4] p-1 text-[#656CE0] rounded-md ">
          <MdFilterList size={28} />
        </div>
      </div>
      <div className=" w-full flex flex-col items-center justify-center gap-10 ">
        <div className=" w-full flex flex-col items-center justify-center mt-5 ">
          <div className=" w-full flex items-start font-semibold text-xl mb-3 ">
            <p>Récemment créé </p>
          </div>
          <div className="w-full h-[250px] flex items-center justify-center">
            <div className=" w-full h-full bg-[#D9D9D9] rounded-md "></div>
            <div className="w-full flex flex-col items-center justify-center p-4">
              <div className="w-full flex items-center justify-between mb-4">
                <p className="font-semibold text-2xl">MealMeat</p>
                <div className="bg-[#FDEDE4] text-[#EB5D12] text-md px-5 py-1 rounded-full">
                  <p>Design</p>
                </div>
              </div>
              <p className=" mb-2 ">
                MealMeat est le design d’une application qui te permet de
                contrôler ton régime alimentaire. Sur cette dernière l’on peut
                consommer les repas en fonctions de ses carences ou problèmes
                personnels que ce soit de.....
              </p>
              <div className=" w-full flex gap-2 mt-3 mb-3 items-start">
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
              <div className=" w-full flex gap-3 pl-1 mt-4">
                <button className=" w-full bg-[#1D4ED8] text-white text-[14px] font-semibold px-4 py-2 rounded-md ">
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
        <div className="w-full flex flex-col items-center justify-center mt-5 ">
          <div className=" w-full flex items-start font-semibold text-xl mb-3 ">
            <p>Créé il y a un moment</p>
          </div>
          <Board />
        </div>
      </div>
      Articles
    </div>
  );
}
