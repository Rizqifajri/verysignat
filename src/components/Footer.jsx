import React from "react";
import pattern from "../assets/pattern.png";

const Footer = () => {
  return (
    <section className='w-full bg-gray-900 '>
      <img className='w-full object-contain' src={pattern} alt='' />
      <p className='p-5 text-center text-[#9474df]'>
        ©2024 Kelazzzz™. All Rights Reserved.
      </p>
    </section>
  );
};
export default Footer;
