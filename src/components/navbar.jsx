import React from "react";
import Logo from "../assets/Logo.svg";
import moon from "../assets/moon-01.svg";

function Navbar() {
  return (
    <nav className="px-[32px] z-[9] py-[16px] max-md:px-[16px] flex items-center max-[900px]:px-[24px]  relative w-full justify-between">
      <img
        src={Logo}
        className="max-[900px]:w-[90.17px] max-[900px]:h-[14px]"
        width={128.81}
        height={20}
        alt=""
      />
      <ul className="w-[500px] max-md:hidden items-center h-[20px] max-lg:gap-[24px] max-lg:w-auto flex gap-[48px]">
        <li className="text-[#FAFAFF] hover:text-[#6852D6] cursor-pointer font-[satoshi] opacity-[0.84] tracking-[1.4px] leading-[140%] text-[14px] font-[600]">
          Platform
        </li>
        <li className="text-[#FAFAFF] hover:text-[#6852D6] cursor-pointer font-[satoshi] opacity-[0.84] tracking-[1.4px] leading-[140%] text-[14px] font-[600]">
          Solutions
        </li>
        <li className="text-[#FAFAFF] hover:text-[#6852D6] cursor-pointer font-[satoshi] opacity-[0.84] tracking-[1.4px] leading-[140%] text-[14px] font-[600]">
          Developers
        </li>
        <li className="text-[#FAFAFF] hover:text-[#6852D6] cursor-pointer font-[satoshi] opacity-[0.84] tracking-[1.4px] leading-[140%] text-[14px] font-[600]">
          Resources
        </li>
        <li className="text-[#FAFAFF] max-[900px]:hidden hover:text-[#6852D6] cursor-pointer font-[satoshi] opacity-[0.84] tracking-[1.4px] leading-[140%] text-[14px] font-[600]">
          Pricing
        </li>
      </ul>
      <div className="flex items-center gap-[16px]">
        <p className="text-[#FAFAFF] hover:text-[#6852D6] font-[satoshi] tracking-[1.4px] leading-[140%] cursor-pointer text-[14px] font-[600]">
          Log in
        </p>
        <button className="bg-[#6852D6] max-sm:hidden py-[8px] px-[12px] rounded-[10px] text-[#FCFCFE] font-[satoshi] cursor-pointer tracking-[0.59px] leading-[140%] text-[14px] font-[600] overflow-hidden relative">
          <div className="w-[32px] h-[32px] opacity-80 bg-[#FCFCFE] blur-[15px] left-[36.49px] top-[-18.3px] cursor-pointer -rotate-x-145 absolute"></div>
          Schedule a demo
        </button>
        <div className="hidden max-sm:block w-[40px] h-[36px] rounded-[10px] border-[1px] px-[12px] py-[10px] bg-[#FAFAFF05] border-[#FAFAFF1A]">
          <img src={moon} alt="" width={16} height={16}/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
