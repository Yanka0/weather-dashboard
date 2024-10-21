import React from "react";

interface Props {
  weatherData: any;
}

const WeatherFiveDays: React.FC<Props> = ({ weatherData }) => {
  // Function to get the day of the week from a date string
  const getDayOfWeek = (dateString: string) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    return daysOfWeek[date.getDay()];
  };
  // Grouping weather data by days
  const groupedByDays = weatherData.list.reduce((acc: any, item: any) => {
    const day = getDayOfWeek(item.dt_txt);
    if (!acc[day]) {
      // Check if the array for that day already exists
      acc[day] = []; // If not, initialize it as an empty array
    }
    acc[day].push(item);
    return acc;
  }, {});
  // Result of groupedByDays might look like this:
  // {
  //   "Monday": [
  //     { dt_txt: '2024-10-21 09:00:00', main: { temp: 20 } },
  //     { dt_txt: '2024-10-21 12:00:00', main: { temp: 22 } }
  //   ], ...

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {Object.keys(groupedByDays).map(
        (
          day,
          index // Iterate over each day in the grouped data
        ) => (
          <div key={index} className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">{day}</h2>
            <div className="grid grid-cols-4 gap-4">
              {groupedByDays[day].map(
                (
                  item: any,
                  idx: number // Iterate over each weather item for the day
                ) => (
                  <div key={idx} className="text-center">
                    <p className="font-semibold">
                      {new Date(item.dt_txt).getHours()}h{" "}
                    </p>
                    <p>{Math.round(item.main.temp)}°C</p>
                  </div>
                )
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default WeatherFiveDays;
