import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [buttoncolor, setButtoncolor] = useState("red");
  const newButtoncolor = buttoncolor === "red" ? "blue" : "red";

  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttoncolor }}
        onClick={() => setButtoncolor(newButtoncolor)}
      >
        Change to {newButtoncolor}
      </button>
    </div>
  );
}

export default App;
