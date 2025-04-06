import React from "react";
import Image from "next/image";

const Imagebox = ({ pix, text }) => {
  return (
    <div className="">
      {/* <div className='relative clip-triangle bg-purple-800 w-auto border-l-[50px] border-r-[50px] border-b-[100px]'>

</div> */}

      <div className="clip-triangular z-0 relative w-full max-w-xl flex-col text-center pt-60 text-xl font-bold text-yellow-700">
        {text}
        <Image
          width={300}
          height={200}
          src={pix}
          alt="dj kittykat"
          className="object-cover w-full h-auto absolute left-0 right-4 bottom-20 top-0 z-0"
        />
      </div>
    </div>
  );
};

export default Imagebox;
