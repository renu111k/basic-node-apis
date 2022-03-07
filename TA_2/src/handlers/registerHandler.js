
const registerService = require("../services/registerService");
// const authorizeService = require("../services/authorizeService");
// require("../databaseSchema/userDataSchema")
async function registerHandler (request,reply) {

    const {
        data: { name, emailId, password },
      } = request.body;
      //Authenticate User
       await  registerService(request, {
        name,
        emailId,
        password
      })
        reply.status(201)
        reply.send()

}


module.exports = registerHandler
  