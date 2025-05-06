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
    title: "Automated Case Resolution",
    text: "Receive automated case resolution in Dynamics 365 to efficiently close cases based on predefined conditions, minimizing manual effort and improving customer service response times.",
  },
  {
    icon: FaShieldAlt,
    title: "Enhanced Productivity",
    text: "Enhanced Productivity in Dynamics 365 streamlines workflows and automates routine tasks, allowing teams to focus on higher-value activities.",
  },
  {
    icon: FaRandom,
    title: "One-Time Configuration",
    text: "One-time configuration in Dynamics 365 simplifies setup and management, reducing the need for ongoing adjustments.",
  },
  {
    icon: FaUserShield,
    title: "Cost Savings",
    text: "Cost savings in Dynamics 365 are achieved through automation and streamlined processes, ultimately enhancing the bottom line.",
  },
];

export default function AIAutoCloser() {
  return (
    <div className="container mx-auto mt-25 px-4">
      {/* First Section */}
      <div className="bg-white rounded-xl p-10 mt-5">
        <h1 className="text-4xl text-black font-bold mb-4 text-center">
          <span className="text-orange-600">AI Autocloser</span> for Dataverse
        </h1>
        <h2 className="text-lg text-center mb-6 text-black font-semibold">
          Auto-resolve the cases with AI Auto-closer.
        </h2>
        <p className="text-black text-base mb-6 text-center max-w-4xl mx-auto">
          Resolve your cases quickly using AI Autocloser. It is an app for the
          Dataverse that auto-resolves cases that require no further action. The
          app closes only non-actionable tickets, where the customer has thanked
          you and has no additional requests to be made.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() =>
              window.open(
                "https://appsource.microsoft.com/en-us/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.autocloser?tab=DetailsAndSupport",
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

      {/* FAQ Section */}
      <div className="mt-10 px-4 space-y-16">
        {/* Video Section */}
        <div className="max-w-5xl mx-auto w-full text-center">
          <h2 className="text-4xl font-bold mb-2 flex justify-center items-center gap-2">
            <FaPlayCircle className="text-orange-600" />
            <span className="text-orange-600">Tutorial</span>{" "}
            <span className="text-black">Walkthrough</span>
          </h2>
          <p className="text-lg text-black mb-6">
            Watch the step-by-step guide to understand how it all works
          </p>
          <div className="w-full h-[400px] p-4">
            <iframe
              src="https://www.youtube.com/embed/ZLRMSvkUlpI"
              title="Tutorial Video"
              className="w-full h-full rounded-xl border border-gray-300 shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-18 px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black">
              Automate Case Resolution with{" "}
              <span className="text-orange-600">AI Auto-closer</span> for
              Incoming Emails
            </h3>
            <p className="text-black text-lg">
              AI Autocloser efficiently handles incoming emails by identifying
              non-actionable cases and resolving them. When a customer expresses
              satisfaction without any additional requests through mail,
              Autocloser recognizes this and closes the case.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchat%2F0%2F0%3Fusers%3Dsatish%40pascalcase.com%2Clikitha%40pascalcase.com%26topicName%3DAIAutocloser%2520Demo&type=chat&deeplinkId=014a1ad3-369f-4dc0-9379-4678ef8f085e&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true",
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
              src="/Images/AIAutocloser.webp"
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
