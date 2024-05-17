import { useInputValues } from "./context/GlobalState";

const People = () => {
  const { people, setPeople, handleErrorState, errorClass } = useInputValues();

  return (
    <div className="people-div">
      <div className="people-div-text">
        <h3>Number of People</h3>
        <p className={`hidden-p ${errorClass}`}>Can't be zero</p>
      </div>
      <div className="input">
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          onBlur={handleErrorState}
        />
      </div>
    </div>
  );
};

export default People;
