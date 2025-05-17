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

          </>
        )
      }
    
export default Scroll