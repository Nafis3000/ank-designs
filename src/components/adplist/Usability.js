import React from "react";
import Image from "next/image";

function Usability() {
  return (
    <div className="flex flex-col bg-white w-full items-center">
      <div className="w-10/12 sm:w-7/12">
        <h1 className="text-3xl font-bold">Usability Test</h1>
      </div>
      <div className="w-10/12 sm:w-7/12 mt-12">
        <div className="flex flex-col sm:flex-row w-full">
          <div className="sm:w-6/12 mt-4 sm:mt-0 flex flex-col justify-start">
            <Image
              src="use1.svg"
              width={1920}
              height={1080}
              alt="use1"
              priority
              className="w-full h-auto"
            ></Image>
          </div>
          <div className="sm:w-6/12 flex flex-col justify-center sm:ml-3 p-3 sm:p-0">
            <div className="w-11/12 self-center mt-12 sm:my-0">
              <p className="text-[#1dc570] text-xs sm:text-sm">Outline of</p>
              <h1 className="mb-3 sm:text-2xl">Usability Test Plan</h1>
              <p className="leading-loose text-xs tracking-wide">
                We conducted usability testing with both mentors and mentees to
                better understand their objectives.
              </p>
            </div>
            <ul className="list-disc leading-loose text-xs tracking-wide w-9/12 self-center">
              <li className="mb-1">
                Asked <span className="font-bold">screening</span> questions to
                users
              </li>
              <li className="mb-1">
                Briefly outlined our <span className="font-bold">goals</span> to
                improve the app
              </li>
              <li className="mb-1">
                Outlined <span className="font-bold">scenarios</span> (i.e.
                “Requesting to chat with a mentor”) and give attitudinal,
                behavioural, and open-ended{" "}
                <span className="font-bold">prompts</span>
              </li>
              <li className="mb-1">
                Found out how both mentees and mentors will find{" "}
                <span className="font-bold">purpose</span> with our added
                features
              </li>
              <li className="mb-1">
                Aimed to improve learnability, efficiency, error- tolerance and
                satisfaction of both sides of users
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-10/12 sm:w-7/12 mt-12">
        <div className="flex flex-col sm:flex-row w-full">
          <div className="sm:w-6/12 flex flex-col justify-center sm:mr-3 sm:p-3 bg-[#1dc570]">
            <div className="w-11/12 self-center mt-6 p-3 sm:my-0">
              <p className="text-white text-xs sm:text-sm">Summary of</p>
              <h1 className="mb-3 sm:text-2xl">Usability Test Findings</h1>
              <p className="leading-loose text-xs tracking-wide">
                From our 3 usability tests, we derived these key insights:
              </p>
            </div>
            <ul className="list-disc leading-loose text-xs tracking-wide w-9/12 self-center">
              <li className="mb-1">
                improve{" "}
                <span className="font-bold">information architecture</span> by
                separating the “hiring” page into two pages:{" "}
                <span className="font-bold">"open to work"</span> and
                <span className="font-bold"> "open to hire"</span>
              </li>
              <li className="mb-1">
                Making <span className="font-bold">task flow</span> more
                <span className="font-bold"> seamless</span> by adding return
                buttons on all pages and prototyping extra screens to make flows
                clear to users
              </li>
              <li className="mb-1">
                Changing up the <span className="font-bold">copy</span>:
                including conversation starters in the chat bubble, and adding
                “open to referral” option to distinguish mentors who are hiring
                vs. only open to referrals.
              </li>
            </ul>
          </div>
          <div className="sm:w-6/12 mt-4 sm:mt-0 flex flex-col justify-center">
            <Image
              src="use2.svg"
              width={1920}
              height={1080}
              alt="use2"
              priority
              className="w-full h-auto"
            ></Image>
          </div>
        </div>
      </div>
      <div className="w-10/12 sm:w-7/12 mt-12">
        <div className="flex flex-col sm:flex-row w-full">
          <div className="sm:w-6/12 mt-4 sm:mt-0 flex flex-col justify-start">
            <Image
              src="use3.svg"
              width={1920}
              height={1080}
              alt="use3"
              priority
              className="w-full h-auto"
            ></Image>
          </div>
          <div className="sm:w-6/12 flex flex-col justify-center sm:ml-3">
            <div className="w-11/12 self-center mt-12 sm:my-0">
              <p className="text-[#1dc570] text-xs sm:text-sm">
                First Iteration:
              </p>
              <h1 className="mb-3 sm:text-2xl">Hi-Fi Prototype</h1>
              <p className="leading-loose text-xs tracking-wide my-6">
                Based on the feedback from the usability testing, we created our
                first <span className="font-bold">hi-fi prototype.</span>
              </p>
              <p className="leading-loose text-xs tracking-wide">
                Along with the feedback gathered from our testers, we organized
                a <span className="font-bold">design critique</span> session
                that involved a group of 14 aspiring designers and a Senior UX
                Designer. Following the critique, we recognized a few areas that
                still required improvement and incorporated the feedback into a
                second iteration of the design.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 sm:w-7/12 bg-[#1dc570] h-1 rounded-3xl my-12"></div>
    </div>
  );
}

export default Usability;
