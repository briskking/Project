"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from 'react'
    

    const slides = [
        {
          id: 1,
          title: "Monday Magic",
          description: "Every Mon 7pm.",
          image: "/images/slide1.jpg",
        },
        {
          id: 2,
          title: "Tuesday Turn Up",
          description: "Every Tue 7pm.",
          image: "/images/slide2.jpg",
        },
        {
          id: 3,
          title: "Wednesday Whine Down",
          description: "Every Wed 7pm.",
          image: "/images/slide3.jpg",
        },
        {
          id: 4,
          title: "Throwback Thursday",
          description: "Every Thu 7pm.",
          image: "/images/slide4.jpg",
        },
        {
          id: 5,
          title: "Frisky Friday",
          description: "Every Fri 7pm.",
          image: "/images/slide5.jpg",
        },
        {
          id: 6,
          title: "B▲llAZZ Saturday",
          description: "Every Sat 7pm.",
          image: "/images/slide6.jpg",
        },


      ];
    
    export function Slider() {
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      };
    
      return (
        <div className="relative w-full max-w-lg mx-auto p-4">
          <div className="relative flex items-center">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-2 bg-gray-300 rounded-full absolute left-2 z-10"
            >
              <ChevronLeft />
            </button>
    
            {/* Slide Content */}
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                <h2 className="text-xl font-bold">{slides[currentIndex].title}</h2>
                <p className="text-sm">{slides[currentIndex].description}</p>
              </div>
            </div>
    
            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-2 bg-gray-300 rounded-full absolute right-2 z-10"
            >
              <ChevronRight />
            </button>
          </div>
    
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      );
}

    

export default Slider