import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center sm:flex-row h-full sm:h-screen w-full bg-gradient-to-b from-indigo-300 to-slate-50">
        <div className="flex flex-col w-5/6 sm:w-3/6">
          <div className="text-black flex flex-col mt-12 sm:mt-8">
            <h1 className="text-4xl py-4">Hello!</h1>
            <p className="text-2xl my-4">
              My name is Ankur Dixit and I am a junior developer and a UX
              designer in Vancouver.
            </p>
            <p className="text-2xl my-4">
              I am a tech enthusiast focused on design and creating incredible
              experiences for people from all backgrounds.
            </p>
            <p className="text-2xl my-4">
              I believe in making it simple but making it significant.
            </p>
            <button
              type="button"
              className="rounded bg-[#0d1821] my-10 sm:my-0 sm:mt-10 w-3/5 sm:1/15 h-12 self-center text-2xl font-medium leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]"
            >
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
        <div className="w-3/6 sm:w-2/6 flex justify-center items-center">
          <Image
            src="about.svg"
            width={400}
            height={400}
            priority
            alt="about-image"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default About;
