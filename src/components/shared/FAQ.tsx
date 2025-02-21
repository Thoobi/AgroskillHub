import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
const faqs = [
  {
    id: 1,
    question: "What is AgroSkill Hub?",
    answer:
      "AgroSkill Hub is a multilingual platform designed to provide accessible learning content. It aims to bridge knowledge gaps in agriculture and empower individuals with practical skills. Our goal is to make education engaging and relevant for local communities.",
  },
  {
    id: 2,
    question: "How to get started with AgroSkill Hub?",
    answer:
      "To get started, simply create an account on our website. Once registered, you can explore various courses and resources tailored to your needs. Don't forget to check out our community features for peer interaction!",
  },
  {
    id: 3,
    question: "Is it a multilingual platform?",
    answer:
      "Yes, AgroSkill Hub supports multiple languages to ensure accessibility for everyone. Our content is translated and localized to meet the needs of diverse communities. This feature helps overcome language barriers and promotes inclusive learning.",
  },
  {
    id: 4,
    question: "What are the features?",
    answer:
      "Our platform includes interactive tools, multimedia content, and gamified learning experiences. These features are designed to enhance engagement and knowledge retention. Additionally, we offer offline access for users in low-bandwidth areas.",
  },
  {
    id: 5,
    question: "How can I provide feedback",
    answer:
      "We value your input! You can provide feedback through our dedicated feedback forms available on the platform. Your suggestions help us improve and tailor our offerings to better serve you.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(false);
  const [activeId, setActiveId] = useState();
  const toggleAccordion2 = (id: number) => {
    if (active && activeId === id) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  return (
    <section className="bg-[#F6FBFF] py-20 px-16 font-roboto w-full">
      <div className="flex gap-20">
        <div className="flex flex-col gap-8 w-[500px]">
          <div className="flex gap-6 flex-col">
            <h3 className="text-5xl font-bold">FAQs</h3>
            <p className="text-lg">
              Find answers to your questions about AgroSkill Hub and how to get
              started.
            </p>
          </div>
          <button className="w-[453px] h-[51px] border-[1px] border-buttonprimary rounded-2xl">
            Contact Us
          </button>
        </div>
        <div className=" w-full cursor-pointer border-y-[1px] border-y-[#000000]">
          {faqs.map((faq, id) => (
            <div key={id} className="flex flex-col gap-4 w-full py-6">
              <span
                className="flex w-full justify-between items-center "
                onClick={() => {
                  toggleAccordion2(id);
                  setActiveId(faq.id);
                }}
              >
                <h5 className="text-base font-bold">{faq.question}</h5>
                {active && activeId === faq.id ? (
                  <MdKeyboardArrowUp
                    size={32}
                    className={`${
                      active && activeId ? "-rotate-180" : "rotate-0"
                    } `}
                  />
                ) : (
                  <MdKeyboardArrowUp size={32} />
                )}
              </span>
              {active && activeId === faq.id ? (
                <p className="text-base text-[#000000]">{faq.answer}</p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
