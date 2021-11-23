import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtoncolor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);
  const newButtoncolor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div className="App">
      <button
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        onClick={() => setButtoncolor(newButtoncolor)}
        disabled={disabled}
      >
        Change to {replaceCamelCaseWithSpaces(newButtoncolor)}
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
