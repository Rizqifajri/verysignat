import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();

  return (
    <nav className=' bg-gray-900 flex justify-between items-center w-full h-24 p-10 fixed z-50'>
      <Link to='/'>
        <p className='text-[#9474df] font-bold'>VeryourSignat</p>
      </Link>

      <div className=''>
        <ul className='hidden md:flex gap-10 text-white'>
          <li className='hover:text-[#9474df] hover:scale-105 transition-all'>
            <a href='#about'>About</a>
          </li>
          <li className='hover:text-[#9474df] hover:scale-105 transition-all'>
            <a href='#fitur'>Feature</a>
          </li>
          <li className='hover:text-[#9474df] hover:scale-105 transition-all'>
            <a href='#team'>Team</a>
          </li>
        </ul>
      </div>

      <Link to='/verification'>
        <button
          className={`text-white p-2 rounded-full border-2 border-[#9474df] hover:bg-[#9474df] transition-all hover:text-black font-semibold ${
            location.pathname == "/verification" && "hidden"
          }`}
        >
          Check your signature
        </button>
      </Link>
    </nav>
  );
};

export default NavigationBar;
