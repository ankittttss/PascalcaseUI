'use client'
import Image from "next/image";
import React, { useRef } from "react";
// import '../globals.css';
import {
  FaUsers,
  FaHandHoldingHeart,
  FaFire,
  FaBaby,
  FaPlaneDeparture,
  FaLaptopHouse,
  FaChalkboardTeacher,
  FaSuitcase,
  FaLocationArrow,
  FaArrowRight,
  FaBriefcase,
} from "react-icons/fa";
import JobCard from "@/components/JobCard/jobcard";

// export const metadata = {
//   title: "Career | Pascalcase",
//   description:
//     "Join our team and explore exciting career opportunities at Pascalcase.",
// };

const jobOpenings = [
  {
    title: "Microsoft Dynamics 365 Interns",
    type: ["Full-time", "Remote"],
    location: "Hyderabad",
    experience: "0 years",
    icon: <FaSuitcase />,
    jobDescription: [
      "Good Knowledge on any Object Oriented Language.",
      "Knowledge of Javascript,HTML,CSS and SQL",
      "Excellent Communication Skills",
    ],
  },
  {
    title: "Microsoft .NET Developers",
    type: ["Full-time", "Hybrid"],
    location: "Hyderabad",
    experience: "0-2 years",
    icon: <FaSuitcase />,
    jobDescription: [
      "Strong knowledge of .NET framework and C#.",
      "Strong understanding of web development technologies and WebAPI and SQL.",
      "Excellent Communication Skills",
    ],
  },
  // Add more jobs similarly
];

export default function Career() {

  const jobOpeningsRef = useRef(null);

  // Scroll to the Job Openings section when the button is clicked
  const scrollToJobOpenings = () => {
    if (jobOpeningsRef.current) {
      jobOpeningsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-16 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaBriefcase className="text-black text-xl" />
              <p className="text-black font-semibold text-lg">Careers</p>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold mt-2 mb-6 text-black leading-tight">
              <span>Be Part of</span>
              <br />
              <span className="inline-flex items-center text-orange-500 text-5xl sm:text-6xl lg:text-7xl">
                Pascalcase
                <Image
                  src="/Images/faviconV2.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  className="ml-2 w-8 h-8 sm:w-10 sm:h-10"
                />
              </span>
            </h1>

            <p className="text-lg text-black mb-6">
              At Pascalcase, we are a dedicated group of outstanding
              professionals who enjoy the high energy and fast pace of our
              culture. If you are looking for a workplace that will appreciate
              your passion, we would love to have you on board!
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-400 transition font-medium text-md flex items-center gap-2"   onClick={scrollToJobOpenings}>
                <FaBriefcase className="text-lg" />
                See Openings
              </button>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full">
            <Image
              src="/Images/Careers-Headers.png"
              alt="Career Hero"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-14">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-orange-600 bg-orange-100 rounded-full mb-4">
            Our Core Beliefs
            <Image
              src="/Images/christmas-stars.png" // Place your icon inside the /public/icons folder
              alt="Belief Icon"
              width={16}
              height={16}
            />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Pascalcase Company Values
          </h2>
          <p className="text-black max-w-3xl mx-auto mb-12">
            Our values are more than just words. They define how we work, grow,
            and succeed together — both as a team and with our customers.
          </p>

          <div className="grid gap-8 md:grid-cols-3 text-left">
            {/* Card Template */}
            {[
              {
                title: "Teamwork",
                icon: <FaUsers />,
                description:
                  "We enthusiastically support each other to be successful; being helpful to colleagues and customers comes naturally to us. Being part of a team by making contact, showing empathy, and celebrating milestones is something we value deeply.",
              },
              {
                title: "Accountability",
                icon: <FaHandHoldingHeart />,
                description:
                  "As honest, passionate, and skilled experts, we take ownership of our work and deliver valuable solutions — enabling both customers and colleagues to succeed.",
              },
              {
                title: "Passion",
                icon: <FaFire />,
                description:
                  "We thrive on understanding our customers’ unique needs and go the extra mile to create thoughtful, sustainable solutions with real impact.",
              },
            ].map(({ title, icon, description }) => (
              <div
                key={title}
                className="bg-black bg-opacity-50 border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-300 transition-all duration-300"
              >
                <div className="text-orange-500 text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {title}
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Perks Section */}
      <div className="bg-white px-4 sm:px-6 lg:px-14">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-orange-400 bg-orange-100 rounded-full mb-4">
            What We Offer
            <Image
              src="/Images/christmas-stars.png"
              alt="Belief Icon"
              width={16}
              height={16}
            />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Perks & Benefits
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Perk: Family Leave */}
            <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-50 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 group border">
              <FaBaby className="text-orange-500 text-3xl mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">
                Family Leave
              </h4>
              <p className="text-sm text-gray-300">
                Support for growing families with flexible parental leave.
              </p>
            </div>

            {/* Perk: Paid Time Off */}
            <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-50 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 group border">
              <FaPlaneDeparture className="text-orange-500 text-3xl mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">
                Generous PTO
              </h4>
              <p className="text-sm text-gray-300">
                Plenty of time to rest, recharge, and explore.
              </p>
            </div>

            {/* Perk: Hybrid/Remote Work */}
            <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-50 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 group border">
              <FaLaptopHouse className="text-orange-500 text-3xl mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">
                Hybrid & Remote
              </h4>
              <p className="text-sm text-gray-300">
                Work flexibly from home or the office—your choice.
              </p>
            </div>

            {/* Perk: Development */}
            <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-50 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 group border">
              <FaChalkboardTeacher className="text-orange-500 text-3xl mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">
                Training & Growth
              </h4>
              <p className="text-sm text-gray-300">
                Invest in your career with training and development support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Job Openings Section */}
      <div ref={jobOpeningsRef}  className="bg-white py-20 px-4 sm:px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Current Job Openings
            </h2>
            <p className="text-black text-lg max-w-3xl mx-auto">
              Join our mission to build impactful solutions. Explore our open
              roles and find where you fit best.
            </p>
          </div>

          {/* Job Cards - Stacked Vertically */}
          <div className="flex flex-col gap-8">
            {jobOpenings.map((job, idx) => (
              <JobCard key={idx} job={job} />
            ))}
          </div>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="bg-[#fdf8f3] py-12 px-4 sm:px-6 lg:px-14 mt-5 mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            How to Apply
          </h2>
          <p className="text-md sm:text-lg text-gray-700">
            Please send your resumes at{" "}
            <a
              href="mailto:hr@pascpascalcase.com"
              className="text-black font-medium underline hover:text-orange-700"
            >
              hr@pascalcase.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
