import React from 'react'
import Image from 'next/image'

function Prototype() {
  return (
    <>
      <div className="flex flex-col bg-white w-full items-center">
        <div className="w-10/12 sm:w-7/12">
          <h1 className="text-3xl font-extrabold">
            <span className="">Prototype</span>
          </h1>
        </div>
        <div className="w-10/12 sm:w-7/12 mt-12">
          <div className="flex flex-col sm:flex-row w-full">
            <div className="sm:w-6/12 flex flex-col justify-center">
              <p className="text-[#1dc570] text-xs sm:text-sm">Mid-Fidelity</p>
              <h1 className="mb-3 sm:text-2xl font-bold">Wireframe</h1>
              <p className="leading-loose text-sm tracking-wide">
                Our mid-fidelity wireframe includes the{" "}
                <span className="font-bold">
                  home, login, dashboard, workspace and task page,
                </span>{" "}
                along with the new{" "}
                <span className="font-bold">hiring page</span> that has been
                added by our team to improve mentees chances of getting hired at
                a position currently being offered.
              </p>
              <p className="leading-loose text-sm tracking-wide mt-4 sm:mt-8">
                Our aim with these wireframes is to make them{" "}
                <span className="font-bold">
                  simple, direct and user friendly
                </span>{" "}
                while still maintaining the brand colours, touch and feel of the
                ADPList website.
              </p>
            </div>
            <div className="sm:w-6/12 mt-4 sm:mt-0 flex flex-col justify-start">
              <Image
                src="prototype1.svg"
                width={1920}
                height={1080}
                alt="prototype1"
                priority
                className="w-full h-auto drop-shadow-xl"
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-10/12 sm:w-7/12 mt-12">
          <div className="flex w-full">
            <div className="w-3/12 flex flex-col justify-start">
              <p className="text-[#1dc570] text-xs sm:text-sm">Mid-Fidelity</p>
              <h1 className="mb-3 sm:text-2xl font-bold">
                Added hiring feature
              </h1>
            </div>
            <div className="w-9/12 flex flex-col justify-start">
              <Image
                src="prototype2.svg"
                width={1920}
                height={1080}
                alt="prototype2"
                priority
                className="w-full h-auto drop-shadow-xl"
              ></Image>
            </div>
          </div>
          <p className="leading-loose text-sm tracking-wide mt-8">
            After carefully considering our user feedback, particularly the
            insight{" "}
            <span className="underline">
              “If ADPList had a feature that allowed me to find mentors who are
              hiring at their company, I would absolutely use it.”
            </span>{" "}
            , that expressed the desire for a feature that could connect mentees
            with mentors who are hiring at their companies, we have made the
            decision to implement a hiring feature. This new feature will allow
            users to easily identify mentors who are currently employed by
            companies that are actively seeking new hires. By introducing this
            feature, we aim to bridge the gap between mentees and job
            opportunities advertised by mentors.
          </p>
          <p className="leading-loose text-sm tracking-wide mt-8">
            This innovative feature will help users navigate the mentorship
            landscape and find mentors who can provide not only guidance but
            also potential job prospects. It will also allow mentors to showcase
            their companies and help them attract top talent. We believe that
            this new feature will enhance the overall experience of ADPList
            users and make mentorship even more beneficial and rewarding.
          </p>
          <p className="leading-loose text-sm tracking-wide mt-8">
            In summary, ADPList's new hiring feature is a powerful tool that
            will benefit both mentees and mentors. It is designed to facilitate
            connections and improve employment prospects for users while also
            helping companies identify top talent. We look forward to seeing the
            positive impact this feature will have on our users and the broader
            mentorship community.
          </p>
        </div>
        <div className="w-10/12 sm:w-7/12 bg-[#1dc570] h-1 rounded-3xl my-12"></div>
      </div>
    </>
  );
}

export default Prototype