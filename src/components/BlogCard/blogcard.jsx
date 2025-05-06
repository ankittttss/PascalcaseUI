import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 flex-shrink-0 w-[300px] max-h-[480px] flex flex-col">
      
      {/* Image Section */}
      <div className="relative w-full h-[160px]">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow overflow-hidden">
        
        {/* Author */}
        <p className="text-xs text-gray-500 mb-1">By {blog.author}</p>

        {/* Title */}
        <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
          {blog.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-2 line-clamp-2 overflow-hidden">
          {blog.description}
        </p>

        {/* Keywords — Only show first 2 */}
        <div className="flex gap-1 text-xs text-orange-600 font-medium mb-2">
          {blog.keywords.slice(0, 2).map((keyword, idx) => (
            <span
              key={idx}
              className="bg-orange-100 px-2 py-0.5 rounded-full overflow-hidden text-ellipsis whitespace-nowrap"
            >
              #{keyword}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <div className="mt-auto">
          <button className="text-orange-500 font-medium hover:underline text-sm flex items-center gap-1">
            Read More <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
