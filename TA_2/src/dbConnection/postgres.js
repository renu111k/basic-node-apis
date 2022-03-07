/* eslint-disable no-undef */
const Sequelize = require("sequelize");
const config = {
  username: "postgres",
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  dialect: "postgres",
  dialectOptions: {
    timezone: "Asia/Kolkata"
  },
  timezone: "Asia/Kolkata"
};

let sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  "postgres",
  process.env.POSTGRES_PASSWORD,
  config
);
sequelize
  .authenticate()
  .then(function() {
    console.log("Connection has been established successfully.");
  })
  .catch(function(error) {
    console.log("Unable to connect to the database:", error);
  });

module.exports = {
  sequelize
};
