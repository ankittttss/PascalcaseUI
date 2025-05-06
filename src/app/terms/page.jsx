export const metadata = {
  title: 'Terms of Service - Pascalcase',
  description: 'Terms of Service for Pascalcase, including Metadata Browser, Commission 365, and Flow Monitor.',
}


export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 mt-20">
      <h1 className="text-6xl font-semibold mb-8">Terms of Service</h1>

      <p className="mb-4">
        <strong>Effective Date:</strong> February 24, 2025
      </p>

      <p className="mb-6">
        Welcome to Pascalcase.com! These Terms of Service ("Terms") govern your use of our website and our suite of products and services,
        including Metadata Browser, Commission 365, Flow Monitor, and other tools built for Dynamics 365 and Power Platform (collectively,
        "Services"). By accessing or using our Services, you agree to these Terms. If you don't agree, please refrain from using our Services.
        We may update these Terms periodically, and changes will be posted here with an updated effective date.
      </p>

      <section className="mb-6">
        <h2 className="text-4xl font-semibold mb-2">1. Use of Services</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Pascalcase offers tools like Metadata Browser, Commission 365, and Flow Monitor for Dynamics 365 and Power Platform.</li>
          <li>Users must use services lawfully and maintain secure, accurate account information.</li>
          <li>Misuse may lead to suspension or termination of access.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl font-semibold mb-2">2. Orders and Payments</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Prices are in USD unless stated otherwise.</li>
          <li>Users are responsible for taxes or fees.</li>
          <li>Orders may be canceled for availability, pricing errors, or suspected fraud.</li>
          <li>Full refunds are available for cancellations after payment.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl font-semibold mb-2">3. Refund Policy</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Refunds are available within 14 days for unused products.</li>
          <li>Non-refundable: custom configurations, add-ons, third-party integrations unless defective.</li>
          <li>To request a refund, email support@pascalcase.com with order details. Processing takes 7–10 business days.</li>
          <li>Defective products can be reported within 7 days for a refund or replacement.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl font-semibold mb-2">4. Cancellation Policy</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Orders can be canceled at no cost if not activated.</li>
          <li>Post-activation, cancellations are not allowed (refer to refund policy).</li>
          <li>Subscription renewals can be canceled via account settings—effective after the billing cycle ends.</li>
          <li>Company may cancel orders due to issues or restrictions, providing full refunds.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl font-semibold mb-2">5. Intellectual Property</h2>
        <p>
          All content, including code, designs, and documentation, is owned by Pascalcase or its licensors. You may only use services for
          personal, non-commercial purposes unless written permission is granted.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl font-semibold mb-2">6. Limitation of Liability</h2>
        <p>
          Pascalcase’s liability is limited to the fullest extent permitted by law. They are not responsible for indirect, incidental, or
          consequential damages.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl font-semibold mb-2">7. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India, without regard to conflict of law principles. Disputes will be resolved in the courts
          of India.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-4xl font-semibold mb-2">8. Contact Us</h2>
        <p className="mb-2">
          Questions about these Terms, our Refund Policy, or Cancellation Policy? Reach out:
        </p>
        <p className="mb-1">Email: <a href="mailto:support@pascalcase.com" className="text-blue-600 hover:underline">support@pascalcase.com</a></p>
        <p className="mb-4">
          Address: Plot No. 3, Road No. 29, Alkapur Township, Neknampur, Gandipet, Hyderabad, Telangana, India - 500089.
        </p>
        <p>
          We're committed to helping you get the most out of Metadata Browser, Commission 365, Flow Monitor, and all our Services!
        </p>
      </section>

      <p className="text-sm text-center text-gray-500 mt-8">
        For full details, visit:{' '}
        <a href="https://pascalcase.com/Home/Terms" className="text-blue-600 hover:underline">
          https://pascalcase.com/Home/Terms
        </a>
      </p>
    </div>
  );
}
