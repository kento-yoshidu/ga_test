/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["books.google.com"]
  },
  env: {
    URL: process.env.URL
  }
}
