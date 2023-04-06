import Image from "next/image";
import React from "react";

function Define() {
  return (
    <div className="flex flex-col bg-[#e7e9e1]">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start w-full my-10">
        <div className="flex flex-col justify-center items-center w-10/12 sm:w-3/12 h-full my-10 sm:my-0">
          <h1 className="text-4xl font-bold text-center my-3">User Persona</h1>
          <Image
            src="persona.svg"
            width={720}
            height={680}
            alt="persona"
            priority
            className="w-full h-auto"
          ></Image>
        </div>
        <div className="sm:w-1/12"></div>
        <div className="flex flex-col justify-center items-center w-10/12 sm:w-7/12 h-full">
          <h1 className="text-4xl font-bold text-center my-3">Empathy Map</h1>
          <Image
            src="empathy.svg"
            width={720}
            height={680}
            alt="empathy map"
            priority
            className="w-full h-auto"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-4xl font-bold text-center my-3">User Journey Map</h1>
        <Image
          src="journey.svg"
          width={720}
          height={680}
          alt="journey"
          priority
          className="sm:w-11/12 h-auto"
        ></Image>
      </div>
      <p className="w-11/12 text-center self-center my-10">
        We utilized an emotional journey map to chart the progression of a
        person's experience with a product, service, or overall encounter over a
        period of time. The primary emphasis was placed on the individual's
        emotional responses and how they might perceive each touchpoint
        throughout the journey.
      </p>
    </div>
  );
}

export default Define;
