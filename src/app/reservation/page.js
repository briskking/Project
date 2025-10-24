import React from "react";
import Horiz from "../../components/headingComp/hr.js";
import { Overlay } from "../../components/overlay.js";
// import { Form } from "../../components/formComp/form.js";
import { FormII } from '../../components/formComp/formII.js'

export function Reservation() {
  return (
    <>
      <div className="mx-auto py-29 flex-col items-center justify-center space-x-4 bg-[#1f0a24] text-center">
        <div className="md:px-1 px-4">
        <Horiz
          textI="BOOK YOUR VIP TABLE AND EVENT SPOT"
          textII="best parties in +234"
          textIII="Get on the dance floor tonight. Book your hottest nocturnal experience in +234 with just a WhatsApp message!"
          textIV="Don’t Snooze!! – see you on the dance floor!"
        />
        </div>
<div className="flex items-center justify-center pt-10">

<p className="text-[17px] text-center md:w-[700px] w-[300px] text-amber-50 font-medium">
            Book your table at b▲llAZZ Events Spot and enjoy a deluxe and excitiing night. Our VIP tables offer the perfect blend of comfort and exclusivity, ensuring you have an unforgettable experience. 
          </p>

</div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-14 ">

          <Overlay mirrorI="/gridimages/80.jpg" wording="Zone I" 
          second />

          <Overlay mirrorI="/gridimages/81.avif" wording="Zone II" second/>

          <Overlay mirrorI="/gridimages/82.avif" wording="Zone III" second/>
        </div>

        <div className="flex flex-col items-center justify-center pt-7 text-center space-x-4">
        
        <FormII />

        </div>

        <div className="flex flex-col md:flex-row items-center justify-center pt-5 gap-9">
          <div className="flex-col items-start justify-start">
            <div className="flex flex-col items-center gap-2">
            <hr className="border-2 border-yellow-700 w-15"/>
            <p className="font-bold text-4xl pb-4 w-[400px] text-left">
              <span className="text-xl font-medium">For confirm booking</span> Whatsapp Us On
            </p>
            </div>
            

            <ul className="pl-20 text-left">
              <li>+234 9012211491</li>
              <li>+234 9112211492</li>
              <li>+234 9112211493</li>
              <li>+234 9012211494</li>
            </ul>
          </div>

          <div className="flex-col items-start justify-items-start pt-7">
            <p className="w-[200px] text-left text-lg pb-3">Download Our App To Book Your Table</p>

            <Overlay mirrorII="/gridimages/95.png" words="b▲llAZZ" 
            wordsII=" Your Deluxe Events Spot"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservation;
