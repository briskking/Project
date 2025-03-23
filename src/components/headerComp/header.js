'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import Image from "next/image";
import Logo from '../../../public/logodes.png';
import  Link  from 'next/link';


export function Header() {

const [Open, setOpen] = useState(false);

  return (
    <div>
    <header className="bg-purple-900}/10 transparent backdrop-blur-3xl max-w-{1440px} flex justify-between items-center py-3 px-auto fixed top-0 w-full z-50">

<div className='px-5'>
  <Image src={Logo} alt="logo" width={80} height={80} className='md:w-55 h-55'/>
</div>

    <div className="text-center bg-gradient-to-l from-white via-yellow-100 to-purple-100 bg-clip-text text-transparent animate-gradient flex-col p-0">
      <h1 className="text-5xl md:text-3xl font-bold">b{"\u25B2"}llAZZ</h1>
    <p className='text-[10px] md:text-[8px] font-bold'>Your Deluxe Events Spot</p>
    </div>

    <div className='px-5'>

    <button onClick={() => setOpen(!Open)} className="">
          {Open ? <X size={35} /> : <Menu size={50} className='md:size-40'/>}
        </button>
      {/* <Menu/> */}
      {/* <X/> */}
    </div>

   

    <nav className={`${Open ? "flex" : "hidden"} flex-col absolute right-0 top-20 bg-purple-950/80 text-fuchsia-100 w-full md:w-auto transition-all ease-in-out duration-300`}>

      <ul className={`flex flex-col items-center text-center gap-4 py-2 px-4 text-2xl w-{3px}
        }`}>

          {/* ${
          // Open ? "top-1 right-0 p-4" : "top-[-300px]" */}


        <Link href="/page">
        <li>Main</li></Link>
        
        <Link href="/events">
        <li>Events</li></Link>

        <Link href="/about">
        <li>About</li></Link>
        <Link href="/contact">
        <li>Contact</li></Link>
        <Link href="/reservations">
        <li>Reservations</li></Link>
        <Link href="/blogs">
        <li>Blogs</li></Link>
        <Link href="/shop">
        <li>Shop</li></Link>

      </ul>
    </nav>
    

</header>
</div>
  )
}

export default Header