import React from "react";
import Typography from "@material-ui/core/Typography";

export default function RecipePrepCookInfo(props) {
  return (
    <div>
      <Typography
        variant="body2"
        style={{
          fontFamily: "Comfortaa",
          fontSize: 20,
          position: "relative",
          top: 22,
          align: "left",
        }}
      >
        Prep Time: {props.data.prepTime} min. Cook Time: {props.data.cookTime} min. Cost: ${Math.round(props.data.price) / 100.0}
      </Typography>
    </div>
  )
}
