import React from "react";
import feature1 from "../assets/feature-1.png";
import feature2 from "../assets/feature-2.png";

const Feature = () => {
  return (
    <section id='fitur' className='h-full bg-gray-800 '>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#111827'
          fill-opacity='1'
          d='M0,288L120,245.3C240,203,480,117,720,80C960,43,1200,53,1320,58.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'
        ></path>
      </svg>
      <h1 className='text-[30px] font-semibold text-[#9474df] text-center pb-10'>
        Gunakan Teknologi untuk mencegah pemalsuan kepemilikan !
      </h1>

      <div className='container flex flex-col xl:flex-row-reverse gap-5 justify-center w-fit mx-auto relative'>
        <div className='bg-transparent flex flex-col md:flex-row  h-full w-full rounded-md gap-5 '>
          <img
            className='mx-auto w-[250px] md:w-[500px] hover:scale-105 transition-all'
            src={feature1}
            alt=''
          />
          <div className='flex flex-col w-[400px] text-center md:text-left justify-center '>
            <h3 className='font-semibold text-[16px] md:text-[30px] text-[#9474df]'>
              Akurasi hingga 100% dengan Teknologi canggih
            </h3>
            <p className='font-light text-[12px]  md:text-[20px] text-white'>
              Kami menyediakan teknologi canggih untuk memverifikasi otentikasi
              tanda tangan dalam hitungan detik, memastikan keaslian dokumen dan
              transaksi Anda.
            </p>
          </div>
        </div>
        <div className='bg-transparent flex-col md:flex-row-reverse flex h-full w-full rounded-md gap-5'>
          <img
            className='mx-auto w-[250px] md:w-[500px] hover:scale-105 transition-all'
            src={feature2}
            alt=''
          />
          <div className='flex flex-col w-[400px] text-center md:text-right justify-center'>
            <h3 className='font-semibold text-[16px] md:text-[30px] text-[#9474df]'>
              Menghasilkan prediksi yang sempurna
            </h3>
            <p className='font-light text-[12px] md:text-[20px] text-white'>
              Teknologi kami dapat memberikan prediksi yang sangat akurat
              mengenai keaslian tanda tangan, membantu Anda mencegah segala
              bentuk pemalsuan.
            </p>
          </div>
        </div>
      </div>
      <svg id='team' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#111827'
          fill-opacity='1'
          d='M0,224L120,208C240,192,480,160,720,160C960,160,1200,192,1320,208L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
        ></path>
      </svg>
    </section>
  );
};

export default Feature;
