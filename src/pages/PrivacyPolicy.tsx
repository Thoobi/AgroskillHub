import { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      title: "1. Introduction",
      content:
        'Welcome to MastaSkillz ("we," "our," or "the Platform"). By accessing or using our CV analysis and improvement services, you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully before using our Platform.',
    },
    {
      title: "2. Information We Collect",
      content: (
        <div className="space-y-3">
          <p>We collect the following types of information:</p>

          <div>
            <h4 className="font-medium text-gray-800">
              2.1. Personal Information:
            </h4>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Full name</li>
              <li>Contact information (email address, phone number)</li>
              <li>Educational background</li>
              <li>Work experience</li>
              <li>Skills and qualifications</li>
              <li>Any other information you include in your CV/resume</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">
              2.2. Technical Information:
            </h4>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Usage data</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "3. How We Use Your Information",
      content: (
        <div className="space-y-3">
          <p>We use your information for the following purposes:</p>

          <div>
            <h4 className="font-medium text-gray-800">
              3.1. To provide our services:
            </h4>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Analyzing and critiquing your CV/resume</li>
              <li>Generating personalized improvement suggestions</li>
              <li>Providing CV templates</li>
              <li>Creating and maintaining your user account</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">
              3.2. To improve our Platform:
            </h4>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Enhancing our CV analysis algorithms</li>
              <li>Developing new features and services</li>
              <li>Troubleshooting technical issues</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">
              3.3. For communication:
            </h4>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Responding to your inquiries</li>
              <li>Sending service-related notifications</li>
              <li>Providing customer support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">
              3.4. For legal and security purposes:
            </h4>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Enforcing our Terms of Service</li>
              <li>Protecting against unauthorized access</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "4. Information Sharing and Disclosure",
      content: (
        <div className="space-y-2">
          <p>4.1. We do not sell your personal information to third parties.</p>

          <div>
            <p>4.2. We may share your information with:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                Service providers who assist us in delivering our services
              </li>
              <li>Legal authorities when required by law</li>
              <li>
                Professional advisors such as lawyers, auditors, and insurers
              </li>
            </ul>
          </div>

          <p>
            4.3. Any third parties with whom we share your data are
            contractually obligated to maintain the confidentiality and security
            of your personal information.
          </p>
        </div>
      ),
    },
    {
      title: "5. Data Retention",
      content: (
        <div className="space-y-2">
          <p>
            5.1. We retain your personal information only for as long as
            necessary to fulfill the purposes outlined in this Privacy Policy,
            unless a longer retention period is required or permitted by law.
          </p>
          <p>
            5.2. You may request the deletion of your account and associated
            personal information at any time.
          </p>
        </div>
      ),
    },
    {
      title: "6. Data Security",
      content: (
        <div className="space-y-2">
          <p>
            6.1. We implement appropriate technical and organizational measures
            to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
          <p>
            6.2. While we strive to use commercially acceptable means to protect
            your personal information, we cannot guarantee its absolute
            security.
          </p>
          <p>
            6.3. You acknowledge that no method of transmission over the
            internet or method of electronic storage is 100% secure, and we
            cannot guarantee the absolute security of your data.
          </p>
        </div>
      ),
    },
    {
      title: "7. Your Data Protection Rights",
      content: (
        <div className="space-y-2">
          <p>
            Under the Nigeria Data Protection Regulation (NDPR), you have the
            following rights:
          </p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Right to access personal data we hold about you</li>
            <li>Right to request correction of inaccurate personal data</li>
            <li>Right to request deletion of your personal data</li>
            <li>Right to withdraw consent</li>
            <li>Right to object to processing of your personal data</li>
            <li>Right to data portability</li>
            <li>
              Right to lodge a complaint with the National Information
              Technology Development Agency (NITDA)
            </li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us at
            mastaskillzhq@gmail.com.
          </p>
        </div>
      ),
    },
    {
      title: "8. Cookies and Similar Technologies",
      content: (
        <div className="space-y-2">
          <p>
            8.1. We use cookies and similar tracking technologies to collect
            information about your browsing activities on our Platform.
          </p>
          <p>
            8.2. You can instruct your browser to refuse all cookies or to
            indicate when a cookie is being sent. However, if you do not accept
            cookies, you may not be able to use some portions of our Platform.
          </p>
        </div>
      ),
    },
    {
      title: "9. Third-Party Links",
      content: (
        <div className="space-y-2">
          <p>
            9.1. Our Platform may contain links to third-party websites that are
            not operated by us. We have no control over and assume no
            responsibility for the content, privacy policies, or practices of
            any third-party websites or services.
          </p>
          <p>
            9.2. We strongly advise you to review the privacy policy of every
            site you visit.
          </p>
        </div>
      ),
    },
    {
      title: "10. Children's Privacy",
      content: (
        <div className="space-y-2">
          <p>
            10.1. Our Platform is not intended for individuals under the age of
            18. We do not knowingly collect personal information from children.
          </p>
          <p>
            10.2. If you are a parent or guardian and believe your child has
            provided us with personal information, please contact us at
            mastaskillzhq@gmail.com, and we will take steps to remove such
            information.
          </p>
        </div>
      ),
    },
    {
      title: "11. Changes to This Privacy Policy",
      content: (
        <div className="space-y-2">
          <p>
            11.1. We may update our Privacy Policy from time to time. We will
            notify you of any changes by posting the new Privacy Policy on this
            page.
          </p>
          <p>
            11.2. You are advised to review this Privacy Policy periodically for
            any changes.
          </p>
        </div>
      ),
    },
    {
      title: "12. Data Protection Officer",
      content:
        "Our Data Protection Officer can be contacted at mastaskillzhq@gmail.com.",
    },
    {
      title: "13. Privacy Disclaimers",
      content: (
        <div className="space-y-2">
          <p>
            13.1. Accuracy of Analysis: While we strive for accuracy in our CV
            analysis, we cannot guarantee that our automated systems will
            identify all issues or provide optimal suggestions for every
            situation.
          </p>
          <p>
            13.2. Data Processing Limitations: Our ability to protect your
            information is limited by the technology available and the
            unpredictable nature of security threats. We implement reasonable
            security measures but cannot guarantee against all potential
            vulnerabilities.
          </p>
          <p>
            13.3. Third-Party Services: We may use third-party services to help
            operate our Platform. These services may collect and process your
            information according to their own privacy policies, which may
            differ from ours.
          </p>
          <p>
            13.4. Information Accuracy: The quality of our CV analysis and
            suggestions depends on the accuracy of the information you provide.
            We are not responsible for inaccuracies resulting from incomplete or
            incorrect information.
          </p>
        </div>
      ),
    },
    {
      title: "14. Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please contact us at mastaskillzhq@gmail.com.",
    },
  ];

  return (
    <section className="bg-gray-100 min-h-screen py-28 font-jarkata">
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy
        </h1>

        <div className="mb-6 bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-4 py-3 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleSection(index)}
              >
                <span className="font-medium text-gray-800">
                  {section.title}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    activeSection === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {activeSection === index && (
                <div className="px-4 py-3 bg-white text-gray-700 border-t border-gray-200">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Last updated: March 13, 2025</p>
          <p className="mt-2">© 2025 MastaSkillz. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
