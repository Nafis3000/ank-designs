import React from 'react'
import Image from 'next/image';

function Overview() {
  return (
    <>
      <div className="flex flex-col bg-white w-full items-center mt-12">
        <div className="w-10/12 sm:w-7/12">
          <h1 className="text-3xl my-6 sm:mt-8">Overview</h1>
          <p className="leading-loose text-sm tracking-wide">
            ADPList is a global community that was established in 2021 with the
            goal of democratizing mentorship for all. Since its inception, the
            community has grown to include over 13,000 mentors who have mentored
            more than 10 million minutes across 141 countries. The platform
            simplifies the process of finding and booking a mentor session,
            making it easier for learners to access mentorship opportunities in
            design and product management industries, and request experts to
            cover more fields. The community simplifies the process of finding
            and booking a mentor session, and invests in the success of its
            members by providing 24/7 support, education, and 1:1 networking
            opportunities.
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
                ></Image>
                <p className="ml-1 leading-loose text-sm tracking-wide">
                  Figma
                </p>
              </div>
              <div className="flex">
                <Image
                  src="miro.svg"
                  priority
                  alt="Miro icon"
                  width={26}
                  height={26}
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
                ></Image>
                <p className="ml-1 leading-loose text-sm tracking-wide">
                  Adobe Illustrator
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <h1 className="text-xl sm:text-3xl my-6 sm:mt-8">Timeline</h1>
            <p className="leading-loose text-sm tracking-wide">4 weeks</p>
          </div>
          <div className="w-1/3 flex flex-col items-end">
            <h1 className="text-xl sm:text-3xl my-6 sm:mt-8">My Role</h1>
            <p className="leading-loose text-sm tracking-wide">UX/UI Design</p>
            <p className="leading-loose text-sm tracking-wide">Research</p>
            <p className="leading-loose text-sm tracking-wide text-right">
              Prototype & Testing
            </p>
          </div>
        </div>
        <div className="w-10/12 sm:w-7/12">
          <h1 className="text-3xl my-6 sm:mt-8">Problem</h1>
          <p className="leading-loose text-sm tracking-wide">
            ADPList currently lacks a mobile app, which is preventing them from
            reaching and engaging with potential users who prefer to use mobile
            devices to access and interact with online platforms. Without a
            mobile app, ADPList is missing out on a significant portion of their
            target audience and limiting the potential growth of their
            community.
          </p>
        </div>
        <div className="w-10/12 sm:w-7/12 my-3">
          <h1 className="text-3xl my-6 sm:mt-8">Solution</h1>
          <p className="leading-loose text-sm tracking-wide">
            Designing a mobile app that offers a seamless user experience,
            enables easier mentor-mentee communication, and provides access to
            all the features available on the desktop version of the platform.
            This will not only help ADPList to expand its reach and provide
            better value to its users but also establish itself as a more
            accessible and convenient mentorship platform in the industry.
          </p>
        </div>
        <div className='w-10/12 sm:w-7/12 bg-[#1dc570] h-1 rounded-3xl my-6'></div>
      </div>
    </>
  );
}

export default Overview