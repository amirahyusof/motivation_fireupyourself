import React from "react";

function App(props) {
  return (
    <div className="square-section">
      <div className="content-section">
      <h3 className="intro-part">Hey, I need motivation!</h3>
      <p className="motiv-part">{props.motiv}</p>
      <button type="submit" onClick={props.handleClick}>FireUp 🔥</button>
      </div>
    </div>
  );
}

export default App;
