import React from "react";
import Typography from "@material-ui/core/Typography";

export default function RecipeTitle(props) {
  return (
    <div>
      <Typography
        variant="h1"
        style={{
          fontFamily: "Coiny",
          fontSize: 30,
          position: "relative",
          //transform: "translate(-30%, -30%)",
          top: 13,
          align: "center",
        }}
      >
        {props.data}
      </Typography>
    </div>
  );
}

