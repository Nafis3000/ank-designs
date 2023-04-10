import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RxDoubleArrowUp } from "react-icons/rx";


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.button
        type="button"
        onClick={scrollToTop}
        className={
          show
            ? "flex fixed bottom-10 right-3 sm:right-10 justify-center items-center rounded-full text-black outline shadow-xl h-10 w-10"
            : "hidden"
        }
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      >
        <RxDoubleArrowUp />
      </motion.button>
    </>
  );
};

export default BackToTop;
