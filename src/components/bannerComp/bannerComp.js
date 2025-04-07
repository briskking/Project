import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Banner = ({url, textI, textII, click}) => {
  return (
    <>

      <div className="mx-31">
        <Image
          src={url}
          alt="dj kittykat"
          width={200}
          height={50}
          className="object-cover w-auto h-[500px]"
        />

        <div className="flex items-center justify-between w-[100%] px-3 h-[80px] bg-[#402c45] border-yellow-800 rounded-lg shadow-lg z-0">
          <div className="flex-col text-start">
            <h4 className="font-bold text-yellow-600 text-[15.5px] capitalize pb-1">{textI}
              </h4>
            
            <p className="text-[14px]">{textII}</p>
          </div>

          <Link href='/reservation'><button className="bg-yellow-800 text-white font-bold py-1 px-3 rounded-full hover:bg-yellow-600 text-[13px]">
          {click}
          </button></Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
