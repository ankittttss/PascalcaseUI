import BlogCard from "@/components/BlogCard/blogcard";

export const metadata = {
  title: "Blogs | Pascalcase",
  description:
    "Explore expert insights, tips, and guides on Dynamics 365, Power Platform, and more.",
};

const blogData = [
  {
    id: 1,
    title: "Mastering Dynamics 365",
    description:
      "A complete guide to streamline business processes using Dynamics 365 tools.",
    image: "/Images/integration-card-microsoft-dynamics-365.webp",
    author: "Ankit Saini",
    keywords: ["Dynamics 365", "CRM", "Automation"],
  },
  {
    id: 2,
    title: "CRM Customization Tips",
    description:
      "Learn the best practices for customizing CRM forms, views, and workflows.",
    image: "/Images/integration-card-microsoft-dynamics-365.webp",
    author: "Mahith Reddy",
    keywords: ["CRM", "Customization", "Forms"],
  },
  {
    id: 3,
    title: "Power Platform Hacks",
    description:
      "Boost productivity with these lesser-known Power Apps and Power Automate tricks.",
    image: "/Images/integration-card-microsoft-dynamics-365.webp",
    author: "Himanshu Kumar",
    keywords: ["Power Apps", "Power Automate", "Forms"],
  },
  {
    id: 4,
    title: "Advanced Power Automate Techniques",
    description:
      "Learn advanced Power Automate techniques to improve business workflows.",
    image: "/Images/integration-card-microsoft-dynamics-365.webp",
    author: "John Doe",
    keywords: ["Power Automate", "Business Automation"],
  },
  {
    id: 5,
    title: "Optimizing Dynamics 365 for Sales",
    description: "Best practices to optimize Dynamics 365 for sales processes.",
    image: "/Images/integration-card-microsoft-dynamics-365.webp",
    author: "Jane Smith",
    keywords: ["Dynamics 365", "Sales", "Optimization"],
  },
  {
    id: 6,
    title: "Understanding Power BI in Dynamics 365",
    description:
      "Explore how to integrate Power BI with Dynamics 365 for advanced analytics.",
    image: "/Images/integration-card-microsoft-dynamics-365.webp",
    author: "Arpit Singh",
    keywords: ["Power BI", "Analytics", "Dynamics 365"],
  },
  {
    id: 7,
    title: "AI Integration with Dynamics 365",
    description:
      "Leverage artificial intelligence to enhance your Dynamics 365 applications.",
    image: "/Images/integration-card-microsoft-dynamics-365.webp",
    author: "Amit Sharma",
    keywords: ["AI", "Dynamics 365", "Automation"],
  },
  {
    id: 8,
    title: "Building Custom Dashboards in Power Apps",
    description:
      "Step-by-step guide to building custom dashboards in Power Apps.",
    image: "/Images/integration-card-microsoft-dynamics-365.webp",
    author: "Neha Gupta",
    keywords: ["Power Apps", "Dashboards", "Customization"],
  },
  {
    id: 9,
    title: "Automation with Power Automate in Office 365",
    description: "Automate your tasks in Office 365 using Power Automate.",
    image: "/Images/integration-card-microsoft-dynamics-365.webp",
    author: "Ravi Verma",
    keywords: ["Power Automate", "Office 365", "Automation"],
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 mt-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
            Our Blogs
          </h1>
        </div>

        {/* Blog Cards Flex Container */}
        <div className="flex flex-wrap justify-center gap-8">
          {blogData.map((blog) => (
            <div key={blog.id} className="flex-shrink-0">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
