import { useEffect } from "react";
export const ErrorState = () => {
  useEffect(() => {
    const numberInputs = document.querySelectorAll("input[type = 'number']");
    const inputDivs = document.querySelectorAll(".input");

    return () => {
      numberInputs.forEach((input) => {
        if (input.value === 0) {
          inputDivs.forEach((inputDiv) => {
            inputDiv.classList.add("error-input");
            console.log("pk");
          });
        }
      });
    };
  }, []);
};

export default ErrorState;
