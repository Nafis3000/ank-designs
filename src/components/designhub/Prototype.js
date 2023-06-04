import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";

const Prototype = () => {
  return (
    <div className="flex flex-col bg-white w-full items-center">
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl font-bold mt-6">Test</h1>
        <p className="leading-loose text-sm tracking-wide my-6">
          In the usability testing phase, we conducted tests with a group of
          designers to gauge the effectiveness and ease of use of the app. We
          tested the app's functionality, ease of navigation, and overall user
          experience. We gathered feedback from our testers to identify any
          areas where the app could be improved, and we incorporated this
          feedback into the design of the high- fidelity prototype. Our testing
          process was iterative, with multiple rounds of testing conducted to
          ensure that the app was intuitive and met the needs of our users.
        </p>
        <Image
          src="/dh-test1.svg"
          width={1920}
          height={1080}
          alt="Test 1"
          priority
          className="w-full h-auto my-6 sm:my-12"
        ></Image>
        <Image
          src="/dh-test2.svg"
          width={1920}
          height={1080}
          alt="Test 2"
          priority
          className="w-full h-auto my-6"
        ></Image>
      </div>
      <div className="w-10/12 sm:w-7/12 bg-slate-800 h-1 rounded-3xl my-6"></div>
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl font-bold mt-6">
          Final Design & Hi-fi Prototype
        </h1>
        <p className="leading-loose text-sm tracking-wide my-6">
          In the high-fidelity prototype phase, we not only refined the visual
          design and user interface, but also created a style guide and full
          design system to ensure consistency throughout the app. We
          incorporated feedback from usability testing and made necessary
          changes to improve the overall user experience. We also conducted an
          accessibility check and made sure that the app passed accessibility
          ratings to ensure that everyone, regardless of ability, can use the
          app effectively.
        </p>
      </div>
      <div className="flex flex-col w-10/12 sm:w-7/12">
        <Image
          src="/dh-final1.svg"
          width={1920}
          height={1080}
          alt="Final 1"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <Image
          src="/dh-final2.svg"
          width={1920}
          height={1080}
          alt="Final 2"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <p className="leading-loose text-sm tracking-wide my-6">
          By creating a style guide and full design system, we were able to
          maintain a cohesive look and feel throughout the app, while also
          providing our team with clear guidelines for future design iterations.
        </p>
        <Image
          src="/dh-final3.svg"
          width={1920}
          height={1080}
          alt="Final 3"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <p className="leading-loose text-sm tracking-wide my-6">
          By conducting accessibility checks, we were able to make sure that the
          app is accessible to a wide range of users, which is essential for
          ensuring inclusivity and equal access to information.
        </p>
        <Image
          src="/dh-final4.svg"
          width={1920}
          height={1080}
          alt="Final 4"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <Image
          src="/dh-final5.svg"
          width={1920}
          height={1080}
          alt="Final 5"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <Image
          src="/dh-final6.svg"
          width={1920}
          height={1080}
          alt="Final 6"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <Image
          src="/dh-final7.svg"
          width={1920}
          height={1080}
          alt="Final 7"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <Image
          src="/dh-final8.svg"
          width={1920}
          height={1080}
          alt="Final 8"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <p className="leading-loose text-sm tracking-wide my-6">
          The high-fidelity prototype serves as the final blueprint for the
          development phase of the project, ensuring that the final product is
          visually appealing, consistent, and accessible.
        </p>
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-3xl mt-6">High-fidelity Prototype</h1>
          <video
            autoPlay
            muted
            playsInline
            loop
            width={1920}
            height={1080}
            alt="use3"
            className="w-5/12 mt-6 h-auto self-center"
          >
            <source src="/hifi.mov" />
          </video>
        </div>
        <Link
          href="https://www.figma.com/proto/C8YzUZd5nPwvzI2bony7mn/Designhub-cs?type=design&node-id=3-12084&scaling=scale-down&page-id=3%3A3452&starting-point-node-id=3%3A12100"
          target="_blank"
          className="self-center"
        >
          <button
            type="button"
            className="relative inline-flex items-center px-6 sm:px-12 py-3 overflow-hidden text-lg font-medium text-black border-2 border-black mt-12 hover:text-white group hover:bg-gray-50"
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
        <Image
          src="/dh-final10.svg"
          width={1920}
          height={1080}
          alt="Final 10"
          priority
          className="w-full h-auto my-14 mb-24"
        ></Image>
      </div>
      <Footer />
    </div>
  );
};

export default Prototype;
