"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white text-black shadow-md px-4 sm:px-8 py-4 fixed top-0 w-full z-50">
      <div className="flex items-center justify-between md:justify-normal md:gap-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/Images/logo.webp"
              alt="PascalCase Logo"
              width={160}
              height={40}
            />
          </Link>
        </div>

        {/* Center Menu for Desktop */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-8 text-sm font-bold items-center">
            {/* Product Dropdown */}
            <li className="relative group">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === 0 ? null : 0)
                }
                className="flex items-center text-gray-800 hover:text-blue-600 transition space-x-1"
              >
                <span>Product</span>
                <FaChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div
                className={`${
                  activeDropdown === 0 ? "block" : "hidden"
                } absolute group-hover:block mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-10 space-y-2`}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/metadata" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">
                  MetaData Browser
                </Link>
                <Link href="/HtmltoPdfConvertor" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">
                  HTML to PDF Convertor
                </Link>
                <Link href="/DataMasking" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">
                  DataMask for Dataverse
                </Link>
                <Link href="/Commission365" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">
                  Commission 365
                </Link>
                <Link href="/AIAutoCloser" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">
                  AI Autocloser
                </Link>
                <Link href="/FlowMonitor" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">
                  Flow Monitor
                </Link>
              </div>
            </li>

            {/* Blogs Link */}
            <li>
              <Link
                href="/blogs"
                className="text-gray-800 hover:text-blue-600 transition"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <Link href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchat%2F0%2F0%3Fusers%3Dsatish%40pascalcase.com%2Clikitha%40pascalcase.com%26topicName%3DAIAutocloser%2520Demo&type=chat&deeplinkId=e97dc4bb-ab97-4d73-8d1c-5bcb42a76dd8&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true">
            <div className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition font-medium text-md flex items-center space-x-2">
              <FaPhoneAlt className="w-5 h-5" />
              <span>Request Consultation</span>
            </div>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none ml-auto"
        >
          <span className="w-6 h-0.5 bg-black block mb-1"></span>
          <span className="w-6 h-0.5 bg-black block mb-1"></span>
          <span className="w-6 h-0.5 bg-black block"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden mt-4`}>
        <ul className="flex flex-col space-y-2 text-sm font-bold">
          {/* Product Dropdown for Mobile */}
          <li className="relative">
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === 0 ? null : 0)
              }
              className="flex items-center justify-between w-full py-2 px-4 text-gray-800 hover:text-blue-600"
            >
              <span>Product</span>
              <FaChevronDown className="w-4 h-4 transition-transform duration-300" />
            </button>
            {activeDropdown === 0 && (
              <div className="bg-white shadow rounded-md py-2 mt-1 px-4">

                <Link href="/metadata" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>
                  MetaData Browser
                </Link>
                <Link href="/HtmltoPdfConvertor" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>
                  HTML to PDF Convertor
                </Link>
                <Link href="/DataMasking" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>
                  DataMask for Dataverse
                </Link>
                <Link href="/Commission365" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>
                  Commission 365
                </Link>
                <Link href="/AIAutoCloser" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>
                  AI Autocloser
                </Link>
                <Link href="/FlowMonitor" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMobileMenu}>
                  Flow Monitor
                </Link>
              </div>
            )}
          </li>

          {/* Blogs for Mobile */}
          <li>
            <Link
              href="/blogs"
              className="block px-4 py-2 text-gray-800 hover:text-blue-600"
              onClick={closeMobileMenu}
            >
              Blogs
            </Link>
          </li>
        </ul>

        {/* Mobile CTA */}
        <div className="mt-4">
          <Link href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchat%2F0%2F0%3Fusers%3Dsatish%40pascalcase.com%2Clikitha%40pascalcase.com%26topicName%3DAIAutocloser%2520Demo&type=chat&deeplinkId=53892076-b3c1-4d35-afc3-a44bb4cf9312&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true">
            <div className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition font-medium text-md text-center flex items-center justify-center space-x-2">
              <FaPhoneAlt className="w-5 h-5" />
              <span>Request Consultation</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
