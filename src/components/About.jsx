import React from "react";
import about from "../assets/about.png";
import circle from "../assets/icon/circle.svg";
import circle2 from "../assets/circle.png";

const About = () => {
  return (
    <section id='about' className='bg-gray-900 pt-24 relative'>
      <img
        src={circle}
        className='hidden xl:flex absolute -bottom-56 w-96  '
        alt=''
      />
      <img
        src={circle2}
        className='hidden xl:flex absolute -bottom-14 right-0 w-56  '
        alt=''
      />
      <div className='flex flex-col lg:flex-row container justify-center items-center mx-auto'>
        <div className=''>
          <img className='object-contain lg:w-[800px]' src={about} alt='' />
        </div>
        <div className='w-fit flex flex-col  gap-5 justify-center'>
          <h1 className='text-[30px] font-semibold text-[#9474df] mx-2'>
            Tentang Kami
          </h1>
          <p className='text-white font-light text-sm mx-2 text-justify md:text-xl'>
            Kami berdedikasi untuk meningkatkan keamanan dan kepercayaan dalam
            verifikasi keaslian tanda tangan. Dengan memanfaatkan teknologi
            pemrosesan gambar dan kecerdasan buatan yang mutakhir, kami
            menyediakan solusi yang andal dan efisien untuk memverifikasi
            keaslian tanda tangan. Tim kami terdiri dari para ahli di bidang
            pemrosesan gambar dan keamanan informasi yang berkomitmen untuk
            memberikan layanan terbaik kepada pelanggan kami. Kami
            memprioritaskan keamanan data dan privasi pengguna, serta
            berkomitmen untuk memberikan pengalaman pengguna yang mulus dan
            transparan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
