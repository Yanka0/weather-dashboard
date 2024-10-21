import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCities } from "src/store/myFavorites";

interface Props {}

const MyFavorites: React.FC<Props> = () => {
  const cities = useSelector(selectCities);
  const navigate = useNavigate();
  return (
    <div>
      {cities?.length > 0 ? (
        <>
        <p className="text-3xl pb-5 text-center">Favorites:</p>
          {cities.map((item) => (
              <button className="bg-blue text-lg sm:text-4xl p-3 rounded rounded-lg m-3" key={item}>
                <p
                  className="text-white"
                  onClick={() => navigate(`/weather/${item}`)}
                >
                  {item}
                </p>
              </button>
          ))}
        </>
      ) : (
        <p className="text-3xl">No favorites</p>
      )}
    </div>
  );
};

export default MyFavorites;
