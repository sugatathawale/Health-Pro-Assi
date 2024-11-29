import React, { useState } from "react";
import "../Components/AgeRangeSelector.css";

const AgeRangeSelection = ({
  setIvfDetails,
}) => {
  const [ageData, setAgeData] = useState([
    { id: 1, text: "Under 30", first: 18, last: 29, active: false },
    { id: 2, text: "Between 30 - 34", first: 30, last: 34, active: false },
    { id: 3, text: "Between 35 - 37", first: 35, last: 37, active: false },
    { id: 4, text: "Between 38 - 40", first: 38, last: 40, active: false },
    { id: 5, text: "Between 41 - 43", first: 41, last: 43, active: false },
    { id: 6, text: "Above 43", first: 44, last: 60, active: false },
  ]);

  const handleChange = (id) => {
    const updatedAgeData = ageData.map((item) => ({
      ...item,
      active: item.id === id,
    }));

    setAgeData(updatedAgeData);

    const selectedAgeData = updatedAgeData.find((item) => item.id === id);

    if (selectedAgeData) {
      const { first, last } = selectedAgeData;

      const randomAge = Math.floor(Math.random() * (last - first + 1)) + first;

      setIvfDetails(prev => {return {...prev, age:randomAge}});
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#eeeaea] mt-[150px] p-4">
      <h1 className="sm:text-2xl leading-42 mb-6 text-black text-xl font-medium ml-[-60px] sm:ml-[-20px]">
        Which age range applies to you?
      </h1>
      <div className="sm:grid grid-cols-3 gap-4 flex flex-col ml-[-180px] sm:ml-[-20px]">
        {ageData.map((age) => (
          <label key={age.id} className="flex items-center space-x-3">
            <input
              type="radio"
              name="age"
              value={age.text}
              className="radio-input"
              onChange={() => handleChange(age.id)}
              required
              // checked={selectedAge === ageRange}
            />
            <span className={age.active ? "text-black" : "text-gray-500"}>
              {age.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AgeRangeSelection;
