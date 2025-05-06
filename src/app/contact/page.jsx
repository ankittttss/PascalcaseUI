import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us for any inquiries or support.',
};

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="flex flex-col justify-center sm:text-center md:text-left sm:px-4 md:px-0">
          <h2 className="text-xl font-bold mb-6 text-orange-400 mt-6 sm:mt-6 md:mt-0">
            How can we help you?
          </h2>

          <div className="mt-3">
            <h3 className="text-4xl font-bold text-black mb-3">Contact Us</h3>
            <p className="text-black mb-6">
              We’re here to help and answer any questions you might have. We look forward to hearing from you!
            </p>

            <div className="space-y-4 text-gray-800">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-black mt-1" />
                <span>
                  Plot No 1/C, Sy No 83/1, Raidurgam panmaktha, Knowledge City Rd, Hyderabad, Serilingampalle (M), Telangana 500081
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-black" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-black" />
                <span>support@pascalcase.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center sm:mt-10 md:mt-0">
          <Image
            src="/Images/image-4-1536x1536.webp" // Put this image in your public folder
            alt="Contact Illustration"
            width={400}
            height={400}
            className="w-full sm:w-80 sm:h-80 md:w-auto md:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
