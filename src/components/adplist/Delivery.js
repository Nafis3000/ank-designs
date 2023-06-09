import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";

function Delivery() {
  return (
    <div className="flex flex-col bg-white w-full items-center">
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl font-bold">Delivery</h1>
      </div>
      <div className="w-10/12 sm:w-7/12 mt-12">
        <div className="flex flex-col sm:flex-row w-full">
          <div className="sm:w-6/12 flex flex-col justify-center sm:mr-3 p-3 bg-[#1dc570]">
            <div className="w-11/12 self-center mt-6 p-3 sm:my-0">
              <p className="text-white text-xs sm:text-sm">Final Iteration:</p>
              <h1 className="mb-3 sm:text-2xl">Hi-Fi Prototype</h1>
              <p className="leading-loose text-xs tracking-wide">
                We implemented these changes for our next iteration based on
                peer feedback
              </p>
            </div>
            <ul className="list-disc leading-loose text-xs tracking-wide w-9/12 self-center">
              <li className="mb-1">
                More <span className="font-bold">white space </span>
                between title & buttons
              </li>
              <li className="mb-1">
                More <span className="font-bold">contrast</span> between font
                weight and font size to create a type{" "}
                <span className="font-bold">hierarchy</span>
              </li>
              <li className="mb-1">
                Prototyped a <span className="font-bold">filter modal</span> to
                show what is being filtered
              </li>
              <li className="mb-1">
                Added <span className="font-bold">search button</span> on “open
                to work” and “open to hire” pages
              </li>
            </ul>
            <div className="w-11/12 self-center mt-6 p-3 sm:my-0">
              <p className="leading-loose text-xs tracking-wide">
                With the new Hiring and Workspace features, the final prototype
                addresses our initial goal:{" "}
                <span className="underline">
                  connecting others with the right people and skills to land
                  their dream job.
                </span>
              </p>
            </div>
          </div>
          <div className="sm:w-6/12 mt-4 sm:mt-0 flex flex-col justify-center">
            <video
              autoPlay
              muted
              playsInline
              loop
              width={1920}
              height={1080}
              alt="use3"
              className="w-9/12 h-auto self-center"
            >
              <source src="/delivery1.mov" />
            </video>
          </div>
        </div>
      </div>

      <Link
        href="https://www.figma.com/proto/jJSe4wtUzo2Ci1Qxljfep3/ADP-List-cs?type=design&node-id=1-877&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A877"
        target="_blank"
      >
        <button
          type="button"
          className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#377d7e] border-2 border-[#377d7e] mt-12 hover:text-white group hover:bg-gray-50"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-[#377d7e] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
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

      <div className="w-10/12 sm:w-7/12 my-24">
        <div className="flex flex-col sm:flex-row w-full">
          <div className="sm:w-6/12 flex flex-col justify-center sm:ml-3 p-3 sm:p-0">
            <div className="w-11/12 self-center mt-12 sm:my-0">
              <p className="text-[#1dc570] text-xs sm:text-sm">Reflections</p>
              <h1 className="mb-3 sm:text-2xl">Lessons Learned</h1>
            </div>
            <ul className="list-disc leading-loose text-xs tracking-wide w-9/12 self-center">
              <li className="mb-1">
                <span className="font-bold">Dig Deeper:</span> Creating an app
                doesn’t automatically equate to a solution. It was key to ask
                the right questions during interviews and go through several
                rounds of ideations to ensure that the project we were tackling{" "}
                <span className="underline">solve a UX problem.</span>
              </li>
              <li className="mb-1">
                <span className="font-bold">
                  Iteration and feedback is key:
                </span>{" "}
                Through testing our lo-fi prototype and receiving design
                critique on our hi-fi prototype, we gained more insights and{" "}
                <span className="underline">
                  improved our product much more
                </span>{" "}
                than if we had been working in a silo.
              </li>
            </ul>
          </div>
          <div className="sm:w-6/12 mt-4 sm:mt-0 flex flex-col justify-start">
            <Image
              src="delivery3.svg"
              width={1920}
              height={1080}
              alt="delivery3"
              priority
              className="w-full h-auto"
            ></Image>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Delivery;
