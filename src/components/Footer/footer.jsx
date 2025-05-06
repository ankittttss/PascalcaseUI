
"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBriefcase,
  FaFileContract,
  FaBlogger,
  FaUserSecret,
  FaEnvelopeOpenText,
  FaComments,
  FaPaperPlane,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-gray-300">
      <div className="w-full">
        {/* Dark Footer Container */}
        <div className="bg-black p-6 sm:p-10 shadow-md relative max-w-7xl mx-auto rounded-lg">
          {/* Footer Top Section */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-4">
                Contact Information
              </h3>
              <ul className="space-y-4 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-orange-500 mt-1" size={18} />
                  <span>
                    Plot No 1/C, Sy No 83/1, Raidurgam Panmaktha, Knowledge City Rd, Hyderabad, Telangana 500081
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaPhoneAlt className="text-orange-500 mt-1" size={16} />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaEnvelope className="text-orange-500 mt-1" size={16} />
                  <span>support@pascalcase.com</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-center gap-3">
                  <FaBriefcase className="text-orange-500" />
                  <Link href="/career" className="hover:text-orange-400 transition duration-300">
                    Career
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <FaFileContract className="text-orange-500" />
                  <Link href="/terms" className="hover:text-orange-400 transition duration-300">
                    Terms
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <FaBlogger className="text-orange-500" />
                  <Link href="/blogs" className="hover:text-orange-400 transition duration-300">
                    Blogs
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <FaUserSecret className="text-orange-500" />
                  <Link href="/privacy" className="hover:text-orange-400 transition duration-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Keep in Touch */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-4">
                Keep in Touch
              </h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-center gap-3">
                  <FaEnvelopeOpenText className="text-orange-500" />
                  <Link href="/contact" className="hover:text-orange-400 transition duration-300">
                    Contact Us
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <FaComments className="text-orange-500" />
                  <Link href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchat%2F0%2F0%3Fusers%3Dsatish%40pascalcase.com%2Clikitha%40pascalcase.com%26topicName%3DAIAutocloser%2520Demo&type=chat&deeplinkId=e97dc4bb-ab97-4d73-8d1c-5bcb42a76dd8&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true" className="hover:text-orange-400 transition duration-300">
                    Chat on Microsoft
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <FaPaperPlane className="text-orange-500" />
                  <Link href="mailto:contact@pascalcase.com" className="hover:text-orange-400 transition duration-300">
                    Email Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-14 text-center">
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-200">
              At Pascalcase, we share Microsoft's vision of helping you and your organization realize full potential.
              We specialize in building tools based on Dynamics 365 and the Power Platform.
            </p>
            <p className="mt-4 text-xs sm:text-sm text-gray-500">
              ©2025 Pascalcase Software Private Limited. All rights reserved.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6 mt-8">
            <Link href="https://www.linkedin.com/company/pascalcase/about/" className="text-orange-500 hover:text-orange-400 transition duration-300">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="https://x.com/Xbattery_" className="text-orange-500 hover:text-orange-400 transition duration-300">
              <FaTwitter size={20} />
            </Link>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md flex items-center space-x-2 hover:bg-orange-400 transition duration-300 text-xs sm:text-sm flex-col sm:flex-row"
            aria-label="Scroll to top"
          >
            <span>Move to Top</span>
            <FaArrowUp size={16} className="sm:size-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
