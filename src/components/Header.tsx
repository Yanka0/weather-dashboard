import React from "react";
import SearchBar from "src/components/SearchBar";
import { useNavigate } from "react-router-dom";

interface Props {}

const Header: React.FC<Props> = () => {
  const navigate = useNavigate();

  const handleSearch = (city: string) => {
    if (city) {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <header className="flex flex-col sm:flex-row gap-3 justify-between items-center px-24 border border-b mb-3">
      <button
        className="lg:text-xl sm:text-base bg-black text-white rounded ronded-lg p-2 mt-3 sm:mt-0"
        onClick={() => navigate("/")}>
        Weather Forecast
      </button>
      <button className="lg:text-xl sm:text-base" onClick={() => navigate("/myFavorites")}>
        My favorites ♥
      </button>
      <SearchBar onSearch={handleSearch} />
    </header>
  );
};

export default Header;
