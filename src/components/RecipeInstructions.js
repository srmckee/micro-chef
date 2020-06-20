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
            //transform: "translate(-32%, -32%)",
            top: 70,
            align: "left",
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
              //transform: "translate(-30%, -30%)",
            }}
            key={entry.number}
          >
            {entry.step}
          </li>
        ))}
        ;
      </div>
    </React.Fragment>
  );
}
