// Authors: Spencer McKee, Daniel Obichie, and Yolanda Cao
// Recipe card component for use in recipe grid
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// previous dimensions maxWidth: 345, maxHeight: 235 (more than)
export default function MediaCard(props) {
  let pm = props.data.preparationMinutes;
  let cm = props.data.cookingMinutes;
  let pps = props.data.pricePerServing;
  let time = Math.floor(pm + cm) + " min.";
  if (isNaN(Number(pm)) || isNaN(Number(cm)) || pm == null || cm == null) {
    time = "";
  }
  return (
    <Card
      style={{ maxWidth: 345, height: 305, rounded: false, borderRadius: 20 }}
    >
      <CardActionArea>
        <CardMedia
          style={{ height: 180, width: "auto" }}
          image={props.data.image}
          title={props.data.image}
        />
      </CardActionArea>

      <CardContent style={{ padding: "16px 16px 0px" }}>
        <Typography
          style={{
            fontFamily: "Abel",
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          variant="h5"
          component="h2"
        >
          {props.data.title}
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="stretch"
          key={1}
          style={{}}
        >
          <Grid style={{ textAlign: "center" }} item xs key={1}>
            <Typography
              style={{
                fontSize: "1.5rem",
                fontFamily: "Abel",
                textDecoration: "none",
                variant: "h2",
              }}
            >
              {time}
            </Typography>
          </Grid>

          <Grid style={{ textAlign: "center" }} item xs key={2}>
            <Typography
              style={{
                fontSize: "1.5rem",
                fontFamily: "Abel",
                textDecoration: "none",
              }}
            >
              {"$" +
                (Number(pps) > 400 ? (Number(pps) > 600 ? "$$" : "$") : "")}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
