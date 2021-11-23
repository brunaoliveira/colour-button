import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [buttonColor, setButtoncolor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtoncolor = buttonColor === "red" ? "blue" : "red";

  return (
    <div className="App">
      <button
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        onClick={() => setButtoncolor(newButtoncolor)}
        disabled={disabled}
      >
        Change to {newButtoncolor}
      </button>
      <div>
        <input
          type="checkbox"
          id="disable-button-checkbox"
          defaultChecked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
    </div>
  );
}

export default App;
