import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";


const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full w-full bg-gradient-to-b from-indigo-300 to-slate-50">
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
            <h1 className="py-4">
              I am a tech enthusiast focused on design and creating incredible
              experiences for people from all backgrounds .
            </h1>
            <p className="my-4">
              My goal is to combine my programming knowledge with design to
              create incredible digital interactions for people.
            </p>
            <p className="my-4">
              As a UX Designer, I believe that every design should start with
              the user in mind. I enjoy taking a user-centered approach to
              design, using research and data to inform my decisions. I am
              passionate about creating intuitive and user-friendly interfaces
              that enhance the user experience.
            </p>
            <p className="my-4">
              As a Junior Developer, I am constantly learning and expanding my
              skill set. I love the challenge of problem-solving and finding
              creative solutions to complex issues. I am experienced in several
              programming languages and enjoy working on a variety of projects.
            </p>
            <p className="my-4">
              In my free time, I travel a lot and enjoy exploring Vancouver's
              vibrant art and design scene. I am always seeking inspiration and
              new ideas to incorporate into my work. I am a strong believer in
              the power of collaboration and enjoy working with other creatives
              to bring ideas to life.
            </p>
            <p className="my-4">
              Overall, I am a passionate and creative individual who is always
              striving to improve and learn. I believe that combining my
              knowledge of programming and design can lead to amazing outcomes
              and I am excited to continue exploring this intersection in my
              work.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
