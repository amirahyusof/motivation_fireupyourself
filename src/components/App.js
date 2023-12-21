import React from "react";

function App(props) {
  return (
    <div className="container"
    style={{ backgroundColor: props.curentColor }}>
      <div className="content--section">
      <h3 className="introduction--header">Hey, I need motivation!</h3>
      <div className="content--display">
          <p className="content--subdisplay">"{props.currentMotivation}"</p>
      </div>
      <button type="click" className="content--button" onClick={props.handleClick}>
        FireUp 🔥
        </button>
      </div>
    </div>
  );
}

export default App;
