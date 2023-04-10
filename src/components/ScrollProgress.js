import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

const ScrollProgress = (color) => {
  const { scrollYProgress } = useScroll();
  let width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return <motion.div style={{ width }} className={"fixed z-50 top-10 h-4 " + color.color}></motion.div>;
};

export default ScrollProgress;
