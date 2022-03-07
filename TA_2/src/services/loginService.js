

const UserModel = require('../databaseSchema/userDataSchema')
const {isValidPassword} = require("../lib/encryptDecryptPassword")
async function loginService (request, {emailId, password}) {
    const userDetails = await UserModel.findAll({
        where: {
          emailId
        }
      });
  const isPasswordCorrect = await isValidPassword(password,userDetails?.[0]?.dataValues.password)
  if (!isPasswordCorrect) {
    throw "Invalid Password"
  }

 return userDetails?.[0]?.dataValues


}


module.exports = loginService
  