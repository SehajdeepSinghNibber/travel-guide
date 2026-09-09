'use client'

import React from 'react'
import { useParams } from 'next/navigation'

function page() {

//   const params = useParams()
//   const city = params.city

    const {city} = useParams()

  return (
    <div className='mt-[100px] w-[50%]'>
      {city} is the best City
    </div>
  )
}

export default page
