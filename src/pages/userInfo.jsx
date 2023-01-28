import logo from "../assets/images/logo.svg";
import mainImage from "../assets/images/unsplash_27LH_0jXKYI.png";
import btnVector from "../assets/images/VectorButton.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorsList from "../components/errorList";

const UserInfo = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = () => {
    console.log("form submited");
    // console.log((Object.keys(errors).length === 1) , "metia", errors);
  };

  const onError = () => {
    // console.log(errors.length == 0 , "metia", errors);
  };

  return (
    <div className="flex relative">
      {(Object.keys(errors).length !== 0) && <ErrorsList errors={errors} />}
      {/* <ErrorsList  /> */}
      
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
        <div className="absolute top-[280px] left-[132px]">
          <p className="font-extrabold uppercase font-italic text-[28px] leading-[55px] mb-[24px] w-[483px]">
            “When you see a good move, look for a better one.”
          </p>
          <p className="font-medium font-italic text-[24px] text-white">
            -Emanuel Lasker
          </p>
        </div>
      </section>
      <section className="border-box pl-[48px]">
        <p className="font-bold font-sans my-[30px] tracking-[1px]">
          Start Creating Your Account
        </p>
        <div className="bg-[#B9B4C3] h-[1px] w-screen"></div>

        {/* 1--2  */}
        <div className="mt-[60px]">
          <div className="flex items-center gap-[4px] ml-[53px] mb-[4px]">
            <div className="w-[40px] h-[40px] rounded-[8px] border-solid border-[1px] border-[#E5E6E8] text-[18px] font-sans font-bold flex justify-center">
              1
            </div>
            <div className="w-[174px] h-[1px] bg-[#B9B4C3] opacity-30"></div>
            <div className="w-[40px] h-[40px] rounded-[8px] border-solid border-[1px] border-[#E5E6E8] text-[18px] font-sans font-bold flex justify-center">
              2
            </div>
          </div>
          <div className="flex gap-[77px] font-sans">
            <p>Personal information</p>
            <p>Chess experience</p>
          </div>
        </div>
        {/* title  */}
        <div className="mt-[112px] mb-[85px]">
          <h1 className="font-semibold text-[32px] font-sans">
            Personal information
          </h1>
          <p className="font-sans font-semibold text-[14px] text-[#95939A]">
            This is basic informaton fields
          </p>
        </div>
        {/* font  */}
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col"
        >
          {/* name///////////////////////////////////////////////////////////////////////  */}
          <input
            {...register("name", { required: "name", pattern: /^[a-zA-Z]+$/ })}
            className={
              errors.name
                ? "w-[775px] h-[46px] mb-[40px] px-[16px] py-[8px] box-border rounded-[4px] border-b-[1px] broder-b-solid border-b-[#95939A] active:bg-[#E9ECEF] active:outline-none focus:bg-[#E9ECEF] focus:outline-none focus-visible:outline-none text-[#DC3545] bg-[#FFEFEF] border-none placeholder:text-[#DC3545]"
                : "w-[775px] h-[46px] mb-[40px] px-[16px] py-[8px] box-border rounded-[4px] border-b-[1px] broder-b-solid border-b-[#95939A] placeholder:text-black active:bg-[#E9ECEF] active:outline-none focus:bg-[#E9ECEF] focus:outline-none focus-visible:outline-none"
            }
            type="text"
            placeholder="Name *"
          />
          {/* emai/////////////////////////////////////////////////////////////////////////////  */}
          <input
            {...register("email", {
              required: "email",
              pattern: /^[a-zA-Z0-9._-]+@redberry.com$/,
            })}
            className={
              errors.email
                ? "w-[775px] h-[46px] mb-[40px] px-[16px] py-[8px] box-border rounded-[4px] border-b-[1px] broder-b-solid border-b-[#95939A] active:bg-[#E9ECEF] active:outline-none focus:bg-[#E9ECEF] focus:outline-none focus-visible:outline-none text-[#DC3545] bg-[#FFEFEF] border-none placeholder:text-[#DC3545]"
                : "w-[775px] h-[46px] mb-[40px] px-[16px] py-[8px] box-border rounded-[4px] border-b-[1px] broder-b-solid border-b-[#95939A] placeholder:text-black active:bg-[#E9ECEF] active:outline-none focus:bg-[#E9ECEF] focus:outline-none focus-visible:outline-none"
            }
            type="text"
            placeholder="Email address *"
          />
          {/* phone///////////////////////////////////////////////////////////////////////////////  */}
          <input
            {...register("phone", {
              required: "phone number",
              pattern: /^(?:\+995|00995|995)[0-9]{9}$/,
            })}
            className={
              errors.phone
                ? "w-[775px] h-[46px] mb-[40px] px-[16px] py-[8px] box-border rounded-[4px] border-b-[1px] broder-b-solid border-b-[#95939A] active:bg-[#E9ECEF] active:outline-none focus:bg-[#E9ECEF] focus:outline-none focus-visible:outline-none text-[#DC3545] bg-[#FFEFEF] border-none placeholder:text-[#DC3545]"
                : "w-[775px] h-[46px] mb-[40px] px-[16px] py-[8px] box-border rounded-[4px] border-b-[1px] broder-b-solid border-b-[#95939A] placeholder:text-black active:bg-[#E9ECEF] active:outline-none focus:bg-[#E9ECEF] focus:outline-none focus-visible:outline-none"
            }
            type="text"
            placeholder="Phone number *"
          />
          {/* date//////////////////////////////////////////////////////////////////////////////  */}
          <input
            {...register("date", { required: "date" })}
            className={
              errors.date
                ? "w-[775px] h-[46px] mb-[40px] px-[16px] py-[8px] box-border rounded-[4px] border-b-[1px] broder-b-solid border-b-[#95939A] active:bg-[#E9ECEF] active:outline-none focus:bg-[#E9ECEF] focus:outline-none focus-visible:outline-none text-[#DC3545] bg-[#FFEFEF] border-none placeholder:text-[#DC3545]"
                : "w-[775px] h-[46px] mb-[40px] px-[16px] py-[8px] box-border rounded-[4px] border-b-[1px] broder-b-solid border-b-[#95939A] placeholder:text-black active:bg-[#E9ECEF] active:outline-none focus:bg-[#E9ECEF] focus:outline-none focus-visible:outline-none"
            }
            type="text"
            placeholder="Date of birth *"
          />
          <div className="flex gap-[554px] mt-[101px]">
            <button className="w-[93px] h-[53px] text-black rounded-[8px] border-solid border-[1px] border-black text-[20px] font-sans hover:outline-[4px] hover:outline hover:outline-[#C2A5F9]">
              Back
            </button>
            <button
              type="submit"
              className="w-[128px] h-[53px] bg-black  rounded-[8px] text-white text-[20px] font-sans hover:outline-[4px] hover:outline hover:outline-[#C2A5F9]"
            >
              Next
              <img
                className="ml-[12px] inline-block pb-[2px]"
                src={btnVector}
              />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UserInfo;