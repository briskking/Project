import React from 'react'
import {Button} from '../components/buttons/buttons.js/'
import {Header} from "../components/headerComp/header.js/";
import {Shapesection} from '../components/shapeComp/shapesection.js/';
import Link from 'next/link'
import{Slider} from '../components/slideComp/slides.js';

 function Main() {
  return (
    <div className=''>


<div className="flex justify-center bg-[url('/herovide.gif')] bg-cover bg-center items-center md:min-h-screen min-h-screen px-10 md:px-4 md:py-2 py-50 text-center">

<Link href='/reservation'><Button label="MAKE RESERVATION" first /></Link>


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

export default Main

// npx create-next-app@latest .