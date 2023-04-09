import Image from "next/image";
import React from "react";

function Define() {
  return (
    <div className="flex flex-col bg-white w-full items-center mt-12">
      <Image
        src="process.svg"
        width={1920}
        height={1080}
        alt="design process"
        priority
        className="w-full h-auto my-12"
      ></Image>
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl my-6 sm:mt-8 font-bold">Define</h1>
        <p className="leading-loose text-sm tracking-wide">
          <span className="font-bold">How might we</span> design a mobile
          application that simplifies the shopping experience for Saje Natural
          Wellness customers, while maintaining the brand's unique look and
          feel, and providing an intuitive and seamless interface.
        </p>
      </div>
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl my-6 sm:mt-8">User Interviews</h1>
        <Image
          src="saje-define1.svg"
          width={1920}
          height={1080}
          alt="design 1"
          priority
          className="w-full h-auto"
        ></Image>
        <p className="leading-loose text-sm tracking-wide mt-12 mb-6">
          To gain a deeper understanding of our users needs, we conducted
          interviews with 3-4 individuals who regularly shop at Saje. These
          users were selected based on their representation of our broader user
          base. Through these interviews, we collected valuable data which was
          analyzed to create a user persona, empathy map, and user flow for the
          application. This user research provided insights into what our users
          want in an app, allowing us to identify potential challenges they may
          face and develop solutions to address them.
        </p>
        <p className="leading-loose text-sm tracking-wide ">
          After performing user research, we begun to take that data and started
          to think of the motivations, thoughts, and actions of users as they
          may engage with the product. Using the key insights from the
          interviews, we begin to create a user persona, an empathy map and a
          user emotional journey map.
        </p>
      </div>
      <div className="w-10/12 sm:w-7/12">
        <Image
          src="saje-define2.svg"
          width={1920}
          height={1080}
          alt="define 2"
          priority
          className="w-full h-auto my-12"
        ></Image>
        <p className="leading-loose text-sm tracking-wide mt-12 mb-6">
          We utilized an emotional journey map to chart the progression of a
          person's experience with a product, service, or overall encounter over
          a period of time. The primary emphasis was placed on the individual's
          emotional responses and how they might perceive each touchpoint
          throughout the journey.
        </p>
        <Image
          src="saje-define3.svg"
          width={1920}
          height={1080}
          alt="define 3"
          priority
          className="w-full h-auto mt-12 mb-6"
        ></Image>
      </div>
      <div className="w-10/12 sm:w-7/12 bg-slate-700 h-1 rounded-3xl my-12"></div>
    </div>
  );
}

export default Define;
