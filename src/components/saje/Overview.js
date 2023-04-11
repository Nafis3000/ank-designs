import React from "react";
import Image from "next/image";

const Overview = () => {
  return (
    <>
      <div className="flex flex-col bg-white w-full items-center mt-12">
        <div className="w-10/12 sm:w-7/12">
          <h1 className="text-3xl my-6 sm:mt-8">Overview</h1>
          <p className="leading-loose text-sm tracking-wide">
            Saje Natural Wellness is a Canadian retail brand that specializes in
            natural wellness products, dedicated to linking people with the
            restorative properties of plants. Their line of products, produced
            in British Columbia, offers 100% natural options to address various
            health and personal care requirements, such as organic essential
            oils and natural remedies that cater to issues like headaches, pain,
            allergies, colds, menopause, pregnancy, and insomnia.
          </p>
        </div>
        <div className="w-10/12 sm:w-7/12">
          <h1 className="text-3xl my-6 sm:mt-8">Objective</h1>
          <p className="leading-loose text-sm tracking-wide">
            To develop a user-friendly and engaging mobile application for Saje
            Natural Wellness brand that offers customers an easy and convenient
            way to access information about the brand's products, receive
            personalized recommendations, and make purchases, while also
            strengthening brand loyalty and increasing sales.
          </p>
        </div>
        <div className="w-10/12 sm:w-7/12 flex justify-between my-6">
          <div className="flex flex-col w-1/3">
            <h1 className="text-xl sm:text-3xl my-6 sm:mt-8">Tools</h1>
            <div className="flex flex-col">
              <div className="flex">
                <Image
                  src="fig.svg"
                  priority
                  alt="figma icon"
                  width={25}
                  height={25}
                  className="w-auto h-auto"
                ></Image>
                <p className="ml-1 leading-loose text-sm tracking-wide">
                  Figma
                </p>
              </div>
              <div className="flex my-3">
                <Image
                  src="miro.svg"
                  priority
                  alt="Miro icon"
                  width={25}
                  height={25}
                  className="w-auto h-auto"
                ></Image>
                <p className="ml-1 leading-loose text-sm tracking-wide">Miro</p>
              </div>
              <div className="flex">
                <Image
                  src="ai.svg"
                  priority
                  alt="Adobe Illustrator icon"
                  width={25}
                  height={25}
                  className="w-auto h-auto"
                ></Image>
                <p className="ml-1 leading-loose text-sm tracking-wide">
                  Adobe Illustrator
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <h1 className="text-xl sm:text-3xl my-6 sm:mt-8">Timeline</h1>
            <p className="leading-loose text-sm tracking-wide">1 week</p>
          </div>
          <div className="w-1/3 flex flex-col items-end">
            <h1 className="text-xl sm:text-3xl my-6 sm:mt-8">My Role</h1>
            <p className="leading-loose text-sm tracking-wide">UX/UI Design</p>
            <p className="leading-loose text-sm tracking-wide my-3">Research</p>
            <p className="leading-loose text-sm tracking-wide text-right">
              Prototype & Testing
            </p>
          </div>
        </div>
        <div className="flex flex-col w-10/12 sm:w-7/12">
          <h1 className="text-3xl my-6 sm:mt-8">Problem</h1>
          <p className="leading-loose text-sm tracking-wide">
            Saje Natural Wellness does not currently have a mobile application
            to support its online and in-store retail operations. This lack of a
            mobile app presents several challenges for the brand, including
          </p>
          <ul className="list-decimal list-inside ml-3 mt-3">
            <li className="leading-loose text-sm tracking-wide">
              <span className="font-bold">Limited accessibility:</span> With no
              mobile app, customers cannot easily access product information or
              make purchases on-the-go, which may lead to lost sales and a
              reduction in brand loyalty
            </li>
            <li className="leading-loose text-sm tracking-wide">
              <span className="font-bold">
                Inconsistent customer experience:
              </span>{" "}
              Customers may have different experiences when shopping in-store
              versus online, leading to a disjointed brand experience
            </li>
            <li className="leading-loose text-sm tracking-wide">
              <span className="font-bold">Reduced engagement: </span>
              Without a mobile app, Saje Natural Wellness is missing out on an
              opportunity to engage with customers through personalized
              recommendations, promotions, and other interactive features.
            </li>
          </ul>
        </div>
        <div className="w-10/12 sm:w-7/12">
          <h1 className="text-3xl my-6 sm:mt-8">Solution</h1>
          <p className="leading-loose text-sm tracking-wide">
            To address these challenges, Saje Natural Wellness needs a mobile
            application that offers a seamless shopping experience and promotes
            customer engagement, while also strengthening brand loyalty and
            increasing sales.
          </p>
        </div>
      </div>
    </>
  );
};

export default Overview;
