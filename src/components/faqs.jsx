import arrow from "../assets/arrow.svg";
import { useState } from "react";

function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "This is a frequently asked question?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
    },
    {
      question: "This is a frequently asked question?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
    },
    {
      question:
        "This is a very long frequently asked question about our services with more than one line?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
    },
    {
      question: "This is a frequently asked question?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
    },
    {
      question: "This is a question?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
    },
    {
      question: "This is a question?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fafaff] max-lg:px-[40px] max-md:px-[20px] overflow-x-hidden relative py-[100px] relative flex max-sm:py-[48px] max-sm:gap-[40px] gap-[64px] justify-center items-center flex-col z-[5]">
      <div className="w-[528px] max-md:w-full">
        <h1 className="mb-[12px] max-sm:text-left text-[#ff7129] text-[22px] max-sm:text-[18px] max-sm:mb-[8px] leading-[106%] text-center font-[640]">
          FAQ's
        </h1>
        <h1 className="text-center text-[#14131D] max-sm:text-left max-lg:text-[40px] max-sm:text-[32px] font-[640] text-[48px] leading-[106%]">
          We want to help you with all your doubts{" "}
        </h1>
      </div>
      <div className="faqscolor"></div>
      <div className="faqscolor2"></div>
      <div className="w-[751px] max-[900px]:w-full flex flex-col gap-[10px] max-sm:gap-[16px]">
        {faqData.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="backdrop-blur-[40px] cursor-pointer bg-[#14131D05] p-[24px] rounded-[20px] border-[1px] border-[#14131D0A]"
          >
            <div className="flex justify-between items-center">
              <h1
                className={`${
                  openIndex === index ? "opacity-100" : "opacity-[0.74]"
                } transition-all text-[#14131D] text-[22px] max-sm:text-[18px] font-[640] max-sm:mb-[12px] leading-[106%] mb-[8px]`}
              >
                {faq.question}
              </h1>
              {openIndex === index ? (
                <img src={arrow} className="rotate-[180deg]" alt="" />
              ) : (
                <img src={arrow} alt="" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              <p className="text-[#14131D] opacity-[0.74] font-[500] text-[22px] max-sm:text-[18px] max-sm:text-[0.8px] leading-[120%] tracking-[0.11px]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Faqs;
