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
    question: "Can I cancel the subscription at any time?",
    answer: "Yes, you can cancel the plan anytime.",
  },
  {
    question: "Can I get a refund if I’m not satisfied?",
    answer: "Yes, you can.",
  },
  {
    question: "Can I get a free trial before subscribing?",
    answer:
      "There is a free version available without requiring a license key.",
  },
];

const cardData = [
  {
    icon: FaBusinessTime,
    title: "Free for one page",
    text: "You can use it without a licensing key for one page.",
  },
  {
    icon: FaShieldAlt,
    title: "It can process large HTML content",
    text: "Fast and Powerful.",
  },
  {
    icon: FaRandom,
    title: "Power Automate connector",
    text: "Use it from Power Automat flow for better Management",
  },
  {
    icon: FaUserShield,
    title: "Easy and Secure",
    text: "No need to worry about security, it is secure and easy to use.",
  },
];

export default function HtmltoPdfConvertor() {
  return (
    <div className="container mx-auto mt-25 px-4">
      {/* First Section */}
      <div className="bg-white rounded-xl p-10 mt-5">
        <h1 className="text-4xl text-black font-bold mb-4 text-center">
          <span className="text-orange-600">HTML to PDF Convertor</span> for
          Power Automate
        </h1>
        <h2 className="text-lg text-center mb-6 text-black font-semibold">
          Convert Html content to Pdf documents using Power Automate flows
        </h2>
        <p className="text-black text-base mb-6 text-center max-w-4xl mx-auto">
          A Power Automate premium connector for converting HTML content to PDF
          documents. Say goodbye to the restrictive 2MB limit. Now, you can
          create heavy-duty pdf documents without size constraints.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() =>
              window.open(
                "https://learn.microsoft.com/en-us/connectors/htmltopdfconverter/",
                "_blank"
              )
            }
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
          >
            Visit Microsoft Docs
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
      <div className="bg-white px-4 py-10 min-h-screen mt-5">
        <h2 className="text-4xl font-bold text-center text-black mb-2">
          Pricing
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Pay yearly and cancel anytime
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Free Plan
              </h3>
              <p className="text-5xl font-extrabold text-black mb-4">$0</p>
              <ul className="space-y-3 text-gray-600 text-base mb-6">
                <li>✅ Convert HTML content to pdf document (one page only)</li>
                <li>✅ Available on Power Automate</li>
                <li>✅ 100 calls per month</li>
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-black text-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Pro Plan
              </h3>
              <p className="text-5xl font-extrabold text-white mb-1">
                $49<span className="text-base font-medium">/mo</span>
              </p>
              <p className="text-sm text-gray-100 mb-4">Billed annually</p>
              <ul className="space-y-3 text-white text-base mb-6">
                <li>✅ Convert HTML content to pdf document (Up to 5 pages)</li>
                <li>✅ Up to 10MB of HTML content</li>
                <li>✅ 1000 calls per month</li>
              </ul>
            </div>
            <div>
              <button onClick={()=>{
                window.open("https://buy.stripe.com/dR6g269fm7BQbuMfZ1", "_blank")

              }} className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition w-full mb-2">
                Purchase using Stripe
              </button>
              <p className="text-sm text-red-200 text-center">
                💳 Credit Card Required
              </p>
            </div>
          </div>
        </div>
      </div>
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
      <div className="bg-white px-6 py-12 mt-10 max-w-5xl mx-auto rounded-xl shadow-lg">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          Setting up the Converter
        </h2>

        {/* Step Instructions with Images */}
        <ol className="list-decimal list-inside text-gray-800 text-lg space-y-10">
          {/* Step 1 */}
          <li className="flex flex-col bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">
              Step 1: Search for HTML to PDF by Pascalcase in the "add an
              action" section
            </h3>
            <p className="mb-4">Select the Pascalcase connector.</p>
            <div className="flex justify-center mt-4">
              <div className="relative w-full h-[300px] max-w-2xl">
                <Image
                  src="/Images/Image1–H1-HTMLToPDF.webp" // Replace with your image path
                  alt="Step 1 Screenshot"
                  fill
                  className="object-contain rounded-xl transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </li>

          {/* Step 2 */}
          <li className="flex flex-col bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">
              Step 2: Provide the HTML string or code along with an optional key
            </h3>
            <p className="mb-4">
              The key, provided by Pascalcase Software Pvt. Ltd., enables users
              to generate multi-page PDFs. Customize it according to your
              requirements.
            </p>
            <div className="flex justify-center mt-4">
              <div className="relative w-full h-[300px] max-w-2xl">
                <Image
                  src="/Images/Image1–H2-HTMLToPDF.webp" // Replace with your image path
                  alt="Step 2 Screenshot"
                  fill
                  className="object-contain rounded-xl transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </li>

          {/* Step 3 */}
          <li className="flex flex-col bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">
              Step 3: After running the flow, the response will be a byte array
            </h3>
            <p className="mb-4">
              This can be used as file content for various purposes, such as
              storing in Dataverse or SharePoint.
            </p>
            <div className="flex justify-center mt-4">
              <div className="relative w-full h-[300px] max-w-2xl">
                <Image
                  src="/Images/Image1–H3-HTMLToPDF.webp" // Replace with your image path
                  alt="Step 3 Screenshot"
                  fill
                  className="object-contain rounded-xl transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </li>

          {/* Step 4 */}
          <li className="flex flex-col bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">
              Step 4: Parse the output using the schema
            </h3>
            <p className="mb-4">
              When creating OneDrive, Dataverse, or SharePoint PDFs, you must
              parse the output of the connector.
            </p>
            <div className="flex justify-center mt-4">
              <div className="relative w-full h-[300px] max-w-2xl">
                <Image
                  src="/Images/Image–H4-HTMLToPDF.webp" // Replace with your image path
                  alt="Step 4 Screenshot"
                  fill
                  className="object-contain rounded-xl transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </li>
        </ol>

        {/* Subheading */}
        <h3 className="text-2xl font-semibold text-black mb-6 mt-12">Schema</h3>

        <div className="bg-gray-100 text-gray-800 text-sm p-6 rounded-xl overflow-x-auto mb-6">
          <pre className="text-gray-800">
            <code>
              {`{
  "type": "object",
  "properties": {
    "statusCode": {
      "type": "integer"
    },
    "headers": {
      "type": "object",
      "properties": {
        "Pragma": { "type": "string" },
        "Vary": { "type": "string" },
        "Cache-Control": { "type": "string" },
        "Set-Cookie": { "type": "string" },
        "X-AspNet-Version": { "type": "string" },
        "X-Powered-By": { "type": "string" },
        "Timing-Allow-Origin": { "type": "string" },
        "x-ms-apihub-cached-response": { "type": "string" },
        "x-ms-apihub-obo": { "type": "string" },
        "Date": { "type": "string" },
        "Content-Type": { "type": "string" },
        "Expires": { "type": "string" },
        "Content-Length": { "type": "string" }
      }
    },
    "body": {
      "type": "string"
    }
  }
}`}
            </code>
          </pre>
        </div>

        {/* Step 5 */}
        <ol
          start={5}
          className="list-decimal list-inside text-gray-800 text-lg space-y-4"
        >
          <li className="flex flex-col bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">
              Step 5: Convert body to binary for OneDrive or SharePoint
            </h3>
            <p className="mb-4">
              Use the base64to Binary function to convert the body output to
              binary when creating PDF files for OneDrive or SharePoint.
            </p>
            <div className="flex justify-center mt-4">
              <div className="relative w-full h-[300px] max-w-2xl">
                <Image
                  src="/Images/Image–H5-HTMLToPDF.webp" // Replace with your image path
                  alt="Step 5 Screenshot"
                  fill
                  className="object-contain rounded-xl transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </li>
        </ol>
      </div>
      );
    </div>
  );
}
