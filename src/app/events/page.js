import React from "react";
import { Banner } from "../../components/bannerComp/bannerComp.js/";
import { Horiz } from "../../components/headingComp/hr.js/";
import { ArrowDown, Link } from "lucide-react";


function Events() {
  return (
    <>
    <div className="mx-auto py-35 flex-col items-center justify-center space-x-4 bg-[#1f0a24]">
      <Horiz 
      textI ="Dished Events at b▲llAZZ Events Spot"
      textII="Your favorite party plug in +234"
      textIII="UPCOMING/REGULAR Event Nights"
      />

{/* w-full max-w-7xl mx-auto */}
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 pt-14">
          <Banner
            url="https://res.cloudinary.com/diutqnpvv/image/upload/v1742908704/MM_act7h5.png"
            textI="Monday Magic"
            textII="Every Monday"
            click="Book"
          />

          <Banner
            url="https://res.cloudinary.com/diutqnpvv/image/upload/v1742908703/tturn_mkzidl.png"
            textI="Tuesday Turn Up"
            textII="Every Tuesday"
            click="Book"
          />

          <Banner
            url="https://res.cloudinary.com/diutqnpvv/image/upload/v1742908711/ww_kxro79.png"
            textI="Wednesday Wind &#8595;"
            textII="Every Wednesday"
            click="Book"
          />

          <Banner
            url="https://res.cloudinary.com/diutqnpvv/image/upload/v1742908703/TT2_sfpemg.png"
            textI="Throwback Thursday"
            textII="Every Thursday"
            click="Book"
          />

          <Banner
            url="https://res.cloudinary.com/diutqnpvv/image/upload/v1742908706/Freaky_Frisky_qtvaca.png"
            textI="Frisky Friday"
            textII="Every Friday"
            click="Book"
          />

          <Banner
            url="https://res.cloudinary.com/diutqnpvv/image/upload/v1742908705/sat_wywuqd.png"
            textI="B▲llAZZ Saturday"
            textII="Every Saturday"
            click="Book"
          />
        </div>
        </section>

        <div className="pt-4 mx-auto">
        <p className="text-center pt-14 text-xl sm:text-3xl md:text-2xl">Get in touch with <a href="https://localhost:3000" target="_blank" rel="noopener noreferrer"><span className="text-yellow-600 text-xs sm:text-sm md:text-base">b▲llAZZ Your Deluxe Events Spot</span></a></p>
        </div>

    </div>

    </>
  );
}

export default Events;
