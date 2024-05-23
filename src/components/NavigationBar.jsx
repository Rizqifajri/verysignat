import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className=' bg-gray-900 flex justify-between items-center w-full h-24 p-10 fixed'>
      <Link to="/">
        <p className='text-[#97EB63] font-bold'>VeryourSignat</p>
      </Link>

      <div className=''>
        <ul className='flex gap-10 text-white'>
          <li className="hover:text-[#97EB63] hover:scale-105 transition-all">
            <a href=''>About</a>
          </li>
          <li className="hover:text-[#97EB63] hover:scale-105 transition-all">
            <a href=''>Feature</a>
          </li>
          <li className="hover:text-[#97EB63] hover:scale-105 transition-all">
            <a href=''>Team</a>
          </li>
        </ul>
      </div>
      <Link to='/verification'>
        <button className='text-white p-2 rounded-full border-2 border-[#97EB63] hover:bg-[#97EB63] transition-all hover:text-black font-semibold'>
          Check your signature
        </button>
      </Link>
    </nav>
  );
};

export default NavigationBar;
