import React, { useState } from "react";
import { useEffect } from "react";

import ErrorCard from "./errorCard";

const ErrorsList = ({ PropsErrors, counter }) => {
  const [errorsArray, setErrorsArray] = useState([]);
  const [errors, setErrors] = useState(PropsErrors);
  console.log("propsErrors", PropsErrors);

  useEffect(() => {
    console.log("useEfefect in action");
    const filteredObj = Object.fromEntries(
      Object.entries(errors).filter(([key, value]) => {
        if (typeof value === "object" && !Array.isArray(value)) {
          return Object.keys(value).length !== 0;
        }
        return value !== "";
      })
    );

    const mappedObj = Object.entries(filteredObj).map((obj) => {
      return obj[1].message;
    });
    setErrorsArray(mappedObj);
  }, [PropsErrors, errors, counter]);

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
