import "./App.css";
import { TrafficWrapper } from "./TrafficWrapper";

function App() {
  return (
    <div className="App">
      <TrafficWrapper
        colors={[
          { id: "1", color: "red", name: "Red" },
          { id: "2", color: "yellow", name: "Yellow" },
          { id: "3", color: "lime", name: "Lime" },
        ]}
      />
    </div>
  );
}

export default App;
