import { useEffect } from "react";

const ErrorState = () => {
  useEffect(() => {
    const numberInputs = document.querySelectorAll("input[type='number']");
    const inputDivs = document.querySelectorAll(".input");

    const handleInputChange = (event) => {
      inputDivs.forEach((inputDiv) => {
        if (event.target.value === "0") {
          inputDiv.classList.add("error-input");
        } else {
          inputDiv.classList.remove("error-input");
        }
      });
    };

    numberInputs.forEach((input) => {
      input.addEventListener("input", handleInputChange);
    });

    return () => {
      numberInputs.forEach((input) => {
        input.removeEventListener("input", handleInputChange);
      });
    };
  }, []);

  return null;
};

export default ErrorState;
