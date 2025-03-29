import React from 'react'
import {Button} from '../components/buttons/buttons.js/'
import {Header} from "../components/headerComp/header.js/";
import {Shapesection} from '../components/shapeComp/shapesection.js/';
import Link from 'next/link'
import {Footer} from "../components/footerComp/footer.js/"
import{Slider} from '../components/slideComp/slides.js';

 function Home() {
  return (
    <div>

<div>

<main>
{/* <Header /> */}
</main>

</div>

<div className="flex justify-center bg-[url('/herovide.gif')] bg-cover bg-center items-center min-h-screen min-w-screen">

<Link href='/reservations'><Button label="MAKE RESERVATION" first /></Link>


</div>

<section>
  {/* <Slider /> */}
<Shapesection /> 

</section>

<section>

  <Footer/>
</section>

    
    

    
    </div>
    
  )
}



// import Header from '@/components/headerComp/header'

export default Home

// npx create-next-app@latest .