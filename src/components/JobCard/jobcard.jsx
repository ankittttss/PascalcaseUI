"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa";

export default function JobCard({ job }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start bg-[#fdf8f3] border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-4xl mx-auto">
      {/* Icon Section */}
      <div className="text-4xl text-orange-500 mb-4 sm:mb-0 sm:mr-6 shrink-0">
        {job.icon}
      </div>

      {/* Content Section */}
      <div className="flex-1">
        {/* Title & Tags */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            {job.type.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Location & Experience */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-sm text-gray-600 mb-2">
          <div className="flex items-center mb-1 sm:mb-0">
            <FaLocationArrow className="mr-2 text-orange-500" />
            {job.location}
          </div>
          <div>
            <strong>Experience:</strong> {job.experience}
          </div>
        </div>

        {/* Job Description as Bullet Points */}
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {job.jobDescription.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
