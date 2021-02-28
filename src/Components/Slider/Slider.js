import React from "react";
import classes from "../../Styling/App.module.css";

const Slider = (props) => {
  return (
    <div className={classes.SliderContainer}>
      <input
        type="range"
        className={classes.Slider}
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.handlerChange}
      ></input>
    </div>
  );
};

export default Slider;
