import React from 'react'
import Navbar from "@/components/Navbar";
import Define from '@/components/adplist/Define';
import Overview from '@/components/adplist/Overview';
import Delivery from '@/components/adplist/Delivery';
import Ideate from '@/components/adplist/Ideate';
import Prototype from '@/components/adplist/Prototype';
import Usability from '@/components/adplist/Usability';

function adplist() {
  return (
    <>
      <Navbar />
      <Overview />
      <Define />
      <Ideate />
      <Prototype />
      <Usability />
      <Delivery />
    </>
  );
}

export default adplist