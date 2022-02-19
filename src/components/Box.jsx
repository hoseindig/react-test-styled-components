import "./box-style.scss";
import React, { useState } from "react";

const Box = () => {
  let minValue = 0.5;
  let [boxOpacity, setBoxOpacity] = useState(minValue);
  function hoverhandle(p) {
    if (p === 1) setBoxOpacity(minValue);
    else setBoxOpacity(0.9);
    console.log("hoverhandle", boxOpacity, p === 1 ? p : "");
  }
  return (
    <div
      className="box-div"
      onMouseEnter={hoverhandle}
      onMouseLeave={() => hoverhandle(1)}
      style={{ opacity: boxOpacity }}
    >
      <span>Click</span>
    </div>
  );
};

export default Box;
