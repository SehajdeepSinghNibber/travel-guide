'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

  const router = useRouter()

  const destinations = ['Paris','Tokyo','Berlin']

  return (
    <div className="flex justify-center items-center h-screen flex flex-col
    ">
      <div className='font-bold text-2xl'>
        Choose Your Destination
      </div>
      <div>
        {destinations.map((d,index)=>(
          <div key={index} className='text-black font-bold text-2xl flex items-center justify-center rounded-2xl w-[200px] h-[100px] bg-white m-3 hover:opacity-[0.5]' onClick={()=>{router.push(`/destinations/${d}`)}}>
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
