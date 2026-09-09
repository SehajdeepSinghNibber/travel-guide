'use client'
import Image from "next/image";

import ParisImg from "@/assets/Paris.png"
import BerlinImg from "@/assets/Berlin.png"
import TokyoImg from "@/assets/Tokyo.png"
import { useParams } from 'next/navigation'
import React from 'react'

function page({params}) {

    // const city = await params.city  (this method is only applicable in server component)

    const {city} = useParams()

  return (
    <div className='mt-[100px] w-[50%]'>
      {city} is a beautiful city.

      {
        city =="Paris" && <Image src={ParisImg} width={400} height={400} alt="Paris Image"/>
      }
      {
        city =="Berlin" && <Image src={BerlinImg} width={400} height={400} alt="Berlin Image"/>
      }
      {
        city =="Tokyo" && <Image src={TokyoImg}  width={400} height={400} alt="Tokyo Image"/>
      }

    </div>
  )
}

export default page
