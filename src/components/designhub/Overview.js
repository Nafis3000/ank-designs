import React from "react";
import Image from "next/image";

const Overview = () => {
  return (
    <div className="flex flex-col bg-white w-full items-center mt-12">
      <div className="flex flex-col sm:flex-row w-10/12 sm:w-7/12 justify-center items-center sm:justify-between sm:items-start">
        <div className="sm:w-9/12 flex flex-col ">
          <h1 className="text-3xl my-6 sm:mt-8">Project Overview</h1>
          <p className="leading-loose text-sm tracking-wide sm:w-10/12">
            Designhub is a cutting-edge business management app designed to
            empower clients and designers worldwide with seamless project
            management capabilities. With our app, you can easily communicate
            with your team, share invoices, complete transactions, sign and
            share documents, assign tasks, and track progress throughout the
            entirety of your project.
          </p>
          <p className="leading-loose text-sm tracking-wide sm:w-10/12 my-6">
            Our app was developed to address the longstanding problem of
            insufficient teamwork and coordination between designers and
            clients. Designhub aims to foster collaboration, streamline
            workflows, and enhance productivity by providing a centralized
            platform where all project-related activities can be easily managed
            and monitored.
          </p>
        </div>
        <div className="flex flex-col items-center sm:w-3/12">
          <h1 className="text-3xl my-6 sm:mt-8">My Role</h1>
          <p className="leading-loose text-sm tracking-wide">UX/UI Design</p>
          <p className="leading-loose text-sm tracking-wide">Research</p>
          <p className="leading-loose text-sm tracking-wide">
            Prototype & Testing
          </p>
          <p className="leading-loose text-sm tracking-wide">
            Product Strategy
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between my-6">
        <h1 className="text-xs sm:text-3xl my-1 sm:mt-8 absolute self-center ">
          Design Process
        </h1>
        <Image
          src="dh-overview1.svg"
          priority
          alt="dh process"
          width={500}
          height={500}
          className="w-full h-auto"
        ></Image>
      </div>
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl my-6 sm:mt-8 font-bold">Empathize</h1>
        <p className="leading-loose text-sm tracking-wide my-6">
          To develop an app that addresses the needs of both designers and
          clients, we conducted user research in the empathize phase of our
          design process. To empathize with designers, we conducted interviews,
          surveys, and focus groups to understand their daily workflows, pain
          points, and challenges they face when collaborating with clients. We
          found that designers often struggle with communication and
          collaboration throughout the project lifecycle, leading to delays and
          misunderstandings. To empathize with clients, we also conducted user
          research to understand their needs and expectations when working with
          designers. Through interviews and surveys, we discovered that clients
          often struggle to manage project timelines and communicate effectively
          with designers. By empathizing with both designers and clients, we
          were able to gain valuable insights that helped us design an app that
          meets the needs of both parties. This helped ensure that the app is
          user- friendly, effective, and can help improve teamwork and
          coordination throughout the project.
        </p>
      </div>
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl my-6 sm:mt-8">The Problem</h1>
        <p className="leading-loose text-sm tracking-wide my-6">
          Design projects often involve multiple stakeholders, including clients
          and designers. However, inadequate collaboration and coordination
          between these stakeholders can lead to inefficiencies,
          misunderstandings, and delays throughout the project lifecycle.
        </p>
      </div>
      <div className="w-10/12 sm:w-7/12">
        <Image
          src="dh-overview2.svg"
          priority
          alt="dh problem"
          width={500}
          height={500}
          className="w-full h-auto my-6"
        ></Image>
        <Image
          src="dh-overview3.svg"
          priority
          alt="dh problem"
          width={500}
          height={500}
          className="w-full h-auto my-12"
        ></Image>
        <h1 className="text-xl sm:text-3xl my-3 sm:mt-8">Designer Persona</h1>
        <Image
          src="dh-overview4.svg"
          priority
          alt="Designer Persona"
          width={500}
          height={500}
          className="w-full h-auto"
        ></Image>
      </div>
      <div className="w-10/12 sm:w-7/12 bg-slate-800 h-1 rounded-3xl my-12"></div>
    </div>
  );
};

export default Overview;
