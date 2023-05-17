/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
require("dotenv").config();

module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};
module.exports = nextConfig;
