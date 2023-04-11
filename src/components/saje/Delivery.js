import Image from 'next/image'
import React from 'react'
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";


const Delivery = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/saje-delivery.svg"
        width={1920}
        height={1080}
        alt="delivery"
      />

      <Link
        href="https://www.figma.com/proto/7ITv5ongGdN2UjlIBxFQa1/Saje-cs?node-id=1-551&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A551"
        target="_blank"
      >
        <button
          type="button"
          className="relative bottom-20 sm:bottom-36 self-center inline-flex items-center px-3 sm:px-12 sm:py-3 overflow-hidden text-sm sm:text-lg font-medium text-black border-2 border-black mt-12 hover:text-white group hover:bg-gray-50"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative">See Prototype</span>
        </button>
      </Link>
      <div className=" flex flex-col w-full">
        <h1 className="font-semibold text-xl sm:text-2xl self-center">
          Let's Connect <span className="text-xl sm:text-3xl">🤝</span>
        </h1>
        <p className="mt-3 text-center self-center">
          Feel free to reach out to me on any of the platforms below!
        </p>
        <div className="flex flex-row justify-center items-center my-3 sm:my-6 text-2xl sm:text-4xl">
          <div className="flex w-6/12 sm:w-2/12 justify-around">
            <Link
              href="https://www.linkedin.com/in/ankdesigns/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="hover:opacity-60"
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.97 }}
              >
                <AiOutlineLinkedin />
              </motion.div>
            </Link>
            <Link
              href="mailto: ankdixit097@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="hover:opacity-60"
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.97 }}
              >
                <AiOutlineMail />
              </motion.div>
            </Link>
            <Link
              href="https://www.instagram.com/ankdesigns0/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="hover:opacity-60"
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.97 }}
              >
                <AiOutlineInstagram />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery