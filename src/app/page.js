import React from 'react'
import {Button} from '../components/buttons/buttons.js/'
import {Header} from "../components/headerComp/header.js/";
import {Shapesection} from '../components/shapeComp/shapesection.js/';
import Link from 'next/link'
import{Slider} from '../components/slideComp/slides.js';

 function Home() {
  return (
    <div className=''>

<div>

<main>
{/* <Header /> */}
</main>

</div>

<div className="flex justify-center bg-[url('/herovide.gif')] bg-cover bg-center items-center min-h-screen min-w-screen">

<Link href='/reservations'><Button label="MAKE RESERVATION" first /></Link>


</div>

<section>
<Shapesection /> 

</section>

<section>

</section>

    
    

    
    </div>
    
  )
}



// import Header from '@/components/headerComp/header'

export default Home

// npx create-next-app@latest .