import React from "react";
import Image from "next/image";

const Ideate = () => {
  return (
    <div className="flex flex-col bg-white w-full items-center">
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl font-bold mt-6">Ideate</h1>
        <p className="leading-loose text-sm tracking-wide my-6">
          In the ideate phase of the design process, we developed initial
          sketches and wireframes to explore different design directions and
          layout options. Based on feedback from our user research, we
          prioritized features such as real-time communication, file sharing,
          invoicing, and progress tracking in the design. We also created a site
          flow, task flow, and user flow to map out the user journey and ensure
          that the app is intuitive and easy to use.
        </p>
      </div>
      <div className="flex flex-col w-10/12 sm:w-7/12">
        <Image
          src="/dh-ideate1.svg"
          width={1920}
          height={1080}
          alt="Ideate 1"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <p className="leading-loose text-sm tracking-wide my-6">
          The site flow diagram illustrates the hierarchy of pages and how they
          relate to each other, while the task flow diagram details the steps
          required to complete specific tasks within the app, such as sending an
          invoice or assigning a task. The user flow diagram maps out the user
          journey from login to project completion, including the different
          features and interactions that occur along the way. By creating these
          diagrams, we were able to ensure that the app's design and
          functionality align with the needs of both designers and clients, and
          that the user experience is seamless and intuitive
        </p>
        <Image
          src="/dh-ideate2.svg"
          width={1920}
          height={1080}
          alt="Ideate 2"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <Image
          src="/dh-ideate3.svg"
          width={1920}
          height={1080}
          alt="Ideate 3"
          priority
          className="w-full h-auto my-6"
        ></Image>
        <Image
          src="/dh-ideate4.svg"
          width={1920}
          height={1080}
          alt="Ideate 4"
          priority
          className="w-full h-auto my-6"
        ></Image>
      </div>
      <div className="w-10/12 sm:w-7/12 bg-slate-800 h-1 rounded-3xl my-6"></div>
    </div>
  );
};

export default Ideate;
