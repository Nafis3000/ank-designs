import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import Define from '@/components/saje/Define'

function saje() {
  return (
    <>
    <Navbar />
    <div className='flex flex-col bg-[#f1eade] h-screen'>
        <Image src='saje-header.svg' width={1920} height={1080} alt='sage-header' priority
        className='w-full h-auto mt-12'
        ></Image>
    </div>
    <Define />
    </>
  )
}

export default saje