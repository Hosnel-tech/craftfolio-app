import React from "react";
import Inscription from "@/app/components/connection/inscription";

const ConnectionPage: React.FC = () => {
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center bg-[#F7F7F7] ">
      <div className=" w-[40%] flex flex-col items-center justify-center rounded-md bg-white shadow shadow-gray-400 p-5 pt-3">
        <div className="h-full flex flex-col items-center ">
          <img src="/plume.svg" alt="Plume et style" className="w-25 h-12" />
          <h1 className=" italic text-2xl font-semibold">Connexion</h1>
        </div>
        <div className="h-full flex flex-col w-full">
          <Inscription />
        </div>
        <div>
          <p className="text-sm font-bold mt-3">
            J'ai déjà un compte ?{" "}
            <a href="#" className="text-[#1D4ED8] hover:underline italic">
              Se connecter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectionPage;
