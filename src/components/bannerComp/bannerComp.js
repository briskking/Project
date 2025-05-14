import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Banner = ({url, textI, textII, click}) => {
  return (
    <>

      <div className="mx-20 sm:mx-31 ">
        <Image
          src={url}
          alt="showz"
          width={200}
          height={50}
          className="object-cover w-auto h-[500px]"
        />

        <div className="flex flex-col items-start sm:items-start justify-between w-[100%] px-3 h-[80px] bg-[#402c45] border-yellow-800 rounded-lg shadow-lg z-0">

          <div className="flex items-center justify-center text-center gap-10">
          
          <div className="flex-col text-start pt-1">
            
            <div className="w-[100px] sm:[100px]">
            <h4 className="font-bold text-yellow-600 md:text-[16px] sm:text-[15.5px] text-[15.5px] capitalize pb-1">{textI}
              </h4>
              </div>
            
            <p className="text-[14px] sm:text-[14px] md:text[16px]">{textII}</p>
          </div>

          <div className="items-center justify-center">
          <Link href='/reservation'><button className="bg-yellow-800 text-white font-bold py-1 px-3 rounded-full hover:bg-yellow-600 text-[12px] sm:text-[13px] items-center justify-center">
          {click}
          </button></Link>
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
