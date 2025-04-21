import React from 'react'
import Image from "next/image";
import Logo from '../../../public/logodes.png';

export function Scroll() {

        return (

            <>
<div className="relative overflow-hidden w-full bg-[#402c45] py-2 group">
      <div className="flex items-center gap-8 animate-logoScroll whitespace-nowrap ">
        {/* Repeat the logo several times for smooth loop */}
        {Array.from({ length: 14 }).map((_, index) => (
          <Image
            key={index}
            src={Logo}
            alt={`Logo ${index + 1}`}
            width={80}
            height={30}
            priority
          />
        ))}
      </div>
    </div>



{/* <div className="relative overflow-hidden w-full bg-[#402c45] py-2">
  <div className="flex animate-scrollX whitespace-nowrap">
    <span className="mx-4 text-white">Item 1</span>
    <span className="mx-4 text-white">Item 2</span>
    <span className="mx-4 text-white">Item 3</span>
    <span className="mx-4 text-white">Item 4</span>
    <span className="mx-4 text-white">Item 5</span>
    <span className="mx-4 text-white">Item 6</span>
  </div>
</div> */}



          {/* <div className="overflow-hidden whitespace-nowrap w-full bg-[#402c45] py-2">
            <div className="flex animate-logoScroll group-hover:[animation-play-state:paused] space-x-8">
              <Image
                src={Logo}
                // layout="fixed"
                // className="object-cover"
                alt="Logo"
                width={150}
                height={50}
                priority
              />
               <Image src={Logo} alt="Logo" width={150} height={50} priority />
               <Image src={Logo} alt="Logo" width={150} height={50} priority />
            </div>
          </div> */}
          </>
        )
      }
    
export default Scroll