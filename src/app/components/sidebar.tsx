"use client";

import React, { useState } from "react";

const navOptions = [
  { label: "Tous", value: "tous" },
  { label: "Design", value: "design" },
  { label: "Développement web", value: "developpement web" },
];

const Sidebar: React.FC = () => {
  const [selected, setSelected] = useState("Tous");

  return (
    <nav className="flex flex-col justify-center items-start gap-4  py-4 w-full">
      {navOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => setSelected(option.value)}
          className={`px-6 py-2 w-full flex items-start rounded-md font-medium transition-colors
            ${
              selected === option.value
                ? "bg-[#D7DFF9] text-[#1D4ED8] "
                : "bg-[#F7F7F7] text-black hover:bg-gray-200"
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
