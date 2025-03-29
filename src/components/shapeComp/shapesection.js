import React from "react";
import Button from "../buttons/buttons";
import Grid from "../gridComp/grid.js/";
import { ChevronLeft, ChevronRight} from "lucide-react";
import Link from "next/link";

export function Shapesection() {
  return (
    <div>
      <div className="flex flex-col center bg-purple-400 max-w-full">
        <h1 className="pt-3 text-6xl font-stretch-expanded font-extrabold text-center text-fuchsia-950">
          UPCOMING EVENTS
        </h1>
        <p className="text-center font-semibold text-fuchsia-950">
          Taste uniqueness with a lineup that’s going to leave you shellshocked
          everyday only at ballAZZ the Deluxe Events Spot.
        </p>

        <div className="flex gap-12 mx-[50px] items-center justify-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-5xl" id="caption">
              Monday Magic
            </h2>
            <p className="text-lg">Every Monday</p>
            <p className="text-lg">07:00pm</p>
            <Link href="/reservations">
              <Button label="Book" />
            </Link>

            <div className="flex gap-4">
              <div className="w-12 h-12 relative">
                <div className="bg-black hover:bg-purple-500 transition duration-300 ease-in-out hover:scale-110 w-11.8 h-9 absolute inset-0 clip-triangle"></div>

                <div className="absolute inset-0 flex gap-2 items-center justify-center px-1">
                  <ChevronLeft className="" size={24} />
                </div>
              </div>

              <div className="w-12 h-12 relative">
                <div className="bg-black hover:bg-purple-500 transition duration-300 ease-in-out w-11.5 h-9 absolute inset-0 clip-triangle"></div>

                <div className="absolute inset-0 flex gap-2 items-center justify-center px-1">
                  <ChevronRight className="" size={24} />
                </div>
              </div>
            </div>
          </div>

          <div className="" id="bannerInfo">
            <p>
              Join us for an extraordinary evening of music, dance, and memories
              that will linger long after the night is over. Welcome to the
              revolution;
            </p>
          </div>
        </div>
        <div className="text-center px-32 py-12">
          <h1 className="pt-20 text-5xl font-stretch-expanded font-extrabold text-center text-fuchsia-950">
            b▲llAZZ EVENTS SPOT
          </h1>
          <h3 className="text-center font-semibold text-fuchsia-950 text-[12px] pb-4">
            YOUR NUMBER ONE GOTO SPOT IN +234.
          </h3>
          <hr className="text-black font-extrabold pb-6"></hr>
          <p className="pb-4">
            Experience a change in the nightlife and entertainment scene that
            has revamped b▲llAZZ’s events & clubbing landscape. b▲llAZZ Events
            Spot stands as the climax of deluxe revelry, where unparalleled
            party experience is on offer in the heart of +234. As the best
            events spot in +234, we pride ourselves on curating unforgettable
            nights filled with pulsating beats, captivating lights & an
            electrifying ambiance that will leave you wanting more.
          </p>
          <p className="pb-4">
            b▲llAZZ Events Spot has earned its reputation as the most famous
            Events Spot in +234. We have redefined the party experience, setting
            new standards of opulence and excitement. Stepping through our
            doors, gets you encapsulated in a uniquely deluxe atmosphere spiced
            up with unbridled energy.
          </p>
          <p className="pb-4">
            At b▲llAZZ Events Spot, you can count on us to help you live out
            moments that last forever. Our modern state-of-the-art sound systems
            and highly talented DJs ensure that every beat gives you the turn it
            up feeling. The carefully crafted lighting setup elevates the entire
            experience, casting a magical glow that sets the mood for
            unforgettable nights. Whether you’re dancing the night away with
            friends or sipping on handcrafted cocktails at our exquisite bar,
            every moment at b▲llAZZ is a testament to our commitment to
            excellence.
          </p>
          <p className="pb-4">
            It isnt too late to become a part of the legend that is b▲llAZZ
            Events Spot. Don’t miss out on what is notably the best events spot
            in +234. Join us for an extraordinary evening of music, dance, and
            memories that will linger long after the night is over. Welcome to
            change; welcome to b▲llAZZ!
          </p>
          To learn more, contact b▲llAZZ the Deluxe Events Spot
        </div>

        <div>
<Grid/>

        </div>

        <div className="flex gap-30 mx-30 items-center">
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
            <Link href='/about'><li>About</li></Link>
            <Link href='/shop'><li>Shop</li></Link>
            <Link href='/reservation'><li>Reservations</li></Link>
            <Link href='/blogs'><li>Blogs</li></Link>
            <Link href='/events'><li>Events</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
          </ul>

          <div className="text-center flex-col text-yellow-100 text-5xl">
            <h1 className="font-bold">b▲llazz</h1>
            <h4 className="font-bold text-[10px]">Your Deluxe Events Spot</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shapesection;
