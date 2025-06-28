import icon1 from "../assets/icon (9).svg";
import icon2 from "../assets/icon (10).svg";
import icon3 from "../assets/icon (11).svg";

function Programs() {
  return (
    <section className="px-[64px] max-lg:px-[40px] max-md:px-[20px] max-sm:py-[48px] bg-[#fafaff] pt-[100px] pb-[80px]">
      <p className="text-[#6852d6] text-[22px] max-sm:text-[18px] font-[600] max-sm:mb-[8px] leading-[106%] mb-[12px]">
        Our programs
      </p>
      <h1 className="font-[600] leading-[106%] text-[48px] text-[#14131d] w-[528px] max-md:w-full mb-[112px] max-md:mb-[64px] max-lg:text-[40px] max-sm:text-[32px]">
        Types of partnerships programs
      </h1>
      <div className="flex flex-wrap gap-[64px] max-sm:gap-[48px]">
        <div className="w-[394.67px] max-[1440px]:w-[28%] max-lg:w-[45%] max-md:w-full">
          <img src={icon1} alt="" />
          <h1 className="mt-[12px] mb-[4px] text-[#14131d] leading-[112%] text-[18px] font-[640] max-sm:mt-[8px] max-sm:text-[16px]">
            Affiliate partner program
          </h1>
          <p className="text-[#14131d] leading-[120%] text-[18px] font-[500] opacity-[0.74] tracking-[1.2px] max-sm:text-[16px] max-sm:tracking-[0.8px]">
            Bring value to your customers with a world-class in-app messaging
            tool that increases user-to-user engagement and retention. Get
            incentivized for referring CometChat to any of your customers.{" "}
          </p>
        </div>
        <div className="w-[394.67px] max-[1440px]:w-[28%] max-lg:w-[45%] max-md:w-full">
          <img src={icon2} alt="" />
          <h1 className="mt-[12px] mb-[4px] text-[#14131d] leading-[112%] text-[18px] font-[640] max-sm:mt-[8px] max-sm:text-[16px]">
            Technology partner program
          </h1>
          <p className="text-[#14131d] leading-[120%] text-[18px] font-[500] opacity-[0.74] tracking-[1.2px] max-sm:text-[16px] max-sm:tracking-[0.8px]">
            Development teams can use our plug and play solution to build top
            class chat solutions for their clients using our SDKs and APIs. It’s
            simple, safe and secure!{" "}
          </p>
        </div>
        <div className="w-[394.67px] max-[1440px]:w-[28%] max-lg:w-[45%] max-md:w-full">
          <img src={icon3} alt="" />
          <h1 className="mt-[12px] mb-[4px] text-[#14131d] leading-[112%] text-[18px] font-[640] max-sm:mt-[8px] max-sm:text-[16px]">
            Start up growth program
          </h1>
          <p className="text-[#14131d] leading-[120%] text-[18px] font-[500] opacity-[0.74] tracking-[1.2px] max-sm:text-[16px] max-sm:tracking-[0.8px]">
            We help incubators, accelerators, co-working space that foster an
            ecosystem of start-ups. This program also enables VCs to accelerate
            the growth of their portfolio companies.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
export default Programs;
