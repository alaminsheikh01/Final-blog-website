const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  publicRuntimeConfig: {
    APP_NAME: "LOGOHERE",
    API_DEVELOPMENT: "http://localhost:8000/api",
    API_PRODUCTION: "https://learnwithalamin.com",
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: "http://localhost:3000",
    DOMAIN_PRODUCTION: "https://learnwithalamin.com",
    DISQUS_SHORTNAME: "learnwithalamin",
  },
});
