import React from 'react'
import Image from 'next/image';

function Define() {
  return (
    <>
      <div className="flex flex-col bg-white w-full items-center ">
        <div className="w-10/12 sm:w-7/12">
          <h1 className="text-3xl font-bold">Define</h1>
          <p className="leading-loose text-sm tracking-wide mt-12">
            Keeping the problem statement in focus, we initiated the process of
            conducting interviews with both mentors and mentees who regularly
            use the ADPList platform. These users were chosen to represent our
            larger user base and provided us with valuable insights into their
            experiences and expectations from the platform. Their feedback
            helped us identify areas for improvement and informed the design of
            our app.
          </p>
        </div>
        <div className="w-10/12 sm:w-7/12 mt-12">
          <div className="flex flex-col sm:flex-row w-full">
            <div className="sm:w-6/12 flex flex-col justify-center">
              <Image
                src="bg.svg"
                width={1920}
                height={1080}
                alt="bg"
                priority
                className="w-full h-auto"
              ></Image>
            </div>
            <div className="sm:w-6/12 sm:mt-0 flex flex-col justify-center">
              <Image
                src="define1.svg"
                width={1920}
                height={1080}
                alt="define1"
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
                src="define2.svg"
                width={1920}
                height={1080}
                alt="define2"
                priority
                className="w-full h-auto"
              ></Image>
            </div>
            <div className="sm:w-6/12 flex flex-col justify-center p-3 sm:p-0">
              <div className="sm:w-11/12 self-center mt-12 sm:my-0">
                <p className="text-[#1dc570] text-xs sm:text-sm">
                  More insights from
                </p>
                <h1 className="mb-3 sm:text-2xl">User Interviews</h1>
                <p className="leading-loose text-xs tracking-wide mb-3">
                  “I prefer having specific topics to discuss with my mentor.”
                </p>
                <p className="leading-loose text-xs tracking-wide mb-3">
                  “I would like a progress bar or some other way to track my
                  growth.”
                </p>
                <p className="leading-loose text-xs tracking-wide">
                  “If ADPList had a feature that allowed me to find mentors who
                  are hiring at their company, I would absolutely use it.”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-10/12 sm:w-7/12">
          <p className="leading-loose text-sm tracking-wide mt-8">
            Based on the insights gained from these interviews, we developed
            detailed personas for both mentors and mentees. These personas
            helped us to understand our users better, including their
            motivations, challenges, goals, and expectations. By using these
            personas, we were able to proceed towards building the app that is
            tailored to meet the needs of our users, ensuring a better user
            experience and more successful mentorship outcomes.
          </p>
          <p className="leading-loose text-sm tracking-wide mt-8">
            Overall, this user-centric approach allowed us to create new
            features that were intuitive, easy to use, and provided all the
            essential aspects of the desktop version of the platform. The
            insights gained from our users and the personas created helped us to
            build a more effective and engaging platform that fulfills the needs
            of mentors and mentees alike.
          </p>
        </div>
        <div className="w-10/12 sm:w-7/12 mt-12">
          <div className="flex w-full">
            <div className="w-3/12 flex flex-col justify-start">
              <p className="text-[#1dc570] text-xs sm:text-sm">Mentee</p>
              <h1 className="mb-3 sm:text-2xl">Persona</h1>
              <p className="sm:mt-3 text-xs sm:text-sm">
                A persona created specifically for{" "}
                <span className="underline">mentees</span>
              </p>
            </div>
            <div className="w-9/12 flex flex-col justify-start">
              <Image
                src="define3.svg"
                width={1920}
                height={1080}
                alt="define3"
                priority
                className="w-full h-auto drop-shadow-xl"
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-10/12 sm:w-7/12 my-6">
          <div className="flex w-full">
            <div className="w-3/12 flex flex-col justify-start">
              <p className="text-[#1dc570] text-xs sm:text-sm">Mentor</p>
              <h1 className="mb-3 sm:text-2xl">Persona</h1>
              <p className="sm:mt-3 text-xs sm:text-sm">
                A persona created specifically for{" "}
                <span className="underline">mentors</span>
              </p>
            </div>
            <div className="w-9/12">
              <Image
                src="define4.svg"
                width={1920}
                height={1080}
                alt="define4"
                priority
                className="w-full h-auto drop-shadow-xl"
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-10/12 sm:w-7/12 bg-[#1dc570] h-1 rounded-3xl my-12"></div>
      </div>
    </>
  );
}

export default Define