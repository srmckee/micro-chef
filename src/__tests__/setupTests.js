// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen, wait, waitFor, waitForDomChange } from "@testing-library/dom";
import Recipes from "../components/Recipes";
import Header from "../components/Header";
import App from "../App";
//import App from "../App";

it("renders main page", () => {
  const { getByText } = render(<App />);
  //expect the title of the page microchef to be in the document
  expect(getByText("MicroChef")).toBeInTheDocument();
});

it("navigation works", async () => {
  const container = render(<App />);
  const { getByRole } = render(<App />);
  //wait for 3 seconds

  wait(3000).then(() => {
    //simulate clicking one of the recipes
    fireEvent.click(screen.getByRole("navbutton"));
  });

  //wait for the page to change
  await waitForDomChange({ container })
    //if it changed it passed
    .then(console.log("page changed!"))
    .catch((err) => "Page did not load");
});
