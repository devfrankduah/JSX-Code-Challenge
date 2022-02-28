//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1> Frank's favorites</h1>
    <ul>
      <li>
        <h3>Prayer</h3>
      </li>
      <li>
        <h3>Love</h3>
      </li>
      <li>
        <h3>Vision</h3>
      </li>
    </ul>
  </div>,
  document.getElementById("root")
);
