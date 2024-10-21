import React from 'react';
import night_icon from "src/assets/night_icon.svg";
import sunny_icon from "src/assets/sunny_icon.svg";
import foggy_icon from "src/assets/foggy_icon.svg";

interface Props {
  
}

const Home: React.FC<Props> = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Weather App</h1>
      <p className="text-lg mb-6">
        To get the weather forecast, please enter a city name in the search bar above.
      </p>
      <p className="text-md">
        You can search for the weather of any city in the world and get up-to-date information about the weather.
      </p>
      <div className='flex '>
      <img alt="foggy_icon" src={foggy_icon} className="sm:w-40 sm:h-40 lg:w-56 lg:h-56 w-24 h-24" />
      <img alt="sunny_icon" src={sunny_icon} className="sm:w-40 sm:h-40 lg:w-56 lg:h-56 w-24 h-24" />
       <img alt="night_icon" src={night_icon} className="sm:w-40 sm:h-40 lg:w-56 lg:h-56 w-24 h-24" /> 
      </div>
    </div>
  );
};

export default Home;