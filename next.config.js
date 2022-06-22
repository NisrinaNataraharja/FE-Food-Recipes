/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = {
  nextConfig,
  env: {
      NEXT_APP_URL_API_HEROKU:"https://food-recipes98.herokuapp.com/v1/",
      NEXT_APP_URL_API:"http://localhost:4000/v1/",
  },
}