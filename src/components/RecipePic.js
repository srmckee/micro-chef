import React, { useEffect, useState } from "react";
import food from "../assets/recipe.png";
import getRecipeInfoPage from "../lib/getRecipeInfoPage";

export default function RecipePic() {
  const [recipePic, setRecipePic] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    setIsLoading(true);
    getRecipeInfoPage().then((recipeInfo) => {
      let recPic = recipeInfo.data.data.recipesListOfficials[0].image;
      setRecipePic(recPic);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      <img
        style={{
          align: "float:right",
          position: "relative",
          transform: "translate(105%, 0%)",
        }}
        src={recipePic}
        alt="this is a sample food image"
      />
    </div>
  );
}

//export default RecipePic;
