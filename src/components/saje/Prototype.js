import React from "react";

const Prototype = () => {
  return (
    <div className="flex flex-col bg-white w-full items-center">
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl my-6 font-bold">Prototype</h1>
        <p className="leading-loose text-sm tracking-wide">
          We utilized lo-fi wireframes to carry out user testing, during which
          participants were instructed to navigate the app and identify any
          difficulties or benefits they encountered. Once we gathered all the
          user feedback, we proceeded to adjust the paths and icons to
          facilitate quicker decision-making for purchasing products.
        </p>
      </div>
      <div className="flex flex-col w-10/12 sm:w-7/12">
        <h1 className="text-3xl mt-6">HiFi Prototype</h1>
        <video
          autoPlay
          muted
          playsInline
          loop
          width={1920}
          height={1080}
          alt="use3"
          className="w-5/12 h-auto self-center"
        >
          <source src="/saje-hifi.mov" />
        </video>
      </div>
    </div>
  );
};

export default Prototype;
