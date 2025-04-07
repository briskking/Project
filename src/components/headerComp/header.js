"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaXTwitter, FaTiktok, FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import Logo from "../../../public/logodes.png";
import Link from "next/link";

export function Header() {
  const [Open, setOpen] = useState(false);

  return (
    <div>
      <header className="bg-black/100 flex justify-between items-center py-3 px-7 fixed top-0 w-full z-20 md:w-full mx-auto">
        <div className="">
          <Image src={Logo} alt="logo" width={80} height={80} />
        </div>

        <div className="flex gap-7 items-center mx-auto">

            <FaInstagram className="hover:text-fuchsia-400" size={15} />
            

            <FaTiktok className="hover:text-fuchsia-400" size={15}/>

        </div>

        <div className="text-center flex-col text-yellow-100 text-5xl mx-auto items-center justify-center">
          <h1 className="font-bold">b▲llazz</h1>
          <h4 className="font-bold text-[10px]">Your Deluxe Events Spot</h4>
        </div>

        <div className="flex items-center mx-auto">
          <FaXTwitter className="hover:text-fuchsia-400" size={15} />
        </div>

        <div className="px-5">
          <button onClick={() => setOpen(!Open)}>
            {Open ? (
              <X size={35} />
            ) : (
              <Menu size={50} className="hover:text-fuchsia-400" />
            )}
          </button>
        </div>

        <nav
          className={`${
            Open ? "right-0" : "right-[-100%]"
          } flex-col absolute right-0 top-20  transform text-fuchsia-100 w-full md:w-auto transition-all ease-in-out duration-300 bg-black/80`}
        >
          <ul
            className={`flex flex-col items-start gap-6 py-3 px-12 text-[21px] space-x-35 pb-55
        }`}
          >
            <Link href="/">
              <li className=" hover:text-fuchsia-400">Main</li>
            </Link>

            <Link href="/events">
              <li className=" hover:text-fuchsia-400">Events</li>
            </Link>

            <Link href="/about">
              <li className=" hover:text-fuchsia-400">About</li>
            </Link>
            <Link href="/contact">
              <li className=" hover:text-fuchsia-400">Contact</li>
            </Link>
            <Link href="/reservation">
              <li className=" hover:text-fuchsia-400">Reservations</li>
            </Link>
            <Link href="/blogs">
              <li className=" hover:text-fuchsia-400">Blogs</li>
            </Link>
            <Link href="/shop">
              <li className=" hover:text-fuchsia-400">Shop</li>
            </Link>

            <div className="flex gap-4 pt-5">
              <span className="flex gap-7">
                <FaInstagram className="hover:text-fuchsia-400" />
                <FaTiktok className="hover:text-fuchsia-400" />
                <FaXTwitter className="hover:text-fuchsia-400" />
              </span>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
