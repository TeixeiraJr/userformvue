const axios= require('axios');

const api = axios.create({
    baseURL: "https://expressformapi.herokuapp.com",
});

module.exports = api;