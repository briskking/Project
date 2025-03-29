"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="flex-col justify-between items-center h-[50px] gap-12 w-full">
        <div className="flex gap-30 items-center bg-purple-900 h-60 w-full px-30">
          <ul>
            b▲llAZZ Events spot
            <li>+919112211493</li>
            <li>+919112211492</li>
            <li>events@ballazz.com sales@ballazz.com</li>
          </ul>

          <ul>
            Opening Time
            <li>Opening Hours - 247</li>
            <li>Party Hours - Your event 0'clock</li>
            <li>Clubbing Hours - 10pm onwards</li>
          </ul>

          <ul>
            Quick Links
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

        <div className="px-30 flex justify-between gap-30 items-center ">
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
