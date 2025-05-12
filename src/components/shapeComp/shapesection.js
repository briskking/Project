import React from "react";
import Button from "../buttons/buttons";
import Grid from "../gridComp/grid.js/";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Slider } from "../slideComp/slides.js/";

export function Shapesection() {
  return (
    <>
      <div className="flex-col items-center justify-center">
        <div className="flex-col bg-[#1f0a24] items-center justify-center min-h-screen min-w-screen -z-0">
          <h1 className="pt-8 pb-5 text-6xl font-stretch-expanded font-extrabold text-center text-fuchsia-50">
            UPCOMING EVENTS
          </h1>
          <h4 className="text-center items-center justify-center font-semibold text-fuchsia-50 w-[65%] md:w-[50%] h-auto mx-auto text-[16px] pb-4">
            Taste uniqueness with a rollout that’s going to leave you
            shellshocked everyday only at b▲llAZZ the Deluxe Events Spot.
          </h4>

          <div className="mt-10 w-full">
            <Slider />
          </div>

          <div className="text-center px-31 py-6 leading-4 flex flex-col items-center justify-center text-[17.2px]">
            <div className="sm:w-[650px] w-[200px]">
              <h1 className="pt-10 text-5xl font-stretch-expanded font-extrabold text-center text-fuchsia-50">
                b▲llAZZ EVENTS SPOT
              </h1>
            </div>
            <h3 className="text-center font-semibold text-yellow-600 text-[11px] pb-4">
              YOUR NUMBER ONE GOTO SPOT IN +234.
            </h3>
            <hr className="h-1 border-none bg-yellow-700 w-15" />
            
            <div className="sm:w-[100%] w-[350px] justify-evenly">
            <p className="pb-6 pt-6 leading-7">
              Witness a change in the nightlife and entertainment scene that has
              revamped ballAZZ’s events & clubbing landscape. ballAZZ Events
              Spot stands as the climax of deluxe revelry, where unparalleled
              party experience is on offer in the heart of +234. As the best
              events spot in +234, we pride ourselves on curating unforgettable
              nights filled with pulsating beats, captivating lights & an
              electrifying ambiance that will leave you wanting more.
            </p>
            </div>

            <div className="sm:w-[100%] w-[350px] justify-evenly">
            <p className="pb-6 leading-7">
              ballAZZ Events Spot has earned its reputation as the most famous
              Events Spot in +234. We have redefined the party experience,
              setting new standards of opulence and excitement. Stepping through
              our doors, gets you encapsulated in a uniquely deluxe atmosphere
              spiced up with unbridled energy.
            </p>
            </div>

            <div className="sm:w-[100%] w-[350px] justify-evenly">
            <p className="pb-6 leading-7">
              At ballAZZ Events Spot, you can count on us to help you live out
              moments that last forever. Our modern state-of-the-art sound
              systems and highly talented DJs ensure that every beat gives you
              the turn it up feeling. The carefully crafted lighting setup
              elevates the entire experience, casting a magical glow that sets
              the mood for unforgettable nights. Whether you’re dancing the
              night away with friends or sipping on handcrafted cocktails at our
              exquisite bar, every moment at b▲llAZZ is a testament to our
              commitment to excellence.
            </p>
            </div>

            <div className="sm:w-[100%] w-[350px] justify-evenly">
            <p className="pb-6 leading-7 text-amber-100">
              It isnt too late to become a part of the legend that is b▲llAZZ
              Events Spot. Don’t miss out on what is notably the best events
              spot in +234. Join us for extraordinary days of music, dance, and
              memories that will linger long forever. Welcome to Change; welcome
              to ballAZZ!
            </p>
            </div>

            <div className="sm:w-[100%] w-[350px] justify-evenly">
            To learn more, contact b▲llAZZ the Deluxe Events Spot
            </div>
          </div>

          <div className="flex-col items-center justify-center">
            <div className="items-center">
              <Grid />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shapesection;
