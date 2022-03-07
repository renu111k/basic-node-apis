
const bcrypt = require("bcrypt");

async function encryptPassword(password){
    const salt = await bcrypt.genSalt(10);
    const encrypted_password = await bcrypt.hash(password, salt);
    return encrypted_password
  }

  async function isValidPassword(password, encrypted_password){
    const validPassword = await bcrypt.compare(password, encrypted_password);
    return validPassword

  }

  module.exports = {
    encryptPassword ,
    isValidPassword 
  }