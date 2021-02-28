import React from "react";
import classes from ".././../Styling/App.module.css";

const EditingImage = (props) => {
  return (
    <div
      className={classes.editingImage}
      style={{ ...props.style, backgroundImage: `url(${props.source})` }}
    ></div>
  );
};

export default EditingImage;
