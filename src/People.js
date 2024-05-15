import { useInputValues } from "./context/GlobalState";
// import { GlobalContext } from "./context/GlobalState";

const People = () => {
  const { people, setPeople } = useInputValues();

  const disableScroll = (e) => {
    // This prevents the wheel event from changing the number input's value
    e.preventDefault();
  };

  return (
    <div className="people-div">
      <div className="people-div-text">
        <h3>Number of People</h3>
        <p className={`hidden-p ${people === 0 ? "hidden" : "not-hidden"}`}>
          Can't be zero
        </p>
      </div>
      <input
        type="number"
        value={people}
        onClick={disableScroll}
        onChange={(e) => setPeople(e.target.value)}
      />
    </div>
  );
};

export default People;
