export const metadata = {
  title: "Privacy Policy | Pascalcase",
  description: "Privacy Policy",
};


export default function Privacy() {
  return (
    <main className="bg-white text-gray-800 px-6 sm:px-12 lg:px-32 xl:px-48 py-16 mt-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <header>
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-base text-gray-500 mb-6">Effective date: November 22, 2019</p>
          <p className="text-lg text-gray-700">
            This page outlines our policies regarding the collection, use, and disclosure of personal data when you use our Service, as well as the choices you have associated with that data. We use your information to provide and improve the Service. By accessing or using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used herein have the same meanings as in our{" "}
            <a
              href="https://pascalcase.com/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>.
          </p>
        </header>

        {/** Sections */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">1. Information Collection and Use</h2>
          <p className="text-lg mb-3">
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Cookies and Usage Data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">2. Usage Data</h2>
          <p className="text-lg">
            We may also collect information on how the Service is accessed and used. This Usage Data may include your computer's IP address, browser type, pages visited, time and date, and other diagnostic data.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">3. Tracking & Cookies Data</h2>
          <p className="text-lg mb-3">
            We use cookies and similar tracking technologies to track activity on our Service and hold certain information.
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Session Cookies to operate our Service</li>
            <li>Preference Cookies to remember your settings</li>
            <li>Security Cookies for security purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">4. Use of Data</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes</li>
            <li>To provide support</li>
            <li>To gather analysis to improve the Service</li>
            <li>To monitor usage</li>
            <li>To detect and fix technical issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">5. Transfer of Data</h2>
          <p className="text-lg">
            Your information may be transferred to — and maintained on — systems located outside your state or country. By submitting data, you agree to the transfer.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">6. Disclosure of Data</h2>
          <h3 className="text-xl font-semibold mb-3">Legal Requirements</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>To comply with legal obligations</li>
            <li>To protect and defend our rights</li>
            <li>To prevent wrongdoing</li>
            <li>To ensure public/user safety</li>
            <li>To defend against liability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">7. Security of Data</h2>
          <p className="text-lg">
            While we strive to protect your data, no method is 100% secure. We use commercially acceptable means, but cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">8. Service Providers</h2>
          <p className="text-lg">
            We may employ third-party companies and individuals to facilitate our Service. These third parties only have access to your data to perform tasks on our behalf and are obligated not to disclose it.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">9. Links to Other Sites</h2>
          <p className="text-lg">
            Our Service may contain links to other sites. We strongly advise you to review the Privacy Policy of every site you visit. We assume no responsibility for the content or policies of any third-party sites.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">10. Children's Privacy</h2>
          <p className="text-lg">
            We do not knowingly collect personally identifiable information from anyone under 13. If you are a parent or guardian and you are aware your child has provided us with Personal Data, contact us.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
          <p className="text-lg">
            We may update our Privacy Policy from time to time. We will notify you by posting the new policy on this page and update the "Effective Date" at the top.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">12. Contact Us</h2>
          <p className="text-lg">
            If you have any questions about this Privacy Policy, you can contact us at:{" "}
            <a href="mailto:info@pascalcase.com" className="text-black-600 underline">
              info@pascalcase.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
