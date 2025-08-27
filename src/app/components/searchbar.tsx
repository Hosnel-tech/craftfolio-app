"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Import de l'icône

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoute ici la logique de recherche
    console.log("Recherche :", query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full max-w-md mx-auto my-4 border border-gray-300 rounded-full pl-3"
    >
      <input
        type="text"
        placeholder="Rechercher..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 focus:outline-none text-gra-700"
      />
      <button
        type="submit"
        className=" text-gray-600 px-4 py-2 rounded-r-md flex items-center gap-2"
      >
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
