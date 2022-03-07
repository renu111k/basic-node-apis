

const UserModel = require('../databaseSchema/userDataSchema')
const {encryptPassword} = require("../lib/encryptDecryptPassword")
async function registerService (request, {name, emailId, password}) {
  const encrypted_password  = await encryptPassword(password)

    const user = await UserModel.create({
        emailId,
        password: encrypted_password,
        name,
      });
    return user

}

module.exports = registerService
  