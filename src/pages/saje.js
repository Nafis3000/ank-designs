import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import Define from '@/components/saje/Define'
import Overview from "@/components/saje/Overview";
import Delivery from "@/components/saje/Delivery";
import Ideate from "@/components/saje/Ideate";
import Prototype from "@/components/saje/Prototype";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from '@/components/ScrollProgress';

function saje() {
  return (
    <>
      <Navbar />
      <ScrollProgress color={"bg-green-700"} />
      <div className={``}>
        <div className="flex flex-col h-screen w-screen">
          <Image
            src="saje-header.svg"
            width={1920}
            height={1080}
            alt="saje-header"
            priority
            className="w-full h-auto mt-12"
          ></Image>
          <Overview />
          <Define />
          <Ideate />
          <Prototype />
          <Delivery />
        </div>
      </div>
      <BackToTop />
    </>
  );
}

export default saje