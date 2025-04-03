import React from 'react'
import Imageslide from '../../components/slideComp/imageslide.js'
import { Horiz } from '../../components/headingComp/hr.js'

export function About() {
  return (
    <>
    <div className='flex flex-col items-center justify-center py-30 mx-auto h-full bg-[#1f0a24] w-full'>
<Horiz />

  <section className='flex flex-col gap-90 h-auto min-h-screen mb-7'>
  
  <div className='pt-7'>
  <Imageslide 
heading="Enjoy Deluxe holidays"
text="Let b▲llAZZ Events spot take you trabaye with a truly worthy experience of money well spent. Our creative team provides party enthusiast’s with a deluxe experience of a state of the art dancefloor, unique lighting, top notch sound/tunes from some of the best in the industry plus a restaurant serving odogwu delicacies."
reverse
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
  
  


        
        
    
    SECOND

   

 
    
    </div>
    
    </>
  )
}

export default About