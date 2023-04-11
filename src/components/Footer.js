import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mt-6 flex flex-col w-full">
      <div className="bg-slate-500 w-5/6 self-center h-0.5 mb-3 sm:mb-6"></div>
      <h1 className="font-semibold text-lg sm:text-2xl self-center">
        Let's Connect <span className="text-xl sm:text-3xl">🤝</span>
      </h1>
      <p className="mt-1 text-sm sm:text-base sm:mt-3 w-full text-center sm:self-center">
        Feel free to reach out to me on any of the platforms below!
      </p>
      <div className="flex flex-row justify-center items-center my-3 sm:my-6  text-2xl sm:text-4xl">
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
          <Link href="mailto: ankdixit097@gmail.com" target="_blank" rel="noreferrer">
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
  );
};

export default Footer;
