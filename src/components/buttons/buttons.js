import React from "react";

export function Button({label, first}) {
  return (
    <>
    <div>
      {first ? (
      <button class="bg-white hover:bg-yellow-600 text-black font-bold py-2 px-2 text-center text-lg rounded-xl w-60 h-15 transition duration-300 ease-in-out animate-bounce hover:scale-110">
        {label} </button> ) : (

          <button class="bg-fuchsia-800 hover:bg-fuchsia-950 text-white font-bold py-2 px-1 text-[17px] rounded w-20 h-10 text-center transition duration-300 ease-in-out hover:scale-110">{label}</button>
        )

    
      }
    </div>
    </>
  );
}

export default Button;
