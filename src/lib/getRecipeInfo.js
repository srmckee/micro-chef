// Gets a recipe's info from the MongoDB database
async function getRecipeInfo() {
    const axios = require('axios');
    axios.defaults.headers.post['Content-Type'] =  'application/json';
    let token_response = await axios.post('https://realm.mongodb.com/api/client/v2.0/app/micro-chef-biguy/auth/providers/anon-user/login');
    let access_token = token_response.data.access_token;
    let data_response = await axios.post('https://realm.mongodb.com/api/client/v2.0/app/micro-chef-biguy/graphql',{"query": "query recipeListData {recipesList(query: {vegan: false}) {title}}"},{headers: {Authorization: `Bearer ${access_token}`}})
        .catch((err) => console.log(err));
    //console.log(data_response.data.errors);
    //console.log(data_response.data.data.recipesList.title)
    return data_response;
};
//getRecipeInfo()//.then((recipes) => console.log(recipes));
export default getRecipeInfo;