import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para lidar com a busca
    console.log('Buscando:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Aperte o K e busque aqui"
        className="border border-gray-300 rounded-2 w-[380px] sm:w-[550px] sm:p-2"
      />
      <button
        type="submit"
        className="hidden sm:bg-blue-500 text-white block sm:visible"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
