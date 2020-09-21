import React from "react";
import Typography from "@material-ui/core/Typography";

export default function RecipeIngredients(props) {
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
              top: 50,
              align: "left",
            }}
          >
            Ingredients:
          </Typography>
          {props.data.map((entry) => (
            <ul>
              <Typography
                style={{
                  fontFamily: "Comfortaa",
                  fontSize: 16,
                  top: 50,
                  position: "relative",
                  //transform: "translate(-30%, -30%)",
                }}
                key={entry.id}
              >
                {entry.originalString}
              </Typography>
            </ul>
          ))}
        </div>
    </React.Fragment>
  );
}
