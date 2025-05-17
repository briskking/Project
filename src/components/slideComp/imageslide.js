import React from "react";
import Image from "next/image";
import { Link } from "lucide-react";
// import { useEffect, useState } from 'react'

const images = [
  "/gridimages/40.jpg",
  "/gridimages/41.jpg",
  "/gridimages/43.jpg",
  "/gridimages/45.jpg",
];

const Imageslide = ({ heading, text, reverse }) => {
  return (
    <>
      <div
        className={`relative top-0 mx-auto mt-12 flex-col sm:flex ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="clip-triangule bg-purple-950 w-95 h-70 sm:w-145 sm:h-80 text-clip text-left sm:absolute relative top-[-20px] left-[10px] z-10 sm:top-8 sm:left-[-5px] overflow-hidden">
          <div className="h-full w-full animate-slide flex">
            {[...images, ...images].map((jpg, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  src={jpg}
                  width={700}
                  height={250}
                  className="object-cover h-full w-full"
                />
              </div>
            ))}

            {/* <p className='text-[14px] text-center leading-6'>{text}</p> */}
            {/* <h1 className='text-3xl font-bold text-yellow-700 pb-2'>{heading}</h1> */}
          </div>
        </div>

        <div className="clip-trianglee bg-purple-950 w-95 h-70 sm:w-145 sm:h-80 text-clip py-1 relative sm:absolute z-0 right-[-10px] sm:right-[-5px]">
          <h1 className="text-4xl font-bold text-yellow-700 pb-1">{heading}</h1>

          <div className="mx-2 md:mx-10">
            <p className="md:text-[15.5px] text-[12px] sm:w-full w-full sm:text-center text-center md:leading-7 leading-5">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imageslide;
