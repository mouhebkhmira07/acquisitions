require('dotenv/config');

/** @type { import("drizzle-kit").Config } */
module.exports = {
  schema: "./src/models/*",
  out: "./drizzle",
  dialect: 'postgresql',  // ← Add this line
  dbCredentials: {
    url: process.env.DATABASE_URL,  // ← Change from connectionString to url
  }
};