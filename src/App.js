import Bill from "./Bill";
import CalcTip from "./CalcTip";
import People from "./People";
import Tip from "./Tip";

function App() {
  return (
    <div className="App">
      <div className="container-div">
        <div className="container">
          <div className="grid">
            <Bill />
            <Tip />
            <People />
          </div>
          <CalcTip />
        </div>
      </div>
    </div>
  );
}

export default App;
