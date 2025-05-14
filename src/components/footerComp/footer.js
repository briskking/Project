"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="flex-col justify-between items-center h-[50px] gap-12 max-w-full">
        <div className="block sm:flex lg:gap-30 gap-5 sm:pt-6 pt-6 items-start sm:items-center bg-[#1f0a24] h-150 lg:h-60 w-full sm:px-30 px-10">

        {/* w-full sm:px-30 px-30 p-0 sm:p-0 */}

          <ul className="text-lg sm:text-lg">
            <li className="pb-3 font-bold">b▲llAZZ Events spot</li>
            <li>+234112211493</li>
            <li>+234112211492</li>
            <li>events@ballazz.com sales@ballazz.com</li>
          </ul>

          <ul className="pt-5 text-lg sm:text-lg">
            <li className="pb-3 font-bold">Opening Time</li>
            <li>Opening Hours - 247</li>
            <li>Party Hours - Your event 0'clock</li>
            <li>Clubbing Hours - 10pm onwards</li>
          </ul>

          <ul className="pt-5 text-lg sm:text-lg">
            <li className="pb-3 font-bold">Quick Links</li>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/shop">
              <li>Shop</li>
            </Link>
            <Link href="/reservation">
              <li>Reservations</li>
            </Link>
            <Link href="/blogs">
              <li>Blogs</li>
            </Link>
            <Link href="/events">
              <li>Events</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>

          <div className="text-center flex-col text-yellow-100 text-5xl">
            <h1 className="font-bold">b▲llazz</h1>
            <h4 className="font-bold text-[10px]">Your Deluxe Events Spot</h4>
          </div>
        </div>

        <div className="px-30 flex justify-between gap-30 items-center sm:items-center text-center sm:text-center sm:justify-center">
          <p>
            Copyright © {new Date().getFullYear()} 234 CLUBS All Rights
            Reserved.
            <span className="">
              Rules & Regulations | Refund Policy Powered By BriskNation
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
