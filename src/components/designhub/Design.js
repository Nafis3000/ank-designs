import React from "react";
import Image from "next/image";

const Design = () => {
  return (
    <div className="flex flex-col bg-white w-full items-center">
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl font-bold mt-6">Design</h1>
        <p className="leading-loose text-sm tracking-wide my-6">
          In the design phase, we focused on creating a low-fidelity prototype
          that incorporated the user flow, site flow, and task flow from the
          ideation phase. We used the insights gained from our user research and
          competitor analysis to refine the layout and functionality of the
          wireframes. The low-fidelity prototype allowed us to test the
          usability and effectiveness of the design without getting bogged down
          in the details. We also incorporated feedback from our team and user
          testing to ensure that the design met the needs of both designers and
          clients. The low-fidelity prototype served as a blueprint for the
          development phase of the project, allowing us to identify potential
          issues and make necessary changes before moving on to the
          high-fidelity prototype. By iterating on the low-fidelity prototype,
          we were able to create a design that is intuitive, user-friendly, and
          meets the needs of both designers and clients.
        </p>
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-3xl mt-6">Low-fidelity Prototype</h1>
          <video
            autoPlay
            muted
            playsInline
            loop
            width={1920}
            height={1080}
            alt="use3"
            className="w-6/12 mt-6 h-auto self-center"
          >
            <source src="/lofi.mov" />
          </video>
        </div>
      </div>
      <div className="w-10/12 sm:w-7/12 bg-slate-800 h-1 rounded-3xl my-6"></div>
    </div>
  );
};

export default Design;
