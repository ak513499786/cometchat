import aws from "../assets/aws.svg";
import x10 from "../assets/10x.svg";
import microsoft from "../assets/microsoft 1.svg";
import nasscom from "../assets/path2.svg";
import tech from "../assets/Logo (2).svg";
import tekno from "../assets/Tekno.svg";
import cisco from "../assets/Logo (3).svg";
import home from "../assets/homemainlogo.svg";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Linear } from "gsap";

function Clients() {
  const clients = useRef(null);
  useEffect(() => {
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        clients.current,
        { x: 0 },
        { ease: Linear.easeNone, x: "-1360px", duration: 10 }
      );
  }, []);
  return (
    <section className="pt-[64px] max-sm:pt-[40px] max-sm:pb-[48px] relative overflow-hidden pb-[80px]">
      <div className="absolute w-[100%] h-[102px] z-2 top-[35px] client-grad"></div>
      <div ref={clients} className="relative z-1  flex gap-[64px]">
        <img src={aws} className="ml-[64px]" alt="" />
        <img src={x10} alt="" />
        <img src={microsoft} alt="" />
        <img src={nasscom} alt="" />
        <img src={tech} alt="" />
        <img src={tekno} alt="" />
        <img src={cisco} alt="" />
        <img src={home} alt="" />
        <img src={aws} className="" alt="" />
        <img src={x10} alt="" />
        <img src={microsoft} alt="" />
        <img src={nasscom} alt="" />
        <img src={tech} alt="" />
        <img src={tekno} alt="" />
        <img src={cisco} alt="" />
        <img src={home} alt="" />
        <img src={aws} className="" alt="" />
        <img src={x10} alt="" />
        <img src={microsoft} alt="" />
        <img src={nasscom} alt="" />
        <img src={tech} alt="" />
        <img src={tekno} alt="" />
        <img src={cisco} alt="" />
        <img src={home} alt="" />
      </div>
    </section>
  );
}

export default Clients;
