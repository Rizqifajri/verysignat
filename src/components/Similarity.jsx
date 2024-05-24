import React from "react";

const Similarity = ({ distance }) => {
  return (
    <section>
      {distance < 0.5 ? (
        <h1 className='text-center text-[50px] text-green-500'>
          Signature Matches 🥰
        </h1>
      ) : (
        <h1 className='text-center text-[50px] text-red-500'>
          Signature Doesn't Match 🥺
        </h1>
      )}
    </section>
  );
};

export default Similarity;
