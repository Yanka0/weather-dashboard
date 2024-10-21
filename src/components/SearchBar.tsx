import React, { useState } from 'react';
import search from "src/assets/search.svg";
import cross from "src/assets/cross.svg";


interface Props {
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({onSearch}) => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };
  
  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
  }
  
  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(query);
    }
    setQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchClick(); 
    }
  };

  return (
    <div className="flex justify-center w-4/12 items-center rounded-lg  px-4 py-3 m-3 lg:text-xl sm:text-base">
        <img alt="search" src={search} className="w-5 h-5 mr-4" onClick={handleSearchClick}/>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="flex-grow outline-none"
        placeholder = "Search for a city"
        onKeyDown={handleKeyDown}
      />
      <img alt="cross" src={cross} className="w-5 h-5" onClick={handleClear}/>
    </div>
  );
};

export default SearchBar;