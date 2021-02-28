import classes from "../../Styling/App.module.css";
import React from "react";

const SideToolbarItem = (props) => {
  return (
    <button
      className={
        props.active ? classes.sideToolbarItemActive : classes.sideToolbarItem
      }
      onClick={props.handleClick}
    >
      {props.name}
    </button>
  );
};

export default SideToolbarItem;
