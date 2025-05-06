"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const productData = [
  {
    heading: "Pascalcase Metadata Browser for Dataverse",
    description:
      "An Edge extension to browse metadata in Dataverse, view table & column logical names directly on forms, and export to CSV — simplifying development.",
    mediaType: "iframe",
    src: "https://youtu.be/WGOKc2VnODY",
    link: "/metadata", // Add your link here
  },
  {
    heading: "Html to Pdf converter for Power Automate",
    description:
      "Convert HTML to PDF in Power Automate — without 2MB file limits. Create large, printable PDFs effortlessly.",
    mediaType: "image",
    src: "/Images/239859076-5d5e13f1-8877-4798-9f68-16c20f83767f.png",
    link: "/HtmltoPdfConvertor", // Add your link here
  },
  {
    heading: "Data Mask app for Dataverse",
    description:
      "Anonymize your Dataverse data using random characters, mock formats, or deletion. Select specific fields for secure masking.",
    mediaType: "iframe",
    src: "https://youtu.be/jWjaJS_7Zus",
    link: "/DataMasking", // Add your link here
  },
  {
    heading: "Commission 365 for Dataverse",
    description:
      "Design and automate commission & incentive plans in Dynamics 365. Define rule sets, frequency, and eligible staff seamlessly.",
    mediaType: "image",
    src: "/Images/commission365(2).webp",
    link: "/Commission365", // Add your link here
  },
  {
    heading: "AI Autocloser for Dataverse",
    description:
      "Automatically close non-actionable cases in Dynamics 365 using AI. Handles thank-you or resolved cases intelligently.",
    mediaType: "iframe",
    src: "https://youtu.be/ZLRMSvkUlpI",
    link: "/AIAutoCloser", // Add your link here
  },
  {
    heading: "Flow Monitor for Power Automate",
    description:
      "Track and analyze Power Automate flow health across environments. Get failure alerts, performance stats, and consolidated insights.",
    mediaType: "iframe",
    src: "https://youtu.be/z86lb_9OwpI",
    link: "/FlowMonitor", // Add your link here
  },
];

function getEmbeddedUrl(url) {
  const match = url.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}
export default function ProductShowcase() {
  return (
    <div className="w-full py-6 px-2">
      <h1 className="text-xl md:text-4xl font-bold text-center text-black mb-6">
        🚀 Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {productData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-3 shadow-sm hover:shadow-orange-200 transition-shadow duration-300 rounded-md"
          >
            <div className="mb-2 aspect-[5/4] rounded-md overflow-hidden shadow-sm">
              {item.mediaType === "image" ? (
                 <Image
                 src={item.src}
                 alt={item.heading}
                 className="w-full h-full object-cover"
                 width={500} // provide width
                 height={400} // provide height
                 layout="responsive" // ensures aspect ratio
               />
              ) : item.mediaType === "iframe" ? (
                <iframe
                  src={getEmbeddedUrl(item.src)}
                  title={item.heading}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : null}
            </div>
            <h2 className="text-sm font-semibold text-black mb-1">
              {item.heading}
            </h2>
            <p className="text-gray-700 text-xs leading-tight mb-2">
              {item.description}
            </p>
            <Link href={item.link}>
              <button className="inline-flex items-center bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow hover:bg-orange-600 hover:scale-105 transition-transform duration-300">
                Know More <span className="ml-1">→</span>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
