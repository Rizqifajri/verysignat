import React from "react";
import profile from "../assets/profileefre.jpg";
import kiki from "../assets/kiki.jpeg";
import jikku from "../assets/jikku.jpeg";
import sandiaz from "../assets/sandiaz.jpeg";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill, RiLandscapeFill } from "react-icons/ri";

const team = [
  {
    img: kiki,
    name: "Rizqi Fajri",
    role: "Front end Developer",
  },
  {
    img: profile,
    name: "Mikael Agung",
    role: " Backend Developer",
  },
  {
    img: jikku,
    name: "Abubakar Hadziq",
    role: "Machine Learning Developer",
  },
  {
    img: sandiaz,
    name: "Sandiaz",
    role: "Machine Learning Developer",
  },
];

const OurTeamCard = () => {
  return (
    <section className=' bg-gray-900  h-full'>
      <h1 className='text-[#9474df] font-bold text-[30px] text-center pb-10'>
        Team Dev
      </h1>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 w-fit mx-auto gap-5 justify-center items-center  py-24'>
        {team.map((profile, index) => (
          <div
            key={index}
            className='bg-gray-900 w-[300px] mb-36 mx-auto  p-3 rounded-xl border-2 border-[#474F7A] '
          >
            <img
              className='mx-auto -mt-32 rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover'
              src={profile.img}
              alt=''
            />
            <h3 className='text-center text-white font-bold text-[20px] md:mt-5'>
              {profile.name}
            </h3>
            <div className='w-full bg-[#474F7A] h-0.5'></div>
            <p className='text-center text-[#9474df] font-light text-[14px]'>
              {profile.role}
            </p>
            <div className='flex justify-center items-center gap-5 py-2'>
              <FaGithubAlt
                href='/'
                fill='#9474df'
                className='w-5 h-5 hover:scale-110 transition-all cursor-pointer'
              />
              <FaLinkedin
                href='/'
                fill='#9474df'
                className='w-5 h-5 hover:scale-110 transition-all cursor-pointer'
              />
              <RiInstagramFill
                href='/'
                fill='#9474df'
                className='w-5 h-5 hover:scale-110 transition-all cursor-pointer'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeamCard;
