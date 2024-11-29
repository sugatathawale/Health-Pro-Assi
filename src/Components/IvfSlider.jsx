import React, { useState } from "react";

import '../MainPage.jsx'


const IVFSlider = ({ setIvfDetails, ivfDetails }) => {
  const handleChange = (event) => {
    setIvfDetails(prev => {return {...prev, ivfCycle:event.target.value}});
  };

  return (
    <div className="slider-div text-center font-poppins p-5 mt-5">
      <h3 className="text-[#1E231E] sm:text-2xl mb-5 text-xl ml-[-120px] font-medium mt-[-30px] sm:ml-[-20px]">
        Number of IVF Cycles?
      </h3>
      <div className="relative w-[300px] mx-auto ">
        <input
          type="range"
          min="1"
          max="4"
          value={ivfDetails.ivfCycle}
          onChange={handleChange}
          className="w-full h-[20px] appearance-none bg-transparent cursor-pointer"
          style={{
            outline: "none",
            display:"flex",
            justifyContent:"center",
            alignItems:"start"
          }}
        />

        {/* Custom slider track */}
        <div className="absolute w-full h-[6px] bg-[#e5e7eb] rounded-full top-1/2 transform -translate-y-1/2 mt-[12]"></div>

        {/* Active track */}
        <div
          className="absolute h-[6px] bg-[#f38175] rounded-full top-1/2 transform -translate-y-1/2"
          style={{
            width: `${((ivfDetails.ivfCycle - 1) / 3) * 100}%`,
            transition: "width 0.3s ease-in-out",
          }}
        ></div>

        {/* Slider thumb */}
        <div
          style={{
            position: "absolute",
            left: `${((ivfDetails.ivfCycle - 1) / 3) * 100}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "20px",
            height: "20px",
            backgroundColor: "#f38175",
            borderRadius: "50%",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            zIndex: "2",
          }}
        ></div>

        {/* Dots */}
        <div className="absolute w-full flex justify-between top-1/2 transform -translate-y-1/2">
          {[1, 2, 3, 4].map((dot, index) => (
            <span
              key={index}
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#b0b0b0",
                borderRadius: "50%",
              }}
            />
          ))}
        </div>

        {/* Bubble */}
        <div
          style={{
            position: "absolute",
            left: `${((ivfDetails.ivfCycle - 1) / 3) * 100}%`,
            transform: "translateX(-50%)",
            top: "-30px",
            backgroundColor: "#f38175",
            color: "white",
            padding: "5px 10px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          {ivfDetails.ivfCycle}
        </div>
      </div>
    </div>
  );
};

export default IVFSlider;
