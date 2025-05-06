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
    title: "Stay Notified and Updated",
    text: "Receive timely notifications for failed flows and regular updates from all environments.",
  },
  {
    icon: FaShieldAlt,
    title: "Centralized Monitoring",
    text: "Keep track of all your flows in one place..",
  },
  {
    icon: FaRandom,
    title: "Insightful Analytics",
    text: "Access detailed analytics for better flow management.",
  },
  {
    icon: FaUserShield,
    title: "Multi-Environment Compatibility",
    text: "Monitor flows across multiple environments.",
  },
];

export default function FlowMonitor() {
  return (
    <div className="container mx-auto mt-25 px-4">
      {/* First Section */}
      <div className="bg-white rounded-xl p-10 mt-5">
        <h1 className="text-4xl text-black font-bold mb-4 text-center">
          <span className="text-orange-600">Flow Monitor</span> for Power
          Automate
        </h1>
        <h2 className="text-lg text-center mb-6 text-black font-semibold">
          Monitor thousands of flows effectively
        </h2>
        <p className="text-black text-base mb-6 text-center max-w-4xl mx-auto">
          Flow Monitor provides seamless tracking and in-depth monitoring of
          your Power Automate flows across all environments. Gain detailed
          insights into flow performance, including execution duration and
          failure reasons. Receive timely notifications for failed flows and
          regular updates from all environments, ensuring you stay informed and
          in control.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() =>
              window.open(
                "https://appsource.microsoft.com/en-us/product/web-apps/pascalcasesoftwareprivatelimited1662384934323.flowmonitor?ocid=GTMRewards_WhatsNewBlog_flowmonitor_08012024",
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
              src="
https://www.youtube.com/embed/z86lb_9OwpI
"
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
              Improve your{" "}
              <span className="text-orange-600">Power Automate</span> experience
              with Flow Monitor
            </h3>
            <p className="text-black text-lg">
              Flow Monitor is an essential tool for organizations using Dynamics
              365. It helps you track your flows using a dashboard featuring
              multiple charts and visualizations. With Flow Monitor, you can
              monitor all flows, access detailed insights, and understand flow
              failures to make better decisions and allocate resources
              effectively.
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
              src="/Images/flow.webp"
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
