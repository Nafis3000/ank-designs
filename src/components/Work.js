import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  
  return (
    <>
      <motion.div
        id="work"
        className="w-full md:h-full flex flex-col items-center justify-between bg-gradient-to-b from-indigo-300 via-slate-50 to-slate-50"
      >
        <div className="w-5/6 flex flex-col sm:flex-row items-center justify-center py-4">
          <div className="flex flex-col full justify-between my-6 sm:my-0">
            <h1 className="font-bold text-4xl py-4 mt-4 sm:mt-0">Hello!</h1>
            <p className="py-2 text-2xl sm:w-11/12">
              I am Ankur Dixit and I am a UX
              Designer and a Junior Developer based in Vancouver, BC.
            </p>
            <p className="py-2 text-2xl">
              I create incredible digital experiences for people.
            </p>
          </div>
          <div className='sm:pt-10 sm:w-3/6'>
            <Image
              src="face.svg"
              width={200}
              height={200}
              className="w-full h-auto"
              alt="face"
              priority
            ></Image>
          </div>
        </div>
        <div className="flex flex-col justify-around items-center">
          <div className="w-5/6 my-4 sm:my-8 shadow-lg hover:shadow-xl rounded-lg">
            <Link href="/saje">
              <motion.img
                src="case1.svg"
                className="w-full"
                width={300}
                height={300}
                alt="case2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              ></motion.img>
            </Link>
          </div>
          <div className="w-5/6 my-4 sm:my-8 shadow-lg hover:shadow-xl rounded-lg">
            <Link href="/adplist">
              <motion.img
                src="case2.svg"
                className="w-full"
                width={300}
                height={300}
                alt="case2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              ></motion.img>
            </Link>
          </div>
          <div className="w-5/6 my-4 sm:my-8 shadow-lg hover:shadow-xl rounded-lg">
            <Link href="/designhub">
              <motion.img
                src="case3.svg"
                className="w-full"
                width={300}
                height={300}
                alt="case3"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              ></motion.img>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;
