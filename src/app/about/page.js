import React from "react";
import Imageslide from "../../components/slideComp/imageslide.js";
import { Horiz } from "../../components/headingComp/hr.js";
import { Overlay } from "../../components/overlay.js";
import Imagebox from "@/components/imagebox.js";

export function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-35 mx-auto h-full bg-[#1f0a24] w-full">
        
        <Horiz caption="About us at b▲llAZZ Events Spot"
        first
        />
        

        <section className="flex flex-col gap-90 h-auto min-h-screen mb-7">
          <div className="pt-7">
            <Imageslide
              heading="Enjoy Deluxe holidays"
              text="Let b▲llAZZ Events spot take you trabaye with a truly worthy experience of money well spent. Our creative team provides party enthusiast's with a deluxe experience of a state of the art dancefloor, unique lighting, top notch sound/tunes from some of the best in the industry plus a restaurant serving odogwu delicacies."
            />
          </div>

          <div>
            <Imageslide
              heading="Chilly Sights and Treats"
              text="Housing the best international cuisine and most wanted +234 dishes, b▲llAZZ’s riverside restaurant has the Ginger to tantalize your taste buds and travel mood. Spend the evening at our Riverside view while having the best of cocktails and +234 delicacies at b▲llAZZ's deluxe Restaurant"
              reverse
            />
          </div>
        </section>

        <section className="pt-50">
          <Horiz caption="What We Offer" 
          first
          />

          <div className="flex gap-7 pt-14">
            <Overlay
              text="Comfortable Space for your Owambe Parties"
              mirror="/gridimages/31.jpg"
              first
            />

            <Overlay
              text="A World Class Dancefloor"
              mirror="/gridimages/51.jpg"
              first
            />

            <Overlay
              text="Gbedu & Your Favorite Local/International Dishes"
              mirror="/gridimages/photo-grid.png"
              first
            />

            <Overlay
              text="Music with Smooth Drinks"
              mirror="/gridimages/3.avif"
              first
            />
          </div>
        </section>

        <section className="pt-20 space-y-8">
          <div className="z-0 ">
            <Horiz caption="OUR DEE-JAYS(Disc JOckeyers)" 
            first
            />
          </div>

          <div className="flex z-0 md:flex-row gap-12 flex-col justify-center items-center pt-14">
            <Imagebox pix="/gridimages/72.jpg" text="DJ KittyKathy" />

            <Imagebox pix="/gridimages/74.avif" text="DJ Mon ami" />
            <Imagebox pix="/gridimages/71.jpg" text="DJ Simbi" />
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
