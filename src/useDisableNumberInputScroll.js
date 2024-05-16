import { useEffect } from "react";
export const useDisableNumberInputScroll = () => {
  useEffect(() => {
    //prevent default scrolling behaviour
    const handleWheel = (e) => {
      e.preventDefault();
    };

    //find all number inout elements in the document
    const numberInputs = document.querySelectorAll("input[type = 'number']");

    //attach the handle wheen function as an event listener to each number input
    numberInputs.forEach((input) => {
      input.addEventListener("wheel", handleWheel, { passive: false });
    });

    //clean up by removing the event listeners when the component unmounts
    return () => {
      numberInputs.forEach((input) => {
        input.removeEventListener("wheel", handleWheel);
      });
    };
  }, []); //empty dependency array to make sure the effect runs only once
};
export default useDisableNumberInputScroll;
