import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleNav = () => {
    setShow(!show);
  };

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0.9 },
    }
  };


  return (
    <motion.div className="fixed w-full shadow-2xl z-[100] bg-[#0d1821] h-12">
      <motion.div className="flex justify-between items-center w-full h-full">
        <Link href="/">
          <Image
            src="Logo.svg"
            alt="/"
            width="200"
            height="100"
            className="mx-2"
          />
        </Link>
        <div>
          <ul className="hidden md:flex text-white">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center h-8 w-20 mx-2 hover:underline"
            >
              <Link href="/" scroll={false}>
                <li className="px-5 text-sm uppercase">Work</li>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center h-8 mx-2 w-20 hover:underline"
            >
              <Link href="/about" scroll={false}>
                <li className="px-5 text-sm uppercase">About</li>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center h-8 w-20 mx-2 hover:underline"
            >
              <Link href="/contact" scroll={false}>
                <li className="px-5 text-sm uppercase ">Contact</li>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center h-8 w-20 mx-2 hover:underline"
            >
              <Link
                href="/AnkurDixit-Resume.pdf"
                target="_blank"
                description="Ankur Dixit Resume"
              >
                <li className="px-5 text-sm uppercase ">Resume</li>
              </Link>
            </motion.div>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} className="text-2xl text-white mx-2" />
        </div>
      </motion.div>
      <AnimatePresence>
        {show && (
          <motion.div
            variants={item}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit="exit"
            className="fixed top-0 left-0 w-full h-full bg-[#0d1821] z-[100]"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <div
                onClick={handleNav}
                className="cursor-pointer absolute top-3 right-1"
              >
                <AiOutlineClose
                  size={25}
                  className="text-2xl text-white mx-2"
                />
              </div>
              <div className="flex flex-col justify-around items-center h-4/6">
                <Image src="Logo.svg" alt="/" width="200" height="100" />
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center h-8 w-20 mx-2 hover:underline"
                >
                  <Link href="/" className="px-5 text-sm uppercase text-white">
                    Work
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center h-8 w-20 mx-2 hover:underline"
                >
                  <Link
                    href="/about"
                    className="px-5 text-sm uppercase text-white"
                  >
                    About
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center h-8 w-20 mx-2 hover:underline"
                >
                  <Link
                    href="/contact"
                    className="px-5 text-sm uppercase text-white"
                  >
                    Contact
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center h-8 w-20 mx-2 hover:underline"
                >
                  <Link
                    href="AnkurDixit-Resume.pdf"
                    className="px-5 text-sm uppercase text-white"
                  >
                    Resume
                  </Link>
                </motion.div>
              </div>
              <div className="flex flex-row w-full justify-center items-center my-3 sm:my-6 text-4xl">
                <div className="flex text-white w-6/12 justify-around">
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
