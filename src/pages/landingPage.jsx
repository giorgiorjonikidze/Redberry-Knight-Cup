import logo from "../assets/images/logo.svg";
import mainImage from "../assets/images/landing.png";
import btnVector from "../assets/images/VectorButton.svg";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    const getStartedHandler = () => {
        navigate("/user")
    }
    
  return (
    <div className="flex">
      <section className="inline-block ">
        <div className="h-[84px] bg-[#7025FB] absolute z-30 w-[923px]">
          <img
            src={logo}
            className="w-[252px] pt-[30px] ml-[60px]"
            alt="redberry logo"
          />
        </div>
        <div className="w-[923px] ">
          <img src={mainImage} className="w-[923px] " alt="" />
        </div>
      </section>
      <section className="bg-[#FD5334] w-[997px] h-auto ">
        <div className="flex flex-col mt-[265px] ml-[85px]">
          <div className="flex items-center">
            <p className="font-extrabold font-nunito text-[80px] text-white uppercase mr-[26px]">
              chess says
            </p>
            <p className="font-bold font-nunito text-[20px] ">a lot about</p>
          </div>
          <p className="font-extrabold font-nunito text-[80px] text-white uppercase">
            who we are
          </p>
          <button onClick={getStartedHandler} className="w-[191px] h-[53px] bg-black mt-[102px] rounded-[8px] text-white text-[20px] font-sans hover:outline-[4px] hover:outline hover:outline-[#C2A5F9]">
            Get started
            <img className="ml-[12px] inline-block pb-[2px]" src={btnVector} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
