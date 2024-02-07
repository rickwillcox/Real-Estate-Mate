import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

/*
To insert the app into the dom you should first find the class of the element on the webpage you are modifying 
and set that class to insertionElement below
*/
//

const insertionPointClassName = "property-info__middle-content";

const body = document.getElementsByClassName(
  insertionPointClassName
)[0] as HTMLElement;

/*
You can now append the app to the body of the webpage you are modifying
You can preform additional checks here if you like this is just a base example.
*/
const baseElementClassName = "rem-main-container";

if (body) {
  body.innerHTML += `<div class="${baseElementClassName}"></div>`;
} else {
}

const container = document.getElementsByClassName(baseElementClassName)[0];
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
