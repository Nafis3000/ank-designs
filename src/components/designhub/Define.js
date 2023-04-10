import React from "react";
import Image from "next/image";
const Define = () => {
  return (
    <div className="flex flex-col bg-white w-full items-center">
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl font-bold ">Define</h1>
        <p className="leading-loose text-sm tracking-wide my-6">
          In the define phase of the design process, we conducted a thorough
          competitor analysis to understand the strengths and weaknesses of
          existing project management tools. We found that many of these tools
          focus on task management and lack features that address the specific
          needs of designers and clients, such as document sharing, invoicing,
          and progress tracking.
        </p>
      </div>
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-xl sm:text-3xl my-3 sm:mt-8">
          Competitor Analysis
        </h1>
        <Image
          src="/dh-define1.svg"
          width={1920}
          height={1080}
          alt="Define 1"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <Image
          src="/dh-define2.svg"
          width={1920}
          height={1080}
          alt="Define 2"
          priority
          className="w-full h-auto my-12"
        ></Image>
        <Image
          src="/dh-define3.svg"
          width={1920}
          height={1080}
          alt="Define 3"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <Image
          src="/dh-define4.svg"
          width={1920}
          height={1080}
          alt="Define 4"
          priority
          className="w-full h-auto my-12"
        ></Image>
      </div>
      <div className="w-10/12 sm:w-7/12 bg-slate-800 h-1 rounded-3xl mb-6"></div>
    </div>
  );
};

export default Define;
