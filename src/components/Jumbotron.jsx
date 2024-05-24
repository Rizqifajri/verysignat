import React from "react";
import background from "../assets/signaturever.jpg";

const Jumbotron = () => {
  return (
    <section
      className='h-screen bg-gray-900 bg-cover bg-center'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='text-center flex flex-col justify-center items-center h-full bg-gray-900 bg-opacity-80'>
        <h1 className='text-[#9474df] font-bold text-[40px] md:text-[70px] '>
          Advanced Signature Forgery Detection
        </h1>
        <p className='font-semibold text-white'>
          Unmatched Accuracy and Security
        </p>
        <a
          href='#fitur'
          className='text-white p-2 text-[10px] md:text-[20px] rounded-full border-2 border-[#9474df] hover:bg-[#9474df] transition-all hover:text-black font-semibold my-10'
        >
          Learn more
        </a>
      </div>
    </section>
  );
};

export default Jumbotron;
