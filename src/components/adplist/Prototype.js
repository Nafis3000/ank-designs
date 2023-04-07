import React from 'react'
import Image from 'next/image'
import { Sen } from "@next/font/google";

const sen = Sen({
  subsets: ["latin"],
  weight: "800",
});
  

function Prototype() {
  return (
    <>
      <div className="flex flex-col bg-white w-full items-center">
        <div className="w-10/12 sm:w-7/12">
          <h1 className="text-3xl font-extrabold">Prototype</h1>
        </div>
        <div className="w-10/12 sm:w-7/12 mt-12">
          <div className="flex w-full">
            <div className="w-6/12 flex flex-col justify-center">
              <p className="text-[#1dc570] text-xs sm:text-sm">Mid-Fidelity</p>
              <h1 className="mb-3 sm:text-2xl font-extrabold">Wireframe</h1>
              <p className="leading-loose text-sm tracking-wide">
                Our mid-fidelity wireframe includes the{" "}
                <span className={sen.className}>
                  home, login, dashboard, workspace and task page,
                </span>{" "}
                along with the new{" "}
                <span className={sen.className}>hiring page</span> that has been
                added by our team to improve mentees chances of getting hired at
                a position currently being offered.
              </p>
              <p className="leading-loose text-sm tracking-wide mt-8">
                Our aim with these wireframes is to make them{" "}
                <span className={sen.className}>
                  simple, direct and user friendly
                </span>{" "}
                while still maintaining the brand colours, touch and feel of the
                ADPList website.
              </p>
            </div>
            <div className="w-6/12 flex flex-col justify-start">
              <Image
                src="prototype1.svg"
                width={1920}
                height={1080}
                alt="prototype1"
                priority
                className="w-full h-auto drop-shadow-xl"
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-10/12 sm:w-7/12 mt-12">
          <div className="flex w-full">
            <div className="w-3/12 flex flex-col justify-start">
              <p className="text-[#1dc570] text-xs sm:text-sm">Mid-Fidelity</p>
              <h1 className="mb-3 sm:text-2xl font-extrabold">
                Added hiring feature
              </h1>
            </div>
            <div className="w-9/12 flex flex-col justify-start">
              <Image
                src="prototype2.svg"
                width={1920}
                height={1080}
                alt="prototype2"
                priority
                className="w-full h-auto drop-shadow-xl"
              ></Image>
            </div>
          </div>
          <p className="leading-loose text-sm tracking-wide mt-8">
            Our newly added hiring feature is a great tool to use when looking
            for work. This feature aims to bridge the gap between mentees and
            employment advertised by perspective mentors.
          </p>
        </div>
        <div className="w-10/12 sm:w-7/12 bg-[#1dc570] h-1 rounded-3xl my-12"></div>
      </div>
    </>
  );
}

export default Prototype