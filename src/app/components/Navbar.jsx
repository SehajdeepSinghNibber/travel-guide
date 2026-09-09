'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const pathName = usePathname();

  return (
    <div className='w-full h-[80px] bg-white flex justify-between items-center px-[20px] fixed top-0'>
      <div className='text-black font-bold text-2xl'>
        🌍 Travel Guide
      </div>
      <div>
        <ul className='flex justify-between items-center px-[20px] text-black gap-[10px]'>
          <Link href={"/"} className={pathName==='/'?"text-blue-500":""}><li>Home</li></Link>
          <Link href={"/destinations"} className={pathName==='/destinations'?"text-blue-500":""}><li>Destination</li></Link>
          <Link href={"/contact"} className={pathName==='/contact'?"text-blue-500":""}><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
