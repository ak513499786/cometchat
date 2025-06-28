import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Prefooter from "./components/prefooter";
import Partner from "./components/partner";
import Faqs from "./components/faqs";
import Programs from "./components/programs";
import Clients from "./components/clients";
import Hero from "./components/hero";
import Mask from "./assets/mask.svg";
import texture from "./assets/Texture.svg";
import Stars from "./assets/homestars.svg";

function App() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Navbar />
        <div className="gradient-bg"></div>
        <img
          src={Mask}
          className="absolute max-[900px]:w-[794px] top-[-60px] w-full object-cover h-[715px] right-0"
          alt=""
        />

        <img
          src={Stars}
          className="absolute max-[1440px]:w-[1389px]  z-[1] left-[25px] h-[803px] top-[-68px]"
          alt=""
        />
        <img
          src={texture}
          className="absolute top-0 w-full h-[663px] left-0"
          alt=""
        />
        <Hero />
        <Clients />
      </div>
      <Partner />
      <Programs />
      <Faqs />
      <Prefooter />
      <Footer />
    </>
  );
}

export default App;
