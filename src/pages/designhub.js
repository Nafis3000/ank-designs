import React from 'react'
import Navbar from "@/components/Navbar";
import BackToTop from '@/components/BackToTop';
import ScrollProgress from '@/components/ScrollProgress';
import Image from 'next/image'
import Footer from '@/components/Footer';

function designhub() {
  return (
    <>
    <Navbar />
    <ScrollProgress color={"bg-red-500"} />
    <div className={``}>
    </div>
    <BackToTop />
    </>
  )
}

export default designhub