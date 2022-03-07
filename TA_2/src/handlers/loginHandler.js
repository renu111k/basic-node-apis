
const loginService = require("../services/loginService");
const authorizeService = require("../services/authorizeService");
require("../databaseSchema/userDataSchema")
async function loginHandler (request,reply) {

    const {
        data: { emailId, password },
      } = request.body;
      //Authenticate User
      const userData = await  loginService(request, {
          emailId,
          password
      })
      if(userData){
        const {emailId,password,name,userId}= userData
        //Authorize User
        const userAuth = await authorizeService(request , {userData:{emailId,password,name,userId}})

        reply.status(200)
        return reply.send(userAuth)
      }else{
          reply.status(404)
         return reply.send("User Not Found")
      }

}


module.exports = loginHandler
  