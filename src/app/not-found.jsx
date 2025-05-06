'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full px-6 py-12 bg-white  border-orange-100 ">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/Images/shutterstock_479042983.jpg.webp" // 🔁 Replace with your image path
            alt="404 Illustration"
            width={400} // Adjust image width as needed
            height={400} // Adjust image height as needed
            className="mx-auto"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-7xl font-extrabold text-orange-600">404</h1>
          <h2 className="mt-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
          <p className="mt-2 text-lg text-gray-600">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-orange-600 text-white font-medium rounded-full shadow-md hover:bg-orange-700 transition duration-300"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
