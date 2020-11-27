import React, { useState, useEffect } from "react";

const ButtonBar = (props) => {
  // props is an array of objects
  const [categoryString, setCategory] = useState("all");
  // let categoryString = "all";
  // const btnHandler = () => {};
  // console.log(props.pictureObjectArray);
  useEffect(() => {
    // props.pictureObjectArray.map((pictureObject) => {
    //   return console.log(categoryString);
    // });
    console.log(categoryString);
  });
  return (
    <div id="button-bar" className="container">
      <button
        id="all-btn "
        className="btn-warning mr-4"
        onClick={() => setCategory("all")}
      >
        All
      </button>
      <button
        id="paintings-btn "
        className="btn-warning m-4"
        onClick={() => setCategory("paintings")}
      >
        Paintings
      </button>
      <button
        id="stationary-btn "
        className="btn-warning m-4"
        onClick={() => setCategory("stationary")}
      >
        Stationary
      </button>
      <button
        id="business-btn "
        className="btn-warning m-4"
        onClick={() => setCategory("business")}
      >
        Business
      </button>
    </div>
  );
};

export default ButtonBar;
