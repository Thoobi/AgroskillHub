import { useState, useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSection = (index: number): void => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      title: "1. Introduction",
      content:
        'Welcome to MastaSkillz ("we," "our," or "the Platform"). By accessing or using our CV analysis and improvement services, you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully before using our Platform.',
    },
    {
      title: "2. Services Description",
      content: (
        <div>
          <p>MastaSkillz provides the following services:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>CV/Resume analysis and critique</li>
            <li>Personalized suggestions for CV improvement</li>
            <li>CV templates for download</li>
            <li>Related career development resources</li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. User Eligibility",
      content: (
        <div>
          <p>By using our Platform, you represent and warrant that:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>You are at least 18 years of age</li>
            <li>
              You are a resident of Nigeria or are subject to Nigerian laws
            </li>
            <li>
              You possess the legal capacity to enter into binding agreements
            </li>
            <li>
              You will use the Platform in accordance with these Terms and
              applicable Nigerian laws
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. User Accounts",
      content: (
        <div className="space-y-2">
          <p>
            4.1. Registration may be required to access certain features of our
            Platform. You agree to provide accurate, current, and complete
            information during the registration process.
          </p>
          <p>
            4.2. You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
          </p>
          <p>
            4.3. You must notify us immediately of any unauthorized use of your
            account or other security breaches.
          </p>
        </div>
      ),
    },
    {
      title: "5. User Conduct",
      content: (
        <div>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Use the Platform for any illegal purpose or in violation of any
              Nigerian laws
            </li>
            <li>
              Upload content that infringes on intellectual property rights
            </li>
            <li>Submit false or misleading information in your CV</li>
            <li>
              Attempt to gain unauthorized access to the Platform or other
              users' accounts
            </li>
            <li>
              Upload malicious code or attempt to harm the Platform's
              functionality
            </li>
            <li>
              Share confidential information of previous or current employers
              that you are not authorized to disclose
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "6. Intellectual Property",
      content: (
        <div className="space-y-2">
          <p>
            6.1. Platform Content: All content provided on the Platform,
            including CV templates, analysis algorithms, and improvement
            suggestions, is owned by MastaSkillz and protected by Nigerian
            copyright and intellectual property laws.
          </p>
          <p>
            6.2. User Content: You retain ownership of the CV and personal
            information you submit. By uploading your CV, you grant us a
            non-exclusive, worldwide, royalty-free license to use, reproduce,
            and process your CV solely for the purpose of providing our services
            to you.
          </p>
        </div>
      ),
    },
    {
      title: "7. CV Templates",
      content: (
        <div className="space-y-2">
          <p>
            7.1. The CV templates available for download are for personal use
            only.
          </p>
          <p>
            7.2. You may not redistribute, sell, or represent the templates as
            your own creation.
          </p>
        </div>
      ),
    },
    {
      title: "8. Payment Terms",
      content: (
        <div className="space-y-2">
          <p>
            8.1. Currently, MastaSkillz offers its services free of charge.
            However, we reserve the right to introduce paid services in the
            future.
          </p>
          <p>
            8.2. Should paid services be introduced, all fees will be clearly
            displayed before purchase, and processed in Nigerian Naira (NGN)
            through our approved payment processors.
          </p>
          <p>
            8.3. Any future refund policies will be clearly stated on the
            payment page.
          </p>
        </div>
      ),
    },
    {
      title: "9. Disclaimer of Warranties",
      content: (
        <div className="space-y-2">
          <p>
            9.1. The Platform is provided on an "as is" and "as available" basis
            without warranties of any kind, either express or implied.
          </p>
          <p>
            9.2. MastaSkillz does not guarantee that using our CV analysis and
            improvement services will result in job offers or interviews.
          </p>
          <p>
            9.3. We do not warrant that our CV analysis is error-free or that it
            will identify all possible improvements.
          </p>
          <p>
            9.4. MastaSkillz does not guarantee continuous, uninterrupted, or
            secure access to our services.
          </p>
          <p>
            9.5. While we strive to provide accurate and helpful advice, all CV
            analysis, suggestions, and templates are provided for informational
            purposes only. The implementation of any suggestions is at your sole
            discretion and risk.
          </p>
        </div>
      ),
    },
    {
      title: "10. Limitation of Liability",
      content: (
        <div className="space-y-2">
          <p>
            10.1. To the maximum extent permitted by Nigerian law, MastaSkillz
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use of or
            inability to use the Platform.
          </p>
          <p>
            10.2. Our total liability for any claims related to these Terms or
            the Platform shall not exceed the amount you paid to us, if any, in
            the preceding six (6) months.
          </p>
          <p>
            10.3. MastaSkillz is not responsible for any employment decisions
            made by potential employers based on the CV you create using our
            Platform.
          </p>
        </div>
      ),
    },
    {
      title: "11. Indemnification",
      content:
        "You agree to indemnify, defend, and hold harmless MastaSkillz, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses arising out of your use of the Platform or violation of these Terms.",
    },
    {
      title: "12. Termination",
      content: (
        <div className="space-y-2">
          <p>
            12.1. We reserve the right to suspend or terminate your access to
            the Platform at any time, with or without cause and with or without
            notice.
          </p>
          <p>
            12.2. Upon termination, your right to use the Platform will
            immediately cease, but all provisions of these Terms that by their
            nature should survive termination shall survive.
          </p>
        </div>
      ),
    },
    {
      title: "13. Changes to Terms",
      content: (
        <div className="space-y-2">
          <p>
            13.1. We may modify these Terms at any time by posting the revised
            terms on the Platform.
          </p>
          <p>
            13.2. Your continued use of the Platform after such changes
            constitutes your acceptance of the new Terms.
          </p>
        </div>
      ),
    },
    {
      title: "14. Governing Law",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria without regard to its conflict of law provisions.",
    },
    {
      title: "15. Dispute Resolution",
      content:
        "Any dispute arising out of or relating to these Terms or the Platform shall be resolved exclusively through the courts in Nigeria.",
    },
    {
      title: "16. General Disclaimers",
      content: (
        <div className="space-y-2">
          <p>
            16.1. Career Outcomes: MastaSkillz does not guarantee employment,
            interviews, or career advancement as a result of using our services.
            Success in job applications depends on numerous factors beyond the
            quality of your CV.
          </p>
          <p>
            16.2. Professional Advice: Our Platform does not provide legal,
            financial, or professional career counseling. For personalized
            professional advice, consult with qualified professionals.
          </p>
          <p>
            16.3. Third-Party Content: Any third-party content, links, or
            resources available through our Platform are provided for
            convenience only. We are not responsible for the content, accuracy,
            or practices of third-party websites.
          </p>
          <p>
            16.4. User Responsibility: You are solely responsible for the
            accuracy and completeness of the information you provide in your CV.
            MastaSkillz does not verify the truthfulness of user-submitted
            information.
          </p>
        </div>
      ),
    },
    {
      title: "17. Contact Information",
      content:
        "For questions about these Terms, please contact us at mastaskillzhq@gmail.com.",
    },
  ];

  return (
    <section className="bg-gray-100 min-h-screen py-28 font-jarkata">
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg py-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">
          Terms of Service
        </h1>

        <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded">
          <p>
            Please read these Terms of Service carefully before using
            MastaSkillz services.
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

export default TermsOfService;
