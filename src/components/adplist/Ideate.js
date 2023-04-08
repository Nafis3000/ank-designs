import React from 'react'
import Image from "next/image";

function Ideate() {
  return (
    <>
      <div className="flex flex-col bg-white w-full items-center ">
        <div className="w-10/12 sm:w-7/12">
          <h1 className="text-3xl my-6 sm:mt-8 font-extrabold">
            {" "}
            <span className="font-bold">Ideate</span>
          </h1>
        </div>
        <div className="w-10/12 sm:w-7/12">
          <p className="leading-loose text-sm tracking-wide mt-8">
            After developing our detailed user personas, we began ideating on
            potential opportunities to enhance the app and incorporate new
            features, such as a hiring function and a workspace page that tracks
            progress and assigns tasks. We considered the needs, pain points,
            and goals of our users and insights from the interviews to ensure
            that any additions to the app aligned with their expectations and
            preferences.
          </p>
          <p className="leading-loose text-sm tracking-wide mt-8">
            As we brainstormed, we created user flows for each feature to map
            out how users would navigate through the app and interact with the
            new functionalities. These user flows helped us to identify any
            potential obstacles or areas that required further refinement,
            allowing us to fine-tune the app's design before delivery.
          </p>
          <p className="leading-loose text-sm tracking-wide mt-8">
            By incorporating our user personas and user flows into our ideation
            process, we ensured that the new features and improvements to the
            app were user-focused and optimized for our target audience.
          </p>
        </div>
        <div className="w-10/12 sm:w-7/12">
          <Image
            src="ideate1.svg"
            width={1920}
            height={1080}
            alt="ideate1"
            priority
            className="w-full h-auto mt-12"
          ></Image>
        </div>
        <div className="w-10/12 sm:w-7/12 mt-12">
          <div className="flex w-full">
            <div className="w-3/12 flex flex-col justify-start">
              <h1 className="mb-3 sm:text-2xl font-extrabold">User Flow</h1>
              <p className="text-[#1dc570] text-xs sm:text-sm">
                Of Hiring Feature
              </p>
            </div>
            <div className="w-9/12 flex flex-col justify-start">
              <Image
                src="ideate2.svg"
                width={1920}
                height={1080}
                alt="ideate2"
                priority
                className="w-full h-auto drop-shadow-xl"
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-10/12 sm:w-7/12 mt-12">
          <div className="flex w-full">
            <div className="w-3/12 flex flex-col justify-start">
              <h1 className="mb-3 sm:text-2xl font-bold">User Flow</h1>
              <p className="text-[#1dc570] text-xs sm:text-sm">
                Of Workspace Feature
              </p>
            </div>
            <div className="w-9/12 flex flex-col justify-start">
              <Image
                src="ideate3.svg"
                width={1920}
                height={1080}
                alt="ideate3"
                priority
                className="w-full h-auto drop-shadow-xl"
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-10/12 sm:w-7/12 bg-[#1dc570] h-1 rounded-3xl my-12"></div>
      </div>
    </>
  );
}

export default Ideate