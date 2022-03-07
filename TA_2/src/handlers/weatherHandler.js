/* eslint-disable no-unused-vars */

const weatherService = require("../services/weatherService");

async function weatherHandler (request,reply) {
   return await weatherService()
}


module.exports = weatherHandler
  