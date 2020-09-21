import React from "react";

export default function RecipePic(props) {
  return (
    <div>
      <img
        style={{
          align: "float:right",
          position: "relative",
          transform: "translate(105%, 0%)",
        }}
        src={props.data}
        alt="food"
      />
    </div>
  );
}
