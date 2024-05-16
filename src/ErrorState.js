export const ErrorState = () => {
  const numberInputs = document.querySelectorAll("input[type = 'number']");

  return numberInputs.forEach((input) => {
    if (input.value === 0) {
      input.classList.add("error-input");
      console.log("pk");
    }
  });
};

export default ErrorState;
