import React from 'react'
import {Button} from '../components/buttons/buttons.js/'
import {Header} from "../components/headerComp/header.js/";
import {Shapesection} from '../components/shapeComp/shapesection.js/';

 function Home() {
  return (
    <div>

<div>

<main>
<Header />
</main>

</div>

<div class="flex justify-center bg-[url('/herovide.gif')] bg-cover bg-center items-center min-h-screen min-w-screen">

<Button label="MAKE RESERVATION" first />


  {/* <img src='/heroVide.gif' alt='event gif' className="w-full"/> */}
  {/* width={1300} height={100}  */}
{/* <video class="w-full h-full autoplay loop muted">
  <source src="/Herovideo2.webm" type="video/webm"/>
</video> */}

</div>

<section>
<Shapesection />

</section>

    <div>

    Experience a revolution in the nightlife and entertainment scene that has transformed Goa’s clubbing landscape. ballAZZ Events Spot stands as the epitome of extravagant revelry, offering an unparalleled party experience in the heart of North Goa. As the best nightclub in Goa, we pride ourselves on curating unforgettable nights filled with pulsating beats, captivating lights, and an electrifying ambiance that will leave you craving for more.

Situated in the vibrant landscape of North Goa, ballAZZ Events Spot has earned its reputation as the most famous Events Spot in +234. We have redefined the party experience, setting new standards of opulence and excitement. From the moment you step through our doors, you’ll be enveloped in an atmosphere of sheer luxury and unbridled energy.

At ballAZZ Events Spot, we believe in creating moments that last a lifetime. Our state-of-the-art sound systems and world-class DJs ensure that every beat resonates deep within your soul. The carefully designed lighting setup elevates the entire experience, casting an enchanting glow that sets the mood for an unforgettable night. Whether you’re dancing the night away with friends or sipping on handcrafted cocktails at our exquisite bar, every moment at Hammerzz is a testament to our commitment to excellence.

Indulge in the epitome of nightlife luxury, and become a part of the legend that is ballAZZ Events Spot. Don’t miss out on what is undoubtedly the best nightclub in North Goa. Join us for an extraordinary evening of music, dance, and memories that will linger long after the night is over. Welcome to the revolution; welcome to ballAZZ!

To learn more, contact ballAZZ the Deluxe Events Spot           
    
    
ballAZZ Events Spot +234.
    +919112211492 +919112211493
    events@ballazz.com sales@ballazz.com
    Opening Time
    Opening Hours - 9.00 pm onwards
    Party Hours - 10.00 pm onwards
    Open all days
    Quick Links
    About
    Booking
    Gallery
    Event
    Blogs
    Contact</div>
    </div>
  )
}
// import Header from '@/components/headerComp/header'

export default Home

// npx create-next-app@latest .