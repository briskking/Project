import React from "react";

export const Horiz = ({caption, first, textI, textII, textIII, textIV }) => {
  return (
    <div>
      {first ? (
        <div>
          <h1 className="text-[32px] sm:text-5xl text-yellow-50 items-center justify-center flex flex-col md:flex-row gap-2">
            {caption}
          </h1>

          <hr className="h-1 border-none bg-yellow-700 w-20 sm:w-30 items-center mx-auto mt-3" />
        </div>
      ) : (
        <div className="flex flex-col mx-31 py-5 items-center justify-center space-x-4 bg-[#1f0a24] text-center">
          <h1 className="items-center text-5xl text-gray-100 font-extrabold font-stretch-extra-expanded">
            {textI}
          </h1>

          <h4 className="font-bold text-white text-[14px] py-1 pb-4 uppercase">
            {textII}
          </h4>

          <hr className="h-1 bg-yellow-800 w-25 text-yellow-800 items-center justify-center" />

          <h2 className="text-3xl font-stretch-ultra-expanded text-purple-50 font-medium pt-5 pb-3">
            {textIII}
          </h2>

          <h3 className="py-2">{textIV}</h3>
        </div>
      )}
    </div>
  );
};

export default Horiz;
