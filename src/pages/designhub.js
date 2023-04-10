import React from 'react'
import Navbar from "@/components/Navbar";
import BackToTop from '@/components/BackToTop';
import ScrollProgress from '@/components/ScrollProgress';
import Ideate from '@/components/designhub/Ideate';
import Define from '@/components/designhub/Define';
import Overview from '@/components/designhub/Overview';
import Design from '@/components/designhub/Design';
import Prototype from '@/components/designhub/Prototype';
import Image from 'next/image'
import Footer from '@/components/Footer';

function designhub() {
  return (
    <>
    <Navbar />
    <ScrollProgress color={"bg-red-500"} />
    <div className={``}>
      <div className="flex flex-col h-screen w-screen">
        <Image
          src="designhub-header.svg"
          width={1920}
          height={1080}
          alt="designhub-header"
          priority
          className="w-full h-auto mt-12"
        ></Image>
        <Overview />
        <Define />
        <Ideate />
        <Design />
        <Prototype />
      </div>
    </div>
    <BackToTop />
    </>
  )
}

export default designhub