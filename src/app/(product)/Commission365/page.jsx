"use client";
import {
  FaBusinessTime,
  FaShieldAlt,
  FaRandom,
  FaUserShield,
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
  FaPlayCircle,
  FaCalendarAlt,
} from "react-icons/fa";
import Image from "next/image";

const faqData = [
  {
    question: "Is the app free to test??",
    answer:
      "The app is free to test without a valid license. However, there is a record restriction of 1,000 records per run without a license.",
  },
  {
    question: "How can I install the app?",
    answer:
      "This app is available as managed solution. You can directly download the app from this link, and follow the steps in the video.",
  },
  {
    question: "How can I use the app for more than 1,000 records?",
    answer:
      "You can reach out to us through Microsoft Teams or contact us page.",
  },
  {
    question: "How efficiently does your app handle data masking?",
    answer:
      "Our app efficiently masks 200,000 records in 15 minutes and up to 1 million records in 60 to 70 minutes, ensuring speedy and secure data masking.",
  },
  {
    question: "Can I selectively mask tables and attributes?",
    answer: "Yes, it is possible to configure tables and attributes to mask.",
  },
];

const cardData = [
  {
    icon: FaBusinessTime,
    title: "Simplify complex calculations",
    text: "Easily handle and solve tough calculations with just a few taps",
  },
  {
    icon: FaShieldAlt,
    title: "Offers a variety of options",
    text: "Explore a wide range of customizable features and tools tailored to suit your unique needs—all in one convenient app experience.",
  },
  {
    icon: FaRandom,
    title: "One time configuration",
    text: "Set it up once and let the app handle the rest—seamless performance with zero repeated effort.",
  },
  {
    icon: FaUserShield,
    title: "Low cost implementation",
    text: "Achieve powerful results without breaking the bank—smart, budget-friendly implementation designed for maximum value.",
  },
];

export default function Commission365() {
  return (
    <div className="container mx-auto mt-25 px-4">
      {/* First Section */}
      <div className="bg-white rounded-xl p-10 mt-5">
        <h1 className="text-4xl text-black font-bold mb-4 text-center">
          <span className="text-orange-600">Commission 365</span> app for
          Dataverse
        </h1>
        <h2 className="text-lg text-center mb-6 text-black font-semibold">
          Configure commissions for your sales staff.
        </h2>
        <p className="text-black text-base mb-6 text-center max-w-4xl mx-auto">
          Commission 365 is a tool by Pascalcase for Dynamics 365 Sales App &
          PowerApps that allows you to configure commissions, incentives and
          bonus plans for your sales staff. You can customise plans and automate
          the complete process. This App gives complete control over the
          ruleset, including type of data, eligible people, frequency of
          commissions paid, etc.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() =>
              window.open(
                "https://appsource.microsoft.com/en-us/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.commission365?tab=Overview",
                "_blank"
              )
            }
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
          >
            Download from Microsoft App Source
          </button>
        </div>
      </div>

      {/* Second Section - Why this App? */}
      <div className="mt-12 px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Why this <span className="text-orange-600">App</span>?
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {cardData.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="w-full h-full bg-gradient-to-r from-black to-gray-800 p-4 sm:p-6 rounded-xl shadow-lg text-center border hover:shadow-2xl transition transform hover:-translate-y-1 group"
              >
                <div className="flex justify-center mb-3">
                  <div className="bg-orange-100 p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Icon className="text-orange-500 text-2xl" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-18 px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black">
              Automate Sales Incentives with{" "}
              <span className="text-orange-600">Commission 365</span>
            </h3>
            <p className="text-black text-lg">
              Commission 365 helps you in creating tailored incentives based on
              your preferences. Choose when you want to receive commissions and
              the calculation method that suits you best. With two types of
              calculations, Count-Based & Percentage-Based, this app ensures a
              personalized commission experience tailored to your needs.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchat%2F0%2F0%3Fusers%3Dsatish%40pascalcase.com%2Clikitha%40pascalcase.com%26topicName%3DAIAutocloser%2520Demo&type=chat&deeplinkId=b0894194-4bc2-458f-9e6a-083740b3cd18&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true",
                  "_blank"
                )
              }
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 flex items-center gap-2"
            >
              <FaCalendarAlt className="text-white text-lg" />
              Book a Call or Demo
            </button>
          </div>

          {/* Right Column (Image) */}
          <div className="relative w-full h-[400px]">
            <Image
              src="/Images/commission365(2).webp"
              alt="How Commission 365 App Works"
              layout="fill"
              objectFit="contain"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
