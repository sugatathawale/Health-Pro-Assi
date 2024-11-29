import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Checklist = ({ setIvfDetails }) => {
  const [conditions, setConditions] = useState({
    PCOS: false,
    Endometriosis: false,
    LowOvarianReserve: false,
    MaleFactorInfertility: false,
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setConditions((prev) => {
      const updatedConditions = { ...prev, [name]: checked };

      if (Object.values(updatedConditions).some((value) => value)) {
        setError("");
      }

      setIvfDetails(prev => {return { ...prev, medicalCondition :conditions};})
      return updatedConditions;
    });
  };

  const handleCalculate = () => {
    const anyConditionSelected = Object.values(conditions).some(
      (value) => value
    );

    if (!anyConditionSelected) {
      setError("Please select at least one medical condition.");
    } else {
      setError("");
      navigate("/result");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className=" sm:text-2xl leading-42 mb-6 text-black  mt-[20px] leading-42 text-xl ml-[12px]">
        Do you have any of these medical conditions?
      </h1>
      <div className="flex sm:flex-wrap items-start flex-col sm:flex-row gap-6 mb-6 ml-[-150px] sm:ml-[30px]">
        {Object.keys(conditions).map((condition) => (
          <label
            key={condition}
            className="flex items-center gap-2 text-gray-700 text-sm md:text-base"
          >
            <input
              type="checkbox"
              name={condition}
              checked={conditions[condition]}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border-2 border-orange-500 bg-transparent rounded-sm focus:outline-none appearance-none checked:bg-orange-500 checked:border-orange-500 checked:focus:ring-orange-300 checked:after:content-['✔'] checked:after:text-white checked:after:block checked:after:text-center"
            />
            {condition.replace(/([A-Z])/g, " $1").trim()}
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <button
        onClick={handleCalculate}
        className="bg-[#e3776f] text-white px-6 py-2 text-sm md:text-base rounded-lg shadow-md hover:bg-[#d05d55] transition-colors"
      >
        Calculate
      </button>
    </div>
  );
};

export default Checklist;
