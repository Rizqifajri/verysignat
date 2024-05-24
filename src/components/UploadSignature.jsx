import React, { useState } from "react";
import Similarity from "./Similarity";
import axios from "axios";
import fileSignatre from "../assets/icon/file-signature.svg";
import toast, { Toaster } from "react-hot-toast";

const UploadSignature = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [similarity, setSimilarity] = useState(null);

  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    setFile1(file);
    setImage1(URL.createObjectURL(file));
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    setFile2(file);
    setImage2(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!file1 || !file2) {
      toast.error("Please upload both signatures.");
      return;
    }

    const formData = new FormData();
    formData.append("signature", file1);
    formData.append("predict", file2);

    try {
      const response = await axios.post(
        "http://localhost:8000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSimilarity(response.data);
    } catch (error) {
      toast.error("There was an error uploading the files!", error);
    }
  };

  return (
    <>
      <Toaster />
      <section className='flex flex-col justify-center items-center w-full min-h-screen gap-10'>
        <h1 className='text-center text-[40px] font-semibold'>
          Lets Check Your Signature!🧐
        </h1>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 px-6 w-full'>
          <div className='w-full sm:w-[500px] h-auto bg-white border-4 rounded-lg border-dashed p-5'>
            <div className='flex flex-col items-center gap-5'>
              <img
                className={`w-full h-56 ${image1 ? "" : "opacity-25"}`}
                src={image1 ? image1 : fileSignatre}
                alt='Signature 1'
              />
              <label
                htmlFor='signature-upload-1'
                className='border-[#9474df] border-2 text-[#9474df] p-3 rounded-full text-[#9474df] hover:text-white font-bold hover:bg-[#9474df] transition-all cursor-pointer'
              >
                Pilih Tanda Tangan
              </label>
              <input
                id='signature-upload-1'
                type='file'
                className='hidden'
                onChange={handleFileChange1}
              />
            </div>
          </div>
          <div className='w-full sm:w-[500px] h-auto bg-white border-4 rounded-lg border-dashed p-5'>
            <div className='flex flex-col items-center gap-5'>
              <img
                className={`w-full h-56 ${image2 ? "" : "opacity-25"}`}
                src={image2 ? image2 : fileSignatre}
                alt='Signature 2'
              />
              <label
                htmlFor='signature-upload-2'
                className='border-[#9474df] border-2 text-[#9474df] p-3 rounded-full text-[#9474df] hover:text-white font-bold hover:bg-[#9474df] transition-all cursor-pointer '
              >
                Pilih Tanda Tangan
              </label>
              <input
                id='signature-upload-2'
                type='file'
                className='hidden'
                onChange={handleFileChange2}
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className='bg-[#9474df] text-white p-3 rounded-lg text-black hover:text-white font-bold hover:opacity-80 transition-all cursor-pointer shadow-lg'
        >
          Cek Keaslian
        </button>
        {similarity !== null && <Similarity distance={similarity.distance} />}
      </section>
    </>
  );
};

export default UploadSignature;
