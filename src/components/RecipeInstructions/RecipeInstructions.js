import React from "react";
import Typography from "@material-ui/core/Typography";

export default function RecipeInstructions(props) {
  return (
    <React.Fragment>
      <div>
        <Typography
          variant="subtitle2"
          style={{
            fontFamily: "Coiny",
            fontSize: 20,
            position: "relative",
            top: 70,
            align: "left",
              marginBottom: "15px"
          }}
        >
          Steps:
        </Typography>
        {props.data.map((entry) => (
          <li
            style={{
              fontFamily: "Comfortaa",
              fontSize: 16,
              top: 59,
              position: "relative",
              align: "left",
                marginLeft: "30px"
            }}
            key={entry.number}
          >
            {entry.step}
          </li>
        ))}
      </div>
    </React.Fragment>
  );
}
