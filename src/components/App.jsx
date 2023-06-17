import React, { useState } from "react";

function App() {
  function handleSubmit() {
    setHeader("submitted");
  }

  function handlehover() {
    setMouseOver(true);
  }

  function handleout() {
    setMouseOver(false);
  }

  const [header, setHeader] = useState("hello");
  const [onMouse, setMouseOver] = useState(false);

  return (
    <div className="container">
      <h1>{header}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: onMouse ? "black" : "white" }}
        onClick={handleSubmit}
        onMouseOver={handlehover}
        onMouseOut={handleout}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
