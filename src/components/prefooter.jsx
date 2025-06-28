import stars from "../assets/Stars.png";
import stars2 from "../assets/Stars.svg";
import commet from "../assets/comets.svg";
import group from "../assets/Group 1.svg";
import illustration from "../assets/illustration.png";
import blur from '../assets/blur.png';
function Prefooter() {
  return (
    <section className="relative overflow-hidden h-[480px] max-sm:pb-[70px] max-sm:h-auto max-lg:px-[40px] max-sm:justify-start max-md:px-[20px] flex justify-center">
      <img
        src={stars}
        className="absolute h-[803px] w-[95%] top-[-68px] left-[2.5%]"
        alt=""
      />
      <img
        src={stars2}
        className="absolute h-[803px] w-[95%] top-[-240px] left-[2.5%]"
        alt=""
      />
      <img src={commet} className="absolute right-0 bottom-[-150px]" alt="" />
      <img src={group} className="absolute left-0 top-[-270px] z-[2]" alt="" />
      <img
        src={illustration}
        className="absolute w-[2591.27px] h-[522.33px] top-[-185px]"
        alt=""
      />
      <img src={blur} className="w-[208px] max-sm:hidden rotate-[7deg] h-[199.84px] absolute top-[118.01px] left-[9.52px] z-[3]"/>
      <div className="w-[640px] max-md:w-full relative z-[3] h-[195px] mt-[140px] max-sm:mt-[100px]">
        <h1 className="text-[48px] max-lg:text-[40px] max-sm:text-[32px] max-sm:text-left leading-[106%] font-[600] text-center text-[#fafaff]">
          Get started for free
        </h1>
        <p className="font-[500] max-sm:text-left text-[22px] max-sm:text-[18px] leading-[120%] text-center px-[80px] max-sm:px-0 mt-[16px] max-sm:mt-[8px] text-[#fafaff] opacity-[0.74]">
          Build and test for as long as you need. Pick a plan when you’re ready.
        </p>
        <div className="flex gap-[12px] max-sm:justify-start justify-center max-sm:mt-[24px] mt-[32px]">
          <button className="w-[124px] h-[44px] rounded-[12px] border-[1px] tracking-[1.4px] bg-[#FAFAFF05] text-[14px] leading-[140%] font-[600] text-[#fafaff] border-[#FAFAFF1A]">
            Start free trial
          </button>
          <button className="bg-[#6852D6] py-[8px] px-[12px] rounded-[10px] text-[#FCFCFE] font-[satoshi] cursor-pointer tracking-[0.59px] leading-[140%] text-[14px] font-[600] overflow-hidden relative">
            <div className="w-[32px] h-[32px] opacity-80 bg-[#FCFCFE] blur-[15px] left-[36.49px] top-[-18.3px] cursor-pointer -rotate-x-145 absolute"></div>
            Schedule a demo
          </button>
        </div>
      </div>
    </section>
  );
}
export default Prefooter;
