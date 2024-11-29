import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <header className="w-full fixed top-0 left-0 bg-white shadow-md z-10 h-[85px] mb-[1px] ">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 max-w-7xl mx-auto ml-10  ">
          {/* Logo Section */}
          <div className="flex items-center justify-between w-full md:w-auto mr-8 ml-[-40px] sm:w-[100px] ms:h-[25px] gap-1  ">
            <div className="flex items-center bg-[#1E231E] p-2 w-[98px] h-[45px] justify-center mb-4 ml-6 font-poppins font-[600] leading-[30.77px] tracking-[2.47px] ">
              <span className="text-white text-3xl font-bold ">i</span>
              <span className="text-white text-3xl font-bold ">V</span>
              <span className="text-white text-3xl font-bold ">F</span>
            </div>
            <span className=" md:block text-2xl  text-black mb-4 font-[500] text-[35.16px] leading-[38.1px] tracking-[2.47px]">
              Pulse
            </span>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden ml-auto "
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon
                icon={menuOpen ? faTimes : faBars}
                size="xl"
                className="text-black"
              />
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            className={`flex flex-col md:flex-row md:flex ${
              menuOpen ? "flex" : "hidden"
            } md:flex md:gap-4 w-full md:w-auto bg-white mt-[12px] pr-[10px] `}
          >
            <a
              href="#"
              className="text-black text-lg w-full md:w-[170px] h-[22px] md:h-auto rounded-[6px] p-2 md:p-0"
            >
              Donor Programme
            </a>
            <a
              href="#"
              className="text-black text-lg w-full md:w-[184px] h-[22px] md:h-auto rounded-[6px] p-2 md:p-0"
            >
              Fertility Preservation
            </a>
            <a
              href="#"
              className="text-black text-lg w-full md:w-[201px] h-[22px] md:h-auto rounded-[6px] p-2 md:p-0"
            >
              Advanced Treatments
            </a>
            <a
              href="#"
              className="text-black text-lg w-full md:w-[188px] h-[22px] md:h-auto rounded-[6px] p-2 md:p-0"
            >
              Infertility Treatments
            </a>
            <a
              href="#"
              className="text-black text-lg w-full md:w-[107px] h-[22px] md:h-auto rounded-[6px] p-2 md:p-0"
            >
              IVF Testing{" "}
            </a>
            <a
              href="#"
              className="text-black text-lg w-full md:w-[93px] h-[22px] md:h-auto rounded-[6px] p-2 md:p-0"
            >
              About Us
            </a>
            <button className="bg-red-500 text-white w-50 md:w-[120px] h-[48px]  rounded-[6px] mt-4 md:mt-[-6px] items-center justify-center ">
              Talk to Us <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </header>
    );
};

export default Navbar;
