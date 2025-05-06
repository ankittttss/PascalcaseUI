import Footer from "@/components/Footer/footer";
import "../globals.css";
import { FaBriefcase, FaInfoCircle } from "react-icons/fa";
import Image from "next/image";

export const metadata = {
  title: "About Us | Pascalcase",
  description: "Detailed Blogs",
};

export default function About() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-16 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <p className="text-black font-semibold text-lg flex items-center justify-center md:justify-start gap-2">
              <FaInfoCircle className="text-2xl" /> {/* Icon */}
              About Us
            </p>
            <h1 className="text-5xl sm:text-4xl md:text-7xl font-extrabold mt-2 mb-6 text-black">
              <span className="inline font-extrabold">We are</span>
              <br />
              <span className="font-extrabold text-6xl sm:text-7xl text-orange-500">
                Pascalcase
                <Image
                  src="/Images/faviconV2.png" // Replace with the actual path of your favicon
                  alt="Pascalcase Icon"
                  width={40} // Set the width of your favicon icon
                  height={40} // Set the height of your favicon icon
                  className="inline-block ml-2" // Add some margin to the left to separate the icon from the text
                />
              </span>
            </h1>
            <p className="text-lg text-black mb-6">
              At Pascalcase, we specialize in delivering innovative solutions
              using Microsoft Dynamics 365 and the Power Platform. Our team
              empowers businesses to streamline operations, enhance customer
              engagement, and drive digital transformation with scalable,
              secure, and intelligent cloud technologies.
            </p>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full flex justify-center md:justify-start">
            <Image
              src="/images/About-Headers.png"
              alt="About Pascalcase"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 px-4 sm:px-6 lg:px-14">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Our Customers
          </h2>
          <div className="flex justify-center">
            <Image
              src="/Images/clients_1.webp"
              alt="Our Customers"
              width={700}
              height={400}
              className="rounded-lg w-full max-w-3xl h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

