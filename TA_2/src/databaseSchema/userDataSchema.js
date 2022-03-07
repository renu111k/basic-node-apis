const Sequelize = require("sequelize");
const { sequelize } = require("../dbConnection/postgres");
var userDataSchema = {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    required: true
  },
  emailId: {
    type: Sequelize.STRING,
    required: true,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    required: true
  },
  jwt: {
    type: Sequelize.STRING
  }
};
var userDataModel= sequelize.define("userDetails", userDataSchema);

userDataModel.sync({ force: false }).then(() => {});
module.exports = userDataModel;
