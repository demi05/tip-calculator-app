import Bill from "./Bill";
import ShowTip from "./ShowTip";
import People from "./People";
import Splitter from "./Splitter";
import Tip from "./Tip";
import { GlobalProvider } from "./context/GlobalState";
import { useDisableNumberInputScroll } from "./useDisableNumberInputScroll";
import ErrorState from "./ErrorState";
import Custom from "./Custom";

function App() {
  useDisableNumberInputScroll();
  ErrorState();

  return (
    <GlobalProvider>
      <div className="App">
        <div className="container-div">
          <Splitter />
          <div className="container">
            <div className="grid">
              <Bill />
              <Tip />
              <People />
            </div>
            <ShowTip />
            <Custom />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
