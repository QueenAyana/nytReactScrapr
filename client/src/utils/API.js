import axios from "axios";

const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const KEY = "j7ozX4lJWsSvASYhK3OiqSb5fxEB7WuX";


export default {
  // NYT API query
  getData: function(search) {
    return axios.get(`${URL}?q=${search}&api-key=${KEY}`);
  },
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  saveArticles: function(article) {
    return axios.post("/api/articles", article);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  }
};