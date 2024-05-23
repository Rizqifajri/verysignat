import React from "react";
import background from "../assets/signaturever.jpg";

const Jumbotron = () => {
  return (
    <section
      className='h-screen bg-gray-900 bg-cover bg-center'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='text-center flex flex-col justify-center items-center h-full bg-gray-900 bg-opacity-70'>
        <h1 className='text-[#97EB63] font-bold text-[70px] '>
          Advanced Signature Forgery Detection
        </h1>
        <p className='font-semibold text-white'>
          Unmatched Accuracy and Security
        </p>
        <button className='text-white p-2 rounded-full border-2 border-[#97EB63] hover:bg-[#97EB63] transition-all hover:text-black font-semibold my-10'>
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Jumbotron;
