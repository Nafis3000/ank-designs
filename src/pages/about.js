import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full w-full bg-gradient-to-b from-indigo-300 to-slate-50">
        <div className="w-5/6 sm:w-3/6 flex justify-center items-center mt-24">
          <Image
            src="about.svg"
            width={400}
            height={400}
            priority
            alt="about-image"
            className="w-1/2 h-auto"
          ></Image>
        </div>
        <div className="flex flex-col w-5/6 sm:w-3/6">
          <div className="text-black flex flex-col mt-6 sm:mt-8">
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
            <button
              type="button"
              className="rounded bg-[#0d1821] my-10 sm:my-0 sm:mt-10 w-3/5 sm:1/15 h-12 self-center text-2xl font-medium leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]"
            >
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
