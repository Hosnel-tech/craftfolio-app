import React from "react";
import Link from "next/link";

const navoption = [
  { label: "Accueil", href: "/" },
  { label: "Article", href: "/" },
  { label: "A propos de nous", href: "/" },
  { label: "Contact", href: "/" },
  // Add more links as needed
];

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow shadow-gray-300 px-20 fixed top-0 left-0 right-0 z-50">
      <div>
        <img src="/Logo craft.svg" alt="Plume et style" className="w-40 h-12" />
      </div>
      <nav className="w-full p-3 flex justify-end items-center gap-5 ">
        <ul>
          {navoption.map((option) => (
            <li key={option.href} className="inline-block mx-4">
              <Link
                href={option.href}
                className="text-md font-medium hover:text-[#1D4ED8] "
              >
                {option.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-[#1D4ED8] text-white font-medium px-4 py-2 rounded-md hover:bg-[#1E40AF]">
          Se connecter
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
