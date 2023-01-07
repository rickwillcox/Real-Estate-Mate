/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import "./App.css";
import { useState } from "react";
import { useBearStore } from "@stores/bearStore";
import { getChromeUrl } from "@src/utils";
import logoPNG from "@assets/logo-png.png";
// you need to call toString() on the imported svg to get the path
import logoSVG from "@assets/logo-svg.svg";

import { UpdateFromBackgroundScript } from "../UpdateFromBackgroundScript/UpdateFromBackgroundScript";

export function App() {
  // use of a zustand store
  const bearStore = useBearStore();

  // use of normal react state
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="rcet-main-cointainer">
      <h1 className="rcet-title">React Chrome Extension Template</h1>
      <br />
      <img
        className="rcet-logo spin"
        src={`${getChromeUrl(logoPNG)}`}
        alt="logo"
      />
      <br />
      <div className="rcet-container">
        <h2>Normal React State Example</h2>
        <div className="rcet-checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
          <label> Click me!</label>
        </div>
      </div>
      <br />
      <div className="rcet-container">
        <h2>Zustand State Example</h2>
        <h3>Bears : {bearStore.bears}</h3>
        <button className="rcet-button" onClick={bearStore.increasePopulation}>
          Add more bears! - Click me!
        </button>
        <button className="rcet-button" onClick={bearStore.removeAllBears}>
          Remove all bears! - Click me!
        </button>
      </div>

      <br />
      <UpdateFromBackgroundScript />
    </div>
  );
}
