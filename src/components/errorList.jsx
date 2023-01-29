import React, { useState } from "react";
import { useEffect } from "react";

import ErrorCard from "./errorCard";

const ErrorsList = ({ errors }) => {
  const [errorsArray, setErrorsArray] = useState([]);

  useEffect(() => {
    const filteredObj = Object.fromEntries(
      Object.entries(errors).filter(([key, value]) => {
        if (typeof value === "object" && !Array.isArray(value)) {
          return Object.keys(value).length !== 0;
        }
        return value !== "";
      })
    );
    console.log(filteredObj, "erorebi garet");

    const mappedObj = Object.entries(filteredObj).map((obj) => {
      return obj[1].message;
    });
    setErrorsArray(mappedObj);
  }, [errors]);

  const closeErrorHandler = (item) => {
    const newArray = errorsArray.filter((err) => err !== item);
    setErrorsArray(newArray);
  };

  return (
    <div className="absolute top-[226px] right-[-39px] z-50">
      {errorsArray.map((item) => {
        return (
          <ErrorCard
            key={item}
            message={item}
            onErrorClose={closeErrorHandler}
          />
        );
      })}
    </div>
  );
};

export default ErrorsList;
