import errorIcon from "../assets/images/error.svg";
import XIcon from "../assets/images/x.svg";

const ErrorCard = ({ message, onErrorClose }) => {
  const closeError = (message) => {
    onErrorClose(message);
    console.log(message, "messages");
    
  };
  return (
    <div className="w-[350px]  border-[1px] border-solid bg-white border-opacity-10 shadow-black opacity-15 mt-[20px] rounded-[8px]">
      <div className="flex py-[8px] px-[12px] justify-between">
        <div className="flex">
          <img src={errorIcon} />
          <p className="text-[#DC3545] text-[14px] ml-[8px] w-[200px]">
            Error
          </p>
        </div>
        <img src={XIcon} onClick={() => closeError(message)} className="self-end cursor-pointer" />
      </div>
      <div className="w-[350px] h-[0.5px] bg-black opacity-10"></div>
      <p className="text-[#212529] py-[12px] px-[12px]">
        {message}
      </p>
    </div>
  );
};

export default ErrorCard;
