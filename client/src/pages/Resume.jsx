import pdfdoc from "../assets/Resume_Diana_Busch.pdf";

const Resume = () => {
  return (
    <>
      <div className="ml-5 mt-5 mr-5 mt-30">
        <div className="flex flex-row items-center ">
          <div className="p-2 shadow-3xl rounded-lg bg-[#262626] contact-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#fde68a] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold pl-5">Education</h1>
        </div>
        <ol className="ml-4.5 relative border-s-2 border-[#404040]">
          <li className="pt-8 ml-9 ms-4 p-1">
            <div className="absolute w-4 h-4 bg-[#404040] rounded-full mt-1 -start-2 "></div>
            <div className="absolute w-2 h-2 bg-[#fde68a] rounded-full mt-2 -start-1 b "></div>
            <h2 className="mb-1 text-lg font-bold text-white">
              Persevere Coding Bootcamp
            </h2>
            <h3 className="text-lg font-semibold text-gray-400 ">
              Full-stack Web Developer Certification
            </h3>
            <p className=" text-base font-normal text-[#fde68a] ">2024-2025</p>
          </li>
          <li className="pt-8 ml-9 mb-10 ms-4 p-1">
            <div className="absolute w-4 h-4 bg-[#404040] rounded-full mt-1 -start-2 "></div>
            <div className="absolute w-2 h-2 bg-[#fde68a] rounded-full mt-2 -start-1 b "></div>
            <h2 className="mb-1 text-lg font-bold text-white">
              Rio Salado Community College
            </h2>
            <h3 className="text-lg font-semibold text-gray-400 ">
              Associate Degree in Arts
            </h3>
            <p className=" text-base font-normal text-[#fde68a] ">2023-2025</p>
          </li>
        </ol>

        <div className="flex flex-row items-center">
          <div className="p-2 shadow-3xl rounded-lg bg-[#262626] contact-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#fde68a]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
           
          </div>
          <h1 className="text-3xl font-bold pl-5">Experience</h1>
        </div>
        <ol className="ml-4.5 relative border-s-2 border-[#404040]">
          <li className="pt-8 ml-9 ms-4 p-1">
            <div className="absolute w-4 h-4 bg-[#404040] rounded-full mt-1 -start-2  "></div>
            <div className="absolute w-2 h-2 bg-[#fde68a] rounded-full mt-2 -start-1 b "></div>
            <h2 className="mb-1 text-lg font-bold text-white">
              Mid-Level Flutter Developer
            </h2>
            <h3 className="text-lg text-gray-400 mb-1">Takma Technologies</h3>
            <p className=" text-base font-normal text-[#fde68a] mb-1 ">
              Aug, 2024 - Present 8 mos
            </p>
            <p className="text-gray-400 mb-2">
              <i>Kathmandu, Nepal</i>
            </p>
            <ul className="ml-5">
              <li className="a">
                <p className="text-white">
                  Developed new features and implemented UI designs into code
                  using Flutter
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Designed and created custom e-form features including
                  scrolling features and data entries.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Integrated Google and Facebook sign-in for user
                  authentication.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Designed dynamic functionalities using the BLOC design
                  pattern.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Integrated APIs for seamless data communication and backend
                  functionality.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Implemented payment gateway integration like Khalti for secure
                  transactions.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Collaborated with other developers and backend team to deliver
                  features.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Participated in team meetings to discuss new features and
                  project updates.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Ensured smooth functionality and user-friendly experiences
                  throughout the app.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Performed code review and deployed the app in Playstore and
                  Appstore.
                </p>
              </li>
            </ul>
          </li>
          <li className="pt-8 ml-9  ms-4 p-1">
            <div className="absolute w-4 h-4 bg-[#404040] rounded-full mt-1 -start-2 "></div>
            <div className="absolute w-2 h-2 bg-[#fde68a] rounded-full mt-2 -start-1 b "></div>
            <h2 className="mb-1 text-lg font-bold text-white">
              Flutter Developer
            </h2>
            <h3 className="text-lg text-gray-400 mb-1">Inflancer Technology</h3>
            <p className=" text-base font-normal text-[#fde68a] mb-1">
              Oct, 2022 - Aug, 2024 1 yr, 11 mos
            </p>
            <p className="text-gray-400 mb-2">
              <i>Kathmandu, Nepal</i>
            </p>
            <ul className="ml-5">
              <li className="a">
                <p className="text-white">
                  Developed new features and transformed UI designs into fully
                  functional user interfaces.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Integrated payment solution like eSewa, for secure and
                  seamless transactions.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Optimized application performance to ensure a smooth and
                  engaging user experience.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Supported other team members initiatives by developing
                  solutions to common problems and sharing those solutions.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Identified and resolved bugs, improving app stability and
                  performance.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Wrote clean, maintainable, and testable code following best
                  practices.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Utilization of latest version of support libraries to ensure
                  backend compatibility.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Collaborated with backend developers, designers, and
                  cross-functional teams to deliver scalable, high-quality
                  solutions.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Performed code review and deployed the app in Playstore and
                  Appstore.
                </p>
              </li>
            </ul>
          </li>
          <li className="pt-8 ml-9 mb-20 ms-4 p-1">
            <div className="absolute w-4 h-4 bg-[#404040] rounded-full mt-1 -start-2  "></div>
            <div className="absolute w-2 h-2 bg-[#fde68a] rounded-full mt-2 -start-1 b "></div>
            <h2 className="mb-1 text-lg font-bold text-white">
              Flutter Developer Intern
            </h2>
            <h3 className="text-lg text-gray-400 mb-1">YAJ Tech Pvt. Ltd</h3>
            <p className=" text-base font-normal text-[#fde68a] mb-1">
              May, 2022 - Sep, 2024 5 mos
            </p>

            <p className="text-gray-400 mb-2">
              <i>Kathmandu, Nepal</i>
            </p>
            <ul className="ml-5">
              <li className="a">
                <p className="text-white">
                  Assisted in developing and maintaining Flutter applications,
                  ensuring seamless functionality and user-friendly interfaces.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Supported the implementation of visually appealing UI designs
                  that aligned with client requirements and design principles.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Collaborated with cross-functional teams, including back-end
                  developers and designers, to deliver efficient, high-quality,
                  and scalable solutions.
                </p>
              </li>
              <li className="a">
                <p className="text-white">
                  Gained hands-on experience in debugging, troubleshooting, and
                  refining app features to improve user experience.
                </p>
              </li>
            </ul>
          </li>
        </ol>
        <div className="mt-10 flex flex-row justify-end">
          <a
            href={pdfdoc}
            download
            className="button text-[#fde68a] bg-[#262626] rounded-lg shadow-xl pl-5 pr-5 pt-2 pb-2 mb-5"
          >
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                />
              </svg>
              <p>Download Resume</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Resume;
