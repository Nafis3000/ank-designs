import React from "react";
import Navbar from "@/components/Navbar";
import Define from "@/components/adplist/Define";
import Overview from "@/components/adplist/Overview";
import Delivery from "@/components/adplist/Delivery";
import Ideate from "@/components/adplist/Ideate";
import Prototype from "@/components/adplist/Prototype";
import Usability from "@/components/adplist/Usability";
import Image from "next/image";


function adplist() {
  return (
    <>
      <Navbar />
      <div className={``}>
        <div className="flex flex-col h-screen w-screen">
          <Image
            src="adp-header.svg"
            width={1920}
            height={1080}
            alt="adplist-header"
            priority
            className="w-full h-auto mt-12"
          ></Image>
          <Overview />
          <Define />
          <Ideate />
          <Prototype />
          <Usability />
          <Delivery />
        </div>
      </div>
    </>
  );
}

export default adplist;
