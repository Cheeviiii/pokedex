import React, { useState } from "react";

export const Search = ({ query }: any) => {
  const [search, setSearch] = useState("");

  const Buscar = (q: any) => {
    setSearch(q);
    query(q);
  };

  return (
    <div className="p-10 relative mx-auto">
      <form>
        <input
          className="border-2 border-gray-300 bg-white h-12 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="text"
          placeholder="Procurar..."
          value={search}
          onChange={(e) => Buscar(e.target.value)}
        />
      </form>
    </div>
  );
};
