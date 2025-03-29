'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import Image from "next/image";
import Logo from '../../../public/logodes.png';
import Link  from 'next/link';


 export function Header() {

const [Open, setOpen] = useState(false);

  return (
    <div>
    <header className="bg-purple-900/10 transparent backdrop-blur-3xl  flex justify-between items-center py-3 px-4 fixed top-0 w-full md:w-full">

<div className='px-5'>
  <Image src={Logo} alt="logo" width={80} height={80} />
</div>

    <div className="text-center flex-col text-yellow-100 text-5xl">
      <h1 className="font-bold">b▲llazz</h1>
    <h4 className='font-bold text-[10px]'>Your Deluxe Events Spot</h4>
    </div>
    

    <div className='px-5'>

    <button onClick={() => setOpen(!Open)}>
          {Open ? <X size={35} /> : <Menu size={50} />}
        </button>
    </div>

   

    <nav className={`${Open ? "flex" : "hidden"} flex-col absolute right-0 top-20  text-fuchsia-100 w-full md:w-auto transition-all ease-in-out duration-300 bg-purple-950/80`}>

      <ul className={`flex flex-col items-start text-center gap-4 py-2 px-4 text-lg space-x-30 pb-20
        }`}>

      


        <Link href="/">
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