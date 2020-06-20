// Authors: Spencer McKee, Daniel Obichie, and Yolanda Cao
// Gets a recipe's info from the MongoDB database
async function getRecipeInfo() {
    const axios = require('axios');
    axios.defaults.headers.post['Content-Type'] =  'application/json';
    let token_response = await axios.post('https://realm.mongodb.com/api/client/v2.0/app/micro-chef-biguy/auth/' +
        'providers/anon-user/login');
    let access_token = token_response.data.access_token;
    let data_response = axios.post('https://stitch.mongodb.com/api/client/v2.0/app/micro-chef-biguy/graphql',
        {
            query:
                `query {recipesListOfficials(sortBy: _ID_ASC, query:{}, limit: 150) {id, title, image, preparationMinutes, cookingMinutes, pricePerServing}}`,
        },
        {headers: {Authorization: `Bearer ${access_token}`}})
        .catch((err) => console.log(err));
    return data_response;
};
//getRecipeInfo().then((recipes) => console.log(recipes.data.data.recipesListOfficials)).catch((err) => console.log("Error: " + err));
export default getRecipeInfo;