import logo from "../assets/images/logo.svg";
import mainImage from "../assets/images/board.png";
import rocketSvg from "../assets/images/rocket.svg";



const SuccessPage = () => {
    return (
        <div className="flex relative">

      <section className="inline-block relative">
        <div className="h-[84px] bg-[#7025FB]  w-[923px]">
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
      <div className="w-[960px] flex justify-center flex-col items-center ">
        <img src={rocketSvg}  />
        <p className="font-nunito font-extrabold text-[36px]">Onboarding completed!</p>
      </div>
    </div>
    );
}
 
export default SuccessPage;