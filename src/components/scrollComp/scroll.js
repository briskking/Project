import React from 'react'
import Image from "next/image";
import Logo from '../../../public/logodes.png';

export function Scroll() {

        return (

            <>
          <div className="overflow-hidden whitespace-nowrap w-full bg-[#402c45] py-2">
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
          </div>
          </>
        )
      }
    
export default Scroll