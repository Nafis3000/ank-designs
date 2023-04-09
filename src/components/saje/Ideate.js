import Image from "next/image";
import React from "react";

const Ideate = () => {
  return (
    <div className="flex flex-col bg-white w-full items-center">
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl my-3 font-bold">Ideate</h1>
        <h1 className="text-3xl my-6 sm:mt-12">Task Flow</h1>
        <Image
          src="saje-ideate1.svg"
          width={1920}
          height={1080}
          alt="ideate 1"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <p className="leading-loose text-sm tracking-wide">
          Our initial step was to create a basic task flow that would outline
          the actions and decisions within the application. With this task flow
          in hand, we then moved on to develop the lo-fi prototype.
        </p>
      </div>
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl my-6 sm:mt-12">Lo-Fi Wireframes</h1>
        <Image
          src="saje-ideate2.svg"
          width={1920}
          height={1080}
          alt="ideate 2"
          priority
          className="w-full h-auto my-9"
        ></Image>
        <Image
          src="saje-ideate3.svg"
          width={1920}
          height={1080}
          alt="ideate 3"
          priority
          className="w-full h-auto my-9"
        ></Image>
        <Image
          src="saje-ideate4.svg"
          width={1920}
          height={1080}
          alt="ideate 4"
          priority
          className="w-full h-auto my-9"
        ></Image>
      </div>
      <div className="w-10/12 sm:w-7/12 bg-slate-700 h-1 rounded-3xl my-6"></div>
    </div>
  );
};

export default Ideate;
