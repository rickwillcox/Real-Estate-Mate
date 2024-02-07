import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

console.log("ENTRY INTO REAL ESTATE MATE");
/*
To insert the app into the dom you should first find the class of the element on the webpage you are modifying 
and set that class to insertionElement below
*/
//

const insertionPointClassName = "property-info__middle-content";
console.log("insertionPointClassName", insertionPointClassName);

const body = document.getElementsByClassName(
  insertionPointClassName
)[0] as HTMLElement;
console.log("ENTRY BODY", body);

/*
You can now append the app to the body of the webpage you are modifying
You can preform additional checks here if you like this is just a base example.
*/
const baseElementClassName = "rem-main-container";

if (body) {
  body.innerHTML += `<div class="${baseElementClassName}"></div>`;
  console.log("Insertion exists");
} else {
  console.log("Insertion point not found");
}

const container = document.getElementsByClassName(baseElementClassName)[0];
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
