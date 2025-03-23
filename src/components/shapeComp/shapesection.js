import React from 'react'
import Button from '../buttons/buttons'
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Shapesection() {
  return (
    <div>


<div className='flex flex-col center bg-purple-400 max-w-full'>
<h1 className='pt-3 text-4xl font-stretch-expanded font-extrabold text-center text-fuchsia-950'>UPCOMING EVENTS</h1>
    <p className='text-center font-semibold text-fuchsia-950'>
    Experience elegance with a lineup that’s going to leave you flabbergasted everyday only at ballAZZ the Deluxe Events Spot.
    </p>

<div className='flex gap-12 mx-[50px] items-center justify-center'>
    <div className='flex flex-col gap-3'>
        <h2 className='text-5xl' id='caption'>Monday Magic</h2>
        <p className='text-lg'>Every Monday</p>
        <p className='text-lg'>07:00pm</p>
        <Button label='Book'/>

<div className='flex gap-4'>
<div className='w-12 h-12 relative'>

        <div className='bg-black hover:bg-purple-500 transition duration-300 ease-in-out hover:scale-110 w-11.8 h-9 absolute inset-0 clip-triangle'></div>

        <div className='absolute inset-0 flex gap-2 items-center justify-center px-1'>
        <ChevronLeft className='' size={24}/> 
        </div>
    </div>

    <div className='w-12 h-12 relative'>
<div className='bg-black hover:bg-purple-500 transition duration-300 ease-in-out w-11.5 h-9 absolute inset-0 clip-triangle'></div>

<div className='absolute inset-0 flex gap-2 items-center justify-center px-1'>
        <ChevronRight className='' size={24}/>
</div>


    </div>

</div>

    </div>



    <div className='' id='bannerInfo'>
<p>Join us for an extraordinary evening of music, dance, and memories that will linger long after the night is over. Welcome to the revolution;</p>
        </div>

    </div>
    </div>
    
    </div>

  )


}

export default Shapesection