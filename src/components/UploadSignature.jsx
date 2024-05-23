import React from "react";
import SimilarityScore from "./SimilarityScore";

const UploadSignature = () => {
  return (
    <section className='flex flex-col justify-center item-center w-full h-screen gap-10'>
      <h1 className='text-center text-[60px] font-semibold'>
        Lets Check Your Signature !
      </h1>
      <div className='flex flex-col md:flex-row justify-center items-center  gap-5  '>
        <div className='w-[500px] h-auto bg-white border-4 rounded-lg border-dashed p-5'>
          <div className='flex flex-col items-center gap-10'>
            <h1 className='text-center font-bold '> Real Signature</h1>
            <img className='w-full h-56 bg-black ' src='' alt='' />
            <label
              for='signature-upload'
              className='bg-[#97EB63] p-3 rounded-full text-black hover:text-white font-bold hover:bg-black transition-all  cursor-pointer'
            >
              Choose Your signature
            </label>
            <input id='signature-upload' type='file' className='hidden' />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center  gap-5  '>
          <div className='w-[500px] h-auto bg-white border-4 rounded-lg border-dashed p-5'>
            <div className='flex flex-col items-center gap-10'>
              <h1 className='text-center font-bold '> Real Signature</h1>
              <img className='w-full h-56 bg-black' src='' alt='' />
              <label
                for='signature-upload'
                className='bg-[#97EB63] p-3 rounded-full text-black hover:text-white font-bold hover:bg-black transition-all  cursor-pointer'
              >
                Choose Your signature
              </label>
              <input id='signature-upload' type='file' className='hidden' />
            </div>
          </div>
        </div>
      </div>
      <SimilarityScore/>
    </section>
  );
};

export default UploadSignature;
