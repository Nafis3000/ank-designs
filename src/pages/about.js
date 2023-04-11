import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";


const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <Navbar />
      <div className="h-full">
      <motion.div style={{ y }} className="absolute -z-20 inset-x-0 top-0">
        <Image
          src="/about.background.jpg"
          width={1920}
          height={1080}
          alt="about-image"
          priority
          className="w-full h-auto"
        ></Image>
      </motion.div>
      <div className="flex flex-col justify-center items-center absolute h-[1000px] w-full bg-gradient-to-b from-indigo-300 to-white opacity-60">
      </div>
      <div className="flex flex-col justify-center items-center w-full absolute">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5/6 sm:w-3/6 flex justify-center items-center mt-24">
          <motion.img
            src="about.svg"
            width={400}
            height={400}
            alt="about-image"
            className="w-1/2 h-auto"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          ></motion.img>
        </div>
        <div className="flex flex-col w-5/6 sm:w-3/6">
          <div className="text-black flex flex-col mt-6 sm:mt-8 mb-8">
            <h1 className="text-lg sm:text-2xl py-3">Hi there, my name is Ankur</h1>
            <p className="my-2">
              I am a tech enthusiast focused on design and creating incredible
              experiences for people from all backgrounds. My goal is to combine
              my programming knowledge with design to create incredible digital
              interactions for people.
            </p>
            <p className="my-2">
              As a UX Designer, I believe that every design should start with
              the user in mind. I enjoy taking a user-centered approach to
              design, using research and data to inform my decisions. I am
              passionate about creating intuitive and user-friendly interfaces
              that enhance the user experience.
            </p>
            <p className="my-2">
              As a Junior Developer, I am constantly learning and expanding my
              skill set. I love the challenge of problem-solving and finding
              creative solutions to complex issues. I am experienced in several
              programming languages and enjoy working on a variety of projects.
            </p>
            <p className="my-2">
              In my free time, I travel a lot and enjoy exploring Vancouver's
              vibrant art and design scene. I am always seeking inspiration and
              new ideas to incorporate into my work. I am a strong believer in
              the power of collaboration and enjoy working with other creatives
              to bring ideas to life.
            </p>
            <p className="my-2">
              Overall, I am a passionate and creative individual who is always
              striving to improve and learn. I believe that combining my
              knowledge of programming and design can lead to amazing outcomes
              and I am excited to continue exploring this intersection in my
              work.
            </p>
          </div>
        </div>
        </div>
        <Footer />
      </div>
      </div>
    </>
  );
};

export default About;
