"use client";
import React from "react";
import Image from "next/image";
import Button from "../buttons/buttons";
import Link from "next/link";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Slide data
const slides = [
  {
    id: 1,
    title: "Monday Magic",
    description: "Every Mon 5pm.",
    image:
      "https://res.cloudinary.com/diutqnpvv/image/upload/v1742908704/MM_act7h5.png",
  },
  {
    id: 2,
    title: "Tuesday Turn Up",
    description: "Every Tue 5pm.",
    image:
      "https://res.cloudinary.com/diutqnpvv/image/upload/v1742908703/tturn_mkzidl.png",
  },
  {
    id: 3,
    title: "Wednesday Wind Down",
    description: "Every Wed 5pm.",
    image:
      "https://res.cloudinary.com/diutqnpvv/image/upload/v1742908711/ww_kxro79.png",
  },
  {
    id: 4,
    title: "Throwback Thursday",
    description: "Every Thu 7pm.",
    image:
      "https://res.cloudinary.com/diutqnpvv/image/upload/v1742908703/TT2_sfpemg.png",
  },
  {
    id: 5,
    title: "Frisky Friday",
    description: "Every Fri 7pm.",
    image:
      "https://res.cloudinary.com/diutqnpvv/image/upload/v1742908706/Freaky_Frisky_qtvaca.png",
  },
  {
    id: 6,
    title: "B▲llAZZ Saturday",
    description: "Every Sat 7pm.",
    image:
      "https://res.cloudinary.com/diutqnpvv/image/upload/v1742908705/sat_wywuqd.png",
  },
];

export function Slider() {
  const [presentIndex, setPresentIndex] = useState(0);

  const nextSlide = () => {
    setPresentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setPresentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-12">
      <div className="flex items-center justify-center p-1">
        <div className="flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-16 items-center justify-center">
          {/* Image */}
          <div className="rounded-lg shadow-lg sm:w-[200px] xl:w-[300px] overflow-hidden">
            <Link href="/events" className="cursor-pointer block">
              <img
                width={300}
                src={slides[presentIndex].image}
                alt={slides[presentIndex].title}
                className="w-full h-auto object-cover rounded-lg z-0"
              />
            </Link>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 text-white pl-7 md:p-4 w-100 z-0">
            <h2 className="text-3xl w-[500px] sm:text-4xl md:text-[50px] font-bold text-amber-600 break-words">
              {slides[presentIndex].title}
            </h2>
            <p className="text-base sm:text-lg pb-4">
              {slides[presentIndex].description}
            </p>

            <Link href="/reservation" className="inline-block max-w-fit">
              <Button label="Book" />
            </Link>

            <div className="relative w-full pt-9">
              <hr className="w-full absolute top-1/2 transform -translate-y-1/2 border-gray-600" />
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 sm:gap-10 pt-8">
              <button
                onClick={prevSlide}
                className="p-3 bg-yellow-50 hover:bg-yellow-600 clip-triangle w-13 h-10 z-0"
                aria-label="Previous slide"
              >
                <ChevronLeft className="text-black font-extrabold flex items-center justify-center" />
              </button>

              <button
                onClick={nextSlide}
                className="p-3 bg-yellow-50 hover:bg-yellow-500 clip-triangle w-13 h-10 z-0"
                aria-label="Next slide"
              >
                <ChevronRight className="text-black font-extrabold" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setPresentIndex(index)}
            className={`w-3 h-3 clip-triangle ${
              index === presentIndex ? "bg-yellow-700" : "bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
