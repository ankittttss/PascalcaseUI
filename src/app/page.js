'use client';
import Navbar from "@/components/Navbar/navbar";
import Image from "next/image";
import { useState } from "react";
import "../app/globals.css";
import Footer from "@/components/Footer/footer";
import ProductShowcase from "@/components/ProductCaroursel/Product";
import { FiMessageCircle } from "react-icons/fi";
import { FaBusinessTime, FaUsers, FaMicrosoft, FaStar, FaRegNewspaper, FaBullhorn, FaHeadset,FaBaby } from "react-icons/fa";
import BlogCard from "@/components/BlogCard/blogcard";


const blogData = [
    {
        "id": 1,
        "title": "Mastering Dynamics 365",
        "description": "A complete guide to streamline business processes using Dynamics 365 tools.",
        "image": "/images/integration-card-microsoft-dynamics-365.webp",
        "author": "Ankit Saini",
        "keywords": ["Dynamics 365", "CRM", "Automation"]
    },
    {
        "id": 2,
        "title": "CRM Customization Tips",
        "description": "Learn the best practices for customizing CRM forms, views, and workflows.",
        "image": "/images/integration-card-microsoft-dynamics-365.webp",
        "author": "Mahith Reddy",
        "keywords": ["CRM", "Customization", "Forms"]
    },
    {
        "id": 3,
        "title": "Power Platform Hacks",
        "description": "Boost productivity with these lesser-known Power Apps and Power Automate tricks.",
        "image": "/images/integration-card-microsoft-dynamics-365.webp",
        "author": "Himanshu Kumar",
        "keywords": ["Power Apps", "Power Automate", "Forms"]
    },
    {
        "id": 4,
        "title": "Advanced Power Automate Techniques",
        "description": "Learn advanced Power Automate techniques to improve business workflows.",
        "image": "/images/Microsoft_Dynamics365_blog-1170x617-1.jpg",
        "author": "John Doe",
        "keywords": ["Power Automate", "Business Automation"]
    },
    {
        "id": 5,
        "title": "Optimizing Dynamics 365 for Sales",
        "description": "Best practices to optimize Dynamics 365 for sales processes.",
        "image": "/images/Microsoft_Dynamics365_blog-1170x617-1.jpg",
        "author": "Jane Smith",
        "keywords": ["Dynamics 365", "Sales", "Optimization"]
    },
    {
        "id": 6,
        "title": "Understanding Power BI in Dynamics 365",
        "description": "Explore how to integrate Power BI with Dynamics 365 for advanced analytics.",
        "image": "/images/Microsoft_Dynamics365_blog-1170x617-1.jpg",
        "author": "Arpit Singh",
        "keywords": ["Power BI", "Analytics", "Dynamics 365"]
    },
    {
        "id": 7,
        "title": "AI Integration with Dynamics 365",
        "description": "Leverage artificial intelligence to enhance your Dynamics 365 applications.",
        "image": "/images/Microsoft_Dynamics365_blog-1170x617-1.jpg",
        "author": "Amit Sharma",
        "keywords": ["AI", "Dynamics 365", "Automation"]
    },
    {
        "id": 8,
        "title": "Building Custom Dashboards in Power Apps",
        "description": "Step-by-step guide to building custom dashboards in Power Apps.",
        "image": "/images/Microsoft_Dynamics365_blog-1170x617-1.jpg",
        "author": "Neha Gupta",
        "keywords": ["Power Apps", "Dashboards", "Customization"]
    },
    {
        "id": 9,
        "title": "Automation with Power Automate in Office 365",
        "description": "Automate your tasks in Office 365 using Power Automate.",
        "image": "/images/Microsoft_Dynamics365_blog-1170x617-1.jpg",
        "author": "Ravi Verma",
        "keywords": ["Power Automate", "Office 365", "Automation"]
    }
]

export default function Home() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscription = (e) => {
        e.preventDefault();
        setIsSubscribed(true);
    };

    return (
        <>

            {/* Hero Section */}
            <div className="px-4 sm:px-6 lg:px-18 py-12 bg-white mt-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-14">

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-4 leading-tight tracking-tight">
                            Welcome to <span className="text-orange-500">Pascalcase</span>
                            {/* Icon Image after Pascalcase */}
                            <Image
                                src="/Images/faviconV2.png" // Replace with the actual path of your image
                                alt="Icon"
                                width={30} // Set the width of the icon
                                height={30} // Set the height of the icon
                                className="inline-block ml-2" // Add some margin to the left to separate the icon
                            />
                        </h1>


                        <p className="text-base sm:text-lg text-black mb-4">
                            Transform your Dynamics 365 investment into tangible results with the help of a seasoned partner. Choose Pascalcase, where our expertise in Dynamics 365 and Power Platform will take your business to the next level.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src="/Images/homepage-image_V3.png"
                            alt="Descriptive Alt Text"
                            width={500}
                            height={400}
                            className="rounded-lg w-full max-w-sm sm:max-w-md md:max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Our Customers Section */}
            <div className="mt-20 px-4 sm:px-6 lg:px-14">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 flex justify-center items-center gap-4"> {/* Increased gap */}
                        Our Customers
                        <FaUsers className="text-orange-500 w-8 h-8" />
                    </h2>
                    <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-8"></div>
                    <div className="flex justify-center">
                        <Image
                            src="/Images/clients_1.webp"
                            alt="Our Customers"
                            width={700}
                            height={400}
                            className="rounded-lg w-full max-w-3xl h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Why Pascalcase Section */}
            <div className="mt-20 px-4 sm:px-6 lg:px-14 py-16">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                        Why Pascalcase
                    </h2>
                    <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-8"></div>
                    <p className="text-lg sm:text-xl text-black mb-12 max-w-2xl mx-auto">
                        Pascalcase has decades of experience partnering with organizations of all sizes, industries, and locations to unlock efficiency.
                    </p>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-gradient-to-r from-black to-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg text-center border hover:shadow-2xl transition transform hover:-translate-y-1 group">
                            <div className="flex justify-center mb-4">
                                <div className="bg-orange-100 p-3 rounded-full group-hover:scale-110 transition-transform">
                                    <FaBusinessTime className="text-orange-500 text-3xl" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">5+ Years in Business</h3>
                            <p className="text-gray-300">
                                We have a <span className="text-orange-400 font-medium">proven track record</span> of success and long-term partnerships.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gradient-to-r from-black to-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg text-center border hover:shadow-2xl transition transform hover:-translate-y-1 group">
                            <div className="flex justify-center mb-4">
                                <div className="bg-orange-100 p-3 rounded-full group-hover:scale-110 transition-transform">
                                    <FaUsers className="text-orange-500 text-3xl" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">10+ Clients</h3>
                            <p className="text-gray-300">
                                Our extensive experience serving <span className="text-orange-400 font-medium">diverse industries</span> speaks for itself.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gradient-to-r from-black to-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg text-center border hover:shadow-2xl transition transform hover:-translate-y-1 group">
                            <div className="flex justify-center mb-4">
                                <div className="bg-orange-100 p-3 rounded-full group-hover:scale-110 transition-transform">
                                    <FaMicrosoft className="text-orange-500 text-3xl" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Dynamics 365 Experts</h3>
                            <p className="text-gray-300">
                                We specialize in leveraging <span className="text-orange-400 font-medium">Microsoft technologies</span> to drive business transformation.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-gradient-to-r from-black to-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg text-center border hover:shadow-2xl transition transform hover:-translate-y-1 group">
                            <div className="flex justify-center mb-4">
                                <div className="bg-orange-100 p-3 rounded-full group-hover:scale-110 transition-transform">
                                    <FaBusinessTime className="text-orange-500 text-3xl" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Field Service</h3>
                            <p className="text-gray-300">
                                We have a <span className="text-orange-400 font-medium">proven track record</span> of success, long-term partnerships, and we <span className="text-orange-400 font-medium">bring customer service capabilities</span> to customer locations.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-gradient-to-r from-black to-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg text-center border hover:shadow-2xl transition transform hover:-translate-y-1 group">
                            <div className="flex justify-center mb-4">
                                <div className="bg-orange-100 p-3 rounded-full group-hover:scale-110 transition-transform">
                                    <FaHeadset className="text-orange-500 text-3xl" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Customer Service</h3>
                            <p className="text-gray-300">
                                We help you connect with <span className="text-orange-400 font-medium">call centers, self-help portals, knowledge bases, SLA management, entitlements, and more</span> to streamline your customer support.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-gradient-to-r from-black to-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg text-center border hover:shadow-2xl transition transform hover:-translate-y-1 group">
                            <div className="flex justify-center mb-4">
                                <div className="bg-orange-100 p-3 rounded-full group-hover:scale-110 transition-transform">
                                    <FaBullhorn className="text-orange-500 text-3xl" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Marketing Experts</h3>
                            <p className="text-gray-300">
                                We help create end-to-end <span className="text-orange-400 font-medium">marketing funnels, customer journeys, and campaigns</span>.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* <ProductShowcase /> */}
            <div className="max-w-7xl mx-auto text-center">
                <ProductShowcase />
            </div>

            {/* Blog Section */}

            <div className="mt-15 px-4 sm:px-6 lg:px-14 py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2 text-center">
                        From Our Blogs <FaRegNewspaper className="inline text-orange-500 ml-2" />
                    </h2>
                    <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-8"></div>
                    <p className="text-lg sm:text-xl text-black mb-12 max-w-2xl mx-auto">
                        Discover insights, tips, and stories from our team to help you grow smarter and faster.
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-20 gap-y-10 px-4 pb-4">
                        {blogData.slice(0, 3).map((blog) => (
                            <div key={blog.id} className="max-w-xs">
                                <BlogCard blog={blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

