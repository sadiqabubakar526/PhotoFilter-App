import React, { useCallback } from "react";
import classes from "../../Styling/App.module.css";
import SideToolbarItem from "./sideToolbarItem";

const SideToolbar = (props) => {
  const handleInputChange = useCallback(
    (index) => {
      props.onChange(index);
    },
    [props]
  );
  return (
    <div className={classes.sideToolbar}>
      {props.children}
      {props.options.map((option, index) => {
        return (
          <SideToolbarItem
            key={index}
            active={index === props.ActiveOptionIndex}
            name={option.name}
            handleClick={() => handleInputChange(index)}
          ></SideToolbarItem>
        );
      })}
      <p style={{ padding: "10px" }}>Photo Filter 1.0</p>
    </div>
  );
};

export default SideToolbar;
