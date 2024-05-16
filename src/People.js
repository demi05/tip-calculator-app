import { useInputValues } from "./context/GlobalState";

const People = () => {
  const { people, setPeople } = useInputValues();

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
        onChange={(e) => setPeople(e.target.value)}
      />
    </div>
  );
};

export default People;
