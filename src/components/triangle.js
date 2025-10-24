import React from 'react'

function Triangle() {
  return (
    <div className='relative'>
         <div
            className="
              absolute top-[350px] left-[750px]
              w-30 h-30 bg-fuchsia-800
              [clip-path:polygon(50%_0,100%_100%,0_100%)]
              -z-10
            "
          />
    </div>
  )
}

export default Triangle