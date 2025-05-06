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
    title: "Secure your sandbox environments",
    text: "The app ensures that your testing and development activities can be conducted without compromising confidential data",
  },
  {
    icon: FaShieldAlt,
    title: "Anonymization",
    text: "The app replaces sensitive data with realistic anonymous values, ensuring personal information remains unlinked to specific individuals.",
  },
  {
    icon: FaRandom,
    title: "Data Privacy & Compliance",
    text: "Comply with data privacy regulations like GDPR, HIPAA, or CCPA by masking personal & sensitive information.",
  },
  {
    icon: FaUserShield,
    title: "Data Protection",
    text: "Safeguard sensitive data from unauthorized access or exposure, reducing the risk of data breaches, cyberattacks, and internal data leaks.",
  },
];

export default function DataMasking() {
  return (
    <div className="container mx-auto mt-25 px-4">
      {/* First Section */}
      <div className="bg-white rounded-xl p-10 mt-5">
        <h1 className="text-4xl text-black font-bold mb-4 text-center">
          <span className="text-orange-600">Data Mask</span> app for Dataverse
        </h1>
        <h2 className="text-lg text-center mb-6 text-black font-semibold">
          Make your Power Platform sandbox environments more secure by replacing
          sensitive data with dummy data.
        </h2>
        <p className="text-black text-base mb-6 text-center max-w-4xl mx-auto">
          Mask/Anonymize/Obfuscate Dataverse data with random characters and
          numbers, mock data from pre-built formats. You can also easily select
          the fields to be masked or simply deleted.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() =>
              window.open(
                "https://appsource.microsoft.com/en-us/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.datamask?tab=Overview",
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

      <div className="mt-18 px-4">
        <h2 className="text-4xl font-bold text-center text-black">
          How does the <span className="text-orange-600">Data Mask</span> app
          work?
        </h2>
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl h-[400px]">
            <Image
              src="/Images/DataMaskingImage.webp" // Replace with actual path in /public
              alt="How Data Mask App Works"
              layout="fill"
              objectFit="contain"
              className="rounded-xl "
            />
          </div>
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
              src="https://www.youtube.com/embed/jWjaJS_7Zus?si=O2GWiZq7ekjDNzkJ"
              title="Tutorial Video"
              className="w-full h-full rounded-xl border border-gray-300 shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <button
          onClick={() =>
            window.open(
              "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchat%2F0%2F0%3Fusers%3Dsatish%40pascalcase.com%2Clikitha%40pascalcase.com%26topicName%3DDataMask%2520Demo&type=chat&deeplinkId=ecfc1e92-695c-4527-a890-1ebc3b18c0f1&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true",
              "_blank"
            )
          }
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 items-center flex justify-center gap-2 mx-auto mt-10"
        >
          <FaCalendarAlt className="text-white text-lg" />
          Book a Call or Demo
        </button>
        {/* FAQ Accordion Section */}
        <div className="max-w-5xl mx-auto text-center px-4 mb-20 space-y-6">
          <h2 className="text-4xl font-bold mb-2 flex justify-center items-center gap-2 text-orange-600">
            <FaQuestionCircle className="text-orange-600" />
            FAQ
          </h2>
          <p className="text-lg text-black mb-6">Frequently Asked Questions</p>

          <div className="space-y-4 text-left">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="group bg-orange-50 hover:bg-orange-100 text-black rounded-xl p-5 border border-gray-200 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:border-orange-400"
              >
                <summary className="font-semibold text-orange-600 flex items-center justify-between cursor-pointer list-none transition-colors duration-300">
                  <span>{faq.question}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <FaChevronDown className="text-orange-600" />
                  </span>
                </summary>
                <div className="mt-3 text-gray-700 transition-all duration-300 ease-in-out">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
