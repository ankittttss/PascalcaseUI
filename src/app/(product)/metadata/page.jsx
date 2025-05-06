'use client';

export default function Metadata() {
  return (
    <div className="bg-white min-h-screen font-sans text-black pt-20 px-8 md:px-20 mt-12">
      {/* Main Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">
          <span className="text-orange-600">Pascalcase</span>{' '}
          Metadata Browser for Dataverse
        </h1>
        <p className="text-black max-w-4xl mx-auto">
          <span className="text-orange-600 font-medium">Pascalcase Metadata Browser</span> is an extension for Microsoft Edge browser for accessing metadata
          of Dataverse (Dynamics 365 and PowerApps) instances. You can easily browse properties
          like tables, columns, relationships, choices, etc. and export to CSV files. The main
          advantage of this extension is that it will automatically show you the logical names
          of the tables and their columns on UI forms, assisting you not to always navigate to
          your solution to find the logical names.
        </p>
      </div>

      {/* Two Side-by-Side Descriptions */}
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        {/* Card 1 */}
        <div className="flex-1 bg-gradient-to-r from-orange-50 via-orange-100 to-orange-200 p-6 rounded-2xl shadow-xl hover:scale-105 transform transition-all duration-300 text-black">
          <h2 className="text-2xl font-semibold mb-3">
            <span className="text-orange-600">Pascalcase</span> Metadata Browser
          </h2>
          <p className="text-gray-800 mb-4 overflow-hidden text-ellipsis max-h-[150px]">
            <span className="text-orange-600">Pascalcase</span> Metadata Browser is an extension for Microsoft Edge browser for accessing metadata
            of Dataverse (Dynamics 365 and PowerApps) instances. You can easily browse properties
            like tables, columns, relationships, choices, etc. and export to CSV files.
          </p>
          <button cursor="pointer"
            className="mt-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-xl hover:bg-orange-800 transition duration-200 transform hover:scale-105"
            onClick={() => window.open('https://microsoftedge.microsoft.com/addons/detail/metadata-browser-for-dyna/fdfelmicclblfanogpnejdogjjildbkf', '_blank')}
          >
            Download from Microsoft Edge
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-gradient-to-r from-orange-50 via-orange-100 to-orange-200 p-6 rounded-2xl shadow-xl hover:scale-105 transform transition-all duration-300 text-black">
          <h2 className="text-2xl font-semibold mb-3">
            <span className="text-orange-600">Safyr</span> for Microsoft Dynamics 365 Metadata
          </h2>
          <p className="text-gray-800 mb-4 overflow-hidden text-ellipsis max-h-[150px]">
            <span className="text-orange-600 font-medium">Safyr</span> for Microsoft Dynamics 365 Metadata is a powerful metadata tool, which allows you to
            download metadata as a .mdb file. The data is directly extracted from your Dataverse instance,
            containing components like tables, columns, keys, option sets, and relationships. You can
            expand any table and find primary keys, foreign keys, logical names, schema names, and more.
            It's great for speeding up discovery for projects like data catalog, governance, integration, etc.
          </p>
          <button cursor="pointer"
            className="mt-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-xl hover:bg-orange-800 transition duration-200 transform hover:scale-105"
            onClick={() => window.open('https://www.silwoodtechnology.com/safyr-for-microsoft', '_blank')}
          >
            Go to Silwood Technology Website
          </button>
        </div>
      </div>

      {/* Iframe Section Below Descriptions */}
      <div className="w-full p-4 md:p-10 mb-20">
        <iframe
          src="https://www.youtube.com/embed/WGOKc2VnODY"
          title="Product Preview"
          className="w-full h-[300px] md:h-[400px] rounded-lg shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
