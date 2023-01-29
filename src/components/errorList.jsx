import React, { useState } from "react";
import { useEffect } from "react";

import ErrorCard from "./errorCard";

const ErrorsList = ({ PropsErrors, counter }) => {
  const [errorsArray, setErrorsArray] = useState([]);

  useEffect(() => {
    const filteredObj = Object.fromEntries(
      Object.entries(PropsErrors).filter(([key, value]) => {
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
  }, [PropsErrors, counter]);

  const closeErrorHandler = (item) => {
    const newArray = errorsArray.filter((err) => err !== item);
    setErrorsArray(newArray);
  };

  return (
    <div className="absolute top-[126px] left-[1539px] z-50">
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
