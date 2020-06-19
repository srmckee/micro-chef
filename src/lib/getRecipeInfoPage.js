// Gets a recipe's info from the MongoDB database
async function getRecipeInfoPage(recipeId) {
  const axios = require("axios");
  axios.defaults.headers.post["Content-Type"] = "application/json";
  let token_response = await axios.post(
    "https://realm.mongodb.com/api/client/v2.0/app/micro-chef-biguy/auth/providers/anon-user/login"
  );
  let access_token = token_response.data.access_token;
  let data_response = axios
    .post(
      "https://stitch.mongodb.com/api/client/v2.0/app/micro-chef-biguy/graphql",
      {
        query:
          `query {recipesListOfficials(sortBy: _ID_ASC, query:{id: ${recipeId}}) {_id, id, title, extendedIngredients{id, image, originalString, amount, measures{us{amount, unitShort, unitLong}, metric{amount, unitShort, unitLong}}}, image,preparationMinutes,cookingMinutes,pricePerServing pricePerServing, analyzedInstructions{steps{number, step}}}}`,
      },
      { headers: { Authorization: `Bearer ${access_token}` } }
    )
    .catch((err) => console.log(err));
  return data_response;
}
//getRecipeInfoPage(689502)
//.then((recipes) => console.log(recipes.data.data.recipesListOfficials))
//.catch((err) => console.log("Error: " + err));
export default getRecipeInfoPage;
