import Logo from "../assets/Logo.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";
import plus from "../assets/plus.svg";
import { useState } from "react";
function Footer() {
  const [active, setActive] = useState("");

  return (
    <footer className="pt-[56px] max-lg:px-[40px] max-md:px-[20px] max-sm:py-[24px] pb-[40px] px-[64px]">
      <img
        src={Logo}
        width={167.45}
        className="max-sm:w-[103px] max-sm:h-[16px]"
        height={26}
        alt=""
      />
      <div className="mt-[56px] max-sm:mt-[32px] max-lg:gap-[24px] max-[800px]:flex-col flex gap-[80px]">
        <div
          className={`${
            active === "platform"
              ? "max-[800px]:h-auto transition-all"
              : "max-[800px]:h-[18px] transition-all"
          } w-[268px] max-[800px]:w-full max-[800px]:overflow-hidden`}
        >
          <div
            onClick={() =>
              active === "platform" ? setActive("") : setActive("platform")
            }
            className="flex items-center justify-between"
          >
            <p className="text-[#6852D6] text-[16px] mb-[16px] font-[600] leading-[112%] tracking-[0.5%]">
              Platform
            </p>

            <img
              src={plus}
              className={`${
                active === "platform" ? "rotate-[45deg]" : ""
              } transition-all hidden max-[800px]:block mb-[16px]`}
              alt=""
            />
          </div>
          <p className="opacity-[0.54] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff]">
            Features
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Chat & Messaging
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Voice & Video Calls
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Security & Compliance
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Extensions
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Features at a glance
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Webhooks & Bots
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Moderation
          </p>
          <p className="opacity-[0.84] font-[600] mb-[32px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff]">
            Analytics & Insights
          </p>
          <p className="opacity-[0.54] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff]">
            Implementation
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Widgets
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            UI Kits
          </p>
          <p className="opacity-[0.84] font-[600] mb-[32px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff]">
            SDKs & APIs
          </p>
          <p className="opacity-[0.54] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff]">
            Technologies
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            React Chat SDK & API
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Angular Chat SDK & API
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Vue Chat SDK & API
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            IOS Swift Chat SDK & API
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Android Kotlin Chat SDK & API
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Android Java Chat SDK & API
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            React Native Chat SDK & API
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Ionic/Capacitor Chat SDK & API
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            WordPress Chat SDK & API
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Lavarel/PHP Chat SDK & API
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Flutter Chat SDK & API
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Next.js Chat SDK & API
          </p>
        </div>
        <div
          className={`${
            active === "solution"
              ? "max-[800px]:h-auto transition-all"
              : "max-[800px]:h-[18px] transition-all"
          } w-[268px] max-[800px]:w-full max-[800px]:overflow-hidden`}
        >
          <div
            onClick={() =>
              active === "solution" ? setActive("") : setActive("solution")
            }
            className="flex items-center justify-between"
          >
            {" "}
            <p className="text-[#6852D6] text-[16px] mb-[16px] font-[600] leading-[112%] tracking-[0.5%]">
              Solutions
            </p>
            <img
              src={plus}
              className={`${
                active === "solution" ? "rotate-[45deg]" : ""
              } transition-all hidden max-[800px]:block mb-[16px]`}
              alt=""
            />
          </div>
          <p className="opacity-[0.54] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff]">
            By Use cases
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Social Community
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Marketplace
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Healthcare
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Education
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Virtual Events
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            On-Demand Service
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Dating Apps
          </p>
          <p className="opacity-[0.84] font-[600] mb-[32px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff]">
            Gaming
          </p>
          <p className="opacity-[0.54] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff]">
            By Organization Type
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Enterprise
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Startups
          </p>
        </div>
        <div
          className={`${
            active === "developer"
              ? "max-[800px]:h-auto transition-all"
              : "max-[800px]:h-[18px] transition-all"
          } w-[268px] max-[800px]:w-full max-[800px]:overflow-hidden`}
        >
          <div
            onClick={() =>
              active === "developer" ? setActive("") : setActive("developer")
            }
            className="flex items-center justify-between"
          >
            <p className="text-[#6852D6] text-[16px] mb-[16px] font-[600] leading-[112%] tracking-[0.5%]">
              Developers
            </p>
            <img
              src={plus}
              className={`${
                active === "developer" ? "rotate-[45deg]" : ""
              } transition-all hidden max-[800px]:block mb-[16px]`}
              alt=""
            />
          </div>
          <p className="opacity-[0.54] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff]">
            Technologies documentation
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            React
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Angular{" "}
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Vue
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            IOS Swift
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Android Kotlin
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Android Java
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            React Native
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Ionic/Capacitor
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            WordPress
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Lavarel/PHP
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Flutter
          </p>
          <p className="opacity-[0.84] font-[600] mb-[32px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff]">
            Next.js
          </p>
          <p className="opacity-[0.54] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff]">
            Documentation
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Documentation
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Product updates
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Tutorials
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Open-source Apps
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Product status
          </p>
          <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Glossary
          </p>
        </div>
        <div className="w-[268px] max-[800px]:w-full flex flex-col max-[800px]:gap-[24px]">
          <div
            className={`${
              active === "resources"
                ? "max-[800px]:h-auto transition-all"
                : "max-[800px]:h-[18px] transition-all"
            } max-[800px]:overflow-hidden`}
          >
            <div
              onClick={() =>
                active === "resources" ? setActive("") : setActive("resources")
              }
              className="flex items-center justify-between"
            >
              <p className="text-[#6852D6] text-[16px] mb-[16px] font-[600] leading-[112%] tracking-[0.5%]">
                Resources
              </p>
              <img
                src={plus}
                className={`${
                  active === "resources" ? "rotate-[45deg]" : ""
                } transition-all hidden max-[800px]:block mb-[16px]`}
                alt=""
              />
            </div>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              Customer stories
            </p>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              Blog
            </p>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              Give feedback
            </p>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              Community forum
            </p>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              Help center
            </p>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              Features at a glance
            </p>
            <p className="opacity-[0.84] font-[600] mb-[32px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff]">
              Partners
            </p>
          </div>
          <div
            className={`${
              active === "competitors"
                ? "max-[800px]:h-auto transition-all"
                : "max-[800px]:h-[18px] transition-all"
            } max-[800px]:overflow-hidden`}
          >
            <div
              onClick={() =>
                active === "competitors"
                  ? setActive("")
                  : setActive("competitors")
              }
              className="flex items-center justify-between"
            >
              <p className="text-[#6852D6] text-[16px] mb-[16px] font-[600] leading-[112%] tracking-[0.5%]">
                Competitors
              </p>
              <img
                src={plus}
                className={`${
                  active === "competitors" ? "rotate-[45deg]" : ""
                } transition-all hidden max-[800px]:block mb-[16px]`}
                alt=""
              />
            </div>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              SendBird
            </p>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              GetStream
            </p>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              Applozic
            </p>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              Twilio
            </p>
            <p className="opacity-[0.84] font-[600] mb-[32px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff]">
              PubNub
            </p>
          </div>
          <div
            className={`${
              active === "company"
                ? "max-[800px]:h-auto transition-all"
                : "max-[800px]:h-[18px] transition-all"
            } max-[800px]:overflow-hidden`}
          >
            <div
              onClick={() =>
                active === "company" ? setActive("") : setActive("company")
              }
              className="flex items-center justify-between"
            >
              <p className="text-[#6852D6] text-[16px] mb-[16px] font-[600] leading-[112%] tracking-[0.5%]">
                Company
              </p>
              <img
                src={plus}
                className={`${
                  active === "company" ? "rotate-[45deg]" : ""
                } transition-all hidden max-[800px]:block mb-[16px]`}
                alt=""
              />
            </div>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              About us
            </p>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              Careers
            </p>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              Partners
            </p>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              Pricing
            </p>
            <p className="opacity-[0.84] font-[600] mb-[16px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
              Chat with us
            </p>
          </div>
        </div>
      </div>
      <div className="footer-line my-[40px] max-sm:my-[24px]"></div>
      <div className="flex justify-between max-lg:flex-col-reverse max-lg:items-start items-center h-[20px] max-lg:h-auto max-lg:gap-[24px]">
        <div className="flex gap-[22px] max-[400px]:flex-wrap max-sm:gap-[16px]">
          <p className="opacity-[0.74] font-[600] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            2023 © CometChat
          </p>
          <p className="opacity-[0.74] font-[600] ml-[2px] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Terms of Use
          </p>
          <p className="opacity-[0.74] font-[600] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            Privacy Policy
          </p>
        </div>
        <div className="flex gap-[24px] max-sm:flex-wrap max-sm:gap-x-[24px] max-sm:gap-y-[12px]">
          <p className="opacity-[0.84] flex gap-[4px] items-center font-[600] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            <img src={facebook} width={16} alt="" />
            Facebook
          </p>
          <p className="opacity-[0.84] flex gap-[4px] items-center font-[600] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            <img src={linkedin} width={16} alt="" />
            LinkedIn
          </p>
          <p className="opacity-[0.84] flex gap-[4px] items-center font-[600] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            <img src={instagram} width={16} alt="" />
            Instagram
          </p>
          <p className="opacity-[0.84] flex gap-[4px] items-center font-[600] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            <img src={twitter} width={16} alt="" />
            Twitter
          </p>
          <p className="opacity-[0.84] flex gap-[4px] items-center font-[600] text-[14px] leading-[140%] tracking-[1px] text-[#fafaff] hover:opacity-100 cursor-pointer">
            <img src={github} width={16} alt="" />
            GitHub
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
