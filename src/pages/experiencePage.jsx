import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

import logo from "../assets/images/logo.svg";
import mainImage from "../assets/images/unsplash_27LH_0jXKYI (1).png";
import btnVector from "../assets/images/VectorButton.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorsList from "../components/errorList";

const ExperiencePage = () => {
  const [fetchedCharacters, setFetchedCharacters] = useState([]);
  const [knowledge, setKnowledge] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState("");

  const [formErrors, setFormErrors] = useState([]);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const grandmastersUrl =
    "https://chess-tournament-api.devtest.ge/api/grandmasters";
  const postUrl = "https://chess-tournament-api.devtest.ge/api";

  useEffect(() => {
    axios(grandmastersUrl)
      .then((res) => setFetchedCharacters(res.data))
      .catch((err) => console.log(err));
  }, []);

  const optionKnowledge = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Professional", label: "Professional" },
  ];
  const optionCharacter = fetchedCharacters.map((character) => {
    return {
      value: character.id,
      label: (
        <div>
          <p>{character.name}</p>
        </div>
      ),
    };
  });

  const validation = () => {
    const errorss = {};
    if (knowledge === "") {
      errorss.knowledge = {message: "Please enter your level of knowledge", error: true};
    } else {
      errorss.knowledge = {};
    }
    if (selectedCharacter === "") {
      errorss.selectedCharacter = {message: "Please choose your character", error: true};
    } else {
      errorss.selectedCharacter = {};
    }
    if (Object.keys(errors).length !== 0) {
        errorss.radio = {message: "Pleace enter if you have participated", error: true};
    } else {
        errorss.radio = {};
    }
    return errorss;
  };

  const onSubit = (formHookData) => {
    // if (knowledge !== "" && selectedCharacter !== "") {
    //   console.log("form sumbited");
    // }
    const errs = validation();
    setFormErrors(errs);
    console.log(errs);
  };
  const onError = (data) => {
    const errs = validation();
    errs.radio = {message: "Pleace enter if you have participated", error: true};

    setFormErrors(errs);

    console.log(errs,data);
  };

  return (
    <div className="flex relative">
      {Object.keys(formErrors).length !== 0 && (
        <ErrorsList errors={formErrors} />
      )}
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
        <div className="absolute top-[280px] left-[102px]">
          <p className="font-extrabold uppercase font-italic text-[28px] leading-[55px] mb-[24px] w-[683px]">
            “Many have become chess masters; no one has become the master of
            chess.”
          </p>
          <p className="font-medium font-italic text-[24px] text-white">
            - Siegbert Tarrasch
          </p>
        </div>
      </section>
      <section className="border-box pl-[48px]">
        <p className="font-bold font-sans my-[30px] tracking-[1px]">
          First step is done, continue to finish onboarding
        </p>
        <div className="bg-[#B9B4C3] h-[1px] w-screen"></div>

        {/* 1--2  */}
        <div className="mt-[60px]">
          <div className="flex items-center gap-[4px] ml-[53px] mb-[4px]">
            <div className="w-[40px]  h-[40px] rounded-[8px] border-solid border-[1px] border-[#E5E6E8] text-[18px] font-sans font-bold flex justify-center items-center">
              1
            </div>
            <div className="w-[174px] h-[1px] bg-[#B9B4C3] opacity-30"></div>
            <div className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-[8px] border-solid border-[1px] border-[#E5E6E8] text-[18px] font-sans font-bold flex justify-center items-center">
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
            Chess experience
          </h1>
          <p className="font-sans font-semibold text-[14px] text-[#95939A]">
            This is basic informaton fields
          </p>
        </div>
        {/* selects ////////////////////////////////////////////////////////////////////////////  */}
        <form onSubmit={handleSubmit(onSubit, onError)}>
          <div className="flex">
            <div className="w-[392px] mr-[23px]">
              <Select
                onChange={(value) => setKnowledge(value.value)}
                options={optionKnowledge}
                placeholder={<div>level of knowledge *</div>}
              />
            </div>
            <div className="w-[392px]">
              <Select
                onChange={(value) => setSelectedCharacter(value.value)}
                options={optionCharacter}
                placeholder={<div>Choose your character *</div>}
              />
            </div>
          </div>
          <div className="flex flex-col mt-[80px]">
            <p className="font-sans text-[20px]">
              Have you participated in the Redberry Championship? *
            </p>
            <div className="flex gap-[16px] mt-[12px]">
              <div className="flex gap-[8px]">
                <input
                  type="radio"
                  {...register("radio", { required: true })}
                />
                <label className="font-sans">Yes</label>
              </div>
              <div className="flex gap-[8px] ">
                <input
                  type="radio"
                  {...register("radio", { required: true })}
                />
                <label className="font-sans">No</label>
              </div>
            </div>
          </div>
          <div className="flex gap-[554px] mt-[210px]">
            <button className="w-[93px] h-[53px] text-black rounded-[8px] border-solid border-[1px] border-black text-[20px] font-sans hover:outline-[4px] hover:outline hover:outline-[#C2A5F9]">
              Back
            </button>
            <button
              type="submit"
              className="w-[128px] h-[53px] bg-black  rounded-[8px] text-white text-[20px] font-sans hover:outline-[4px] hover:outline hover:outline-[#C2A5F9]"
            >
              Done
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

export default ExperiencePage;
