import mail from "../assets/mail-01.svg";
import herocomet from "../assets/herocomet.svg";
import herocomet2 from "../assets/herocomet-2.svg";
import herocomet3 from "../assets/homecomet-3.svg";
import herocomet4 from "../assets/homecomet-4.svg";
import Planet from "../assets/Planet.svg";
import Planet2 from "../assets/homeplanet-2.svg";
import Star from "../assets/Star.svg";
import Orbit from "../assets/Orbit.svg";
import blur from "../assets/Blurhero.png";
import Planet3 from "../assets/homeplanet-4.svg";
import Planet4 from "../assets/homeplanet-3.svg";

function Hero() {
  return (
    <main className="flex px-[64px] max-md:flex-col max-lg:px-[40px] max-md:px-[20px] justify-center gap-[80px] max-lg:gap-[48px] max-sm:gap-[32px] overflow-x-hidden relative pt-[64px] max-sm:pt-[40px] max-sm:pb-[64px] pb-[80px]">
      <img
        src={herocomet}
        className="absolute z-[1] left-0 top-[-40px]"
        alt=""
      />
      <img src={blur} className="absolute z-[1] right-0 bottom-[0px]" alt="" />
      <img
        src={herocomet4}
        className="absolute z-[1] right-0 bottom-[0px]"
        alt=""
      />
      <img
        src={herocomet2}
        className="absolute z-[2] left-0 bottom-[0px]"
        alt=""
      />
      <img
        src={herocomet3}
        className="absolute z-[2] ml-[30px] bottom-[0]"
        alt=""
      />
      <img
        src={Planet}
        className="absolute z-[1] ml-[271px] mt-[10px]"
        alt=""
      />
      <img
        src={Planet2}
        className="absolute z-[1] top-[100px] left-[187px]"
        alt=""
      />
      <img
        src={Planet3}
        className="absolute z-[1] top-[14px] left-[17px]"
        alt=""
      />
      <img
        src={Planet4}
        className="absolute z-[1] top-[76px] right-[117px]"
        alt=""
      />
      <img
        src={Star}
        className="absolute z-[1] left-[96px] bottom-[8.26px]"
        alt=""
      />
      <img
        src={Orbit}
        className="absolute z-[1] left-[96px] bottom-[8.26px]"
        alt=""
      />
      <div className="gradient-hero"></div>
      <div className="w-[480px] max-md:w-full relative z-[10] mt-[56px]">
        <h1 className="text-[48px] max-lg:text-[40px] max-sm:text-[32px] leading-[106%] font-[600] text-[#fafaff]">
          Join the CometChat partner universe{" "}
        </h1>
        <p className="text-[22px] max-sm:text-[18px] mt-[20px] max-sm:mt-[12px] leading-[120%] font-[500] text-[#fafaff] tracking-[1.2px] max-sm:tracking-[0.8px] opacity-[0.74]">
          Create value for your clients, leveraging our world-class technology.
          Partner with us and grow your business!
        </p>
      </div>
      <form
        className="w-[528px] relative max-md:w-full z-[10] rounded-[24px] border-[1px] p-[32px] max-sm:p-[20px] border-[#FAFAFF0A] bg-[#FAFAFF14] backdrop-blur-[100px]"
        action=""
      >
        <h1 className="text-[32px] max-sm:text-[22px] max-sm:mb-[24px] leading-[106%] font-[600] text-[#fafaff] mb-[32px]">
          Became a partner
        </h1>
        <label
          htmlFor=""
          className="font-[640] text-[16px] leading-[112%] tracking-[1px] text-[#fafaff] opacity-[0.74]"
        >
          Full name
        </label>
        <input
          type="text"
          placeholder="Type your name here..."
          className="h-[44px] rounded-[14px] mb-[16px] border-[1px] py-[13px] px-[16px] bg-[#FAFAFF05] border-[#FAFAFF1A] text-[16px] leading-[112%] tracking-[1.2px] font-[640] text-[#fafaff] placeholder:text-[#fafaffA1] w-full mt-[6px]"
        />
        <label
          htmlFor=""
          className="font-[640] relative text-[16px] leading-[112%] tracking-[1px] opacity-[0.74] text-[#fafaff]"
        >
          Email address
          <img src={mail} className="absolute left-[16px] top-[43px]" alt="" />
        </label>
        <input
          type="email"
          placeholder="Type your email here..."
          className="h-[44px] rounded-[14px] mb-[16px] border-[1px] pl-[40px] pr-[13px] px-[16px] bg-[#FAFAFF05] border-[#FAFAFF1A] text-[16px] leading-[112%] tracking-[1.2px] font-[640] text-[#fafaff] placeholder:text-[#fafaffA1] w-full mt-[6px]"
        />
        <label
          htmlFor=""
          className="font-[640] text-[16px] leading-[112%] tracking-[1px] text-[#fafaff] opacity-[0.74]"
        >
          Companies name
        </label>
        <input
          type="text"
          placeholder="Type you company’s name"
          className="h-[44px] rounded-[14px] mb-[24px] border-[1px] py-[13px] px-[16px] bg-[#FAFAFF05] border-[#FAFAFF1A] text-[16px] leading-[112%] tracking-[1.2px] font-[640] text-[#fafaff] placeholder:text-[#fafaffA1] w-full mt-[6px]"
        />
        <button className="bg-[#6852D6] py-[12px] px-[16px] rounded-[10px] text-[#FCFCFE] font-[satoshi] cursor-pointer tracking-[0.59px] leading-[140%] text-[14px] font-[600] overflow-hidden relative">
          <div className="w-[32px] h-[32px] opacity-80 bg-[#FCFCFE] blur-[15px] left-[36.49px] top-[-18.3px] cursor-pointer -rotate-x-145 absolute"></div>
          Submit application
        </button>
      </form>
    </main>
  );
}
export default Hero;
