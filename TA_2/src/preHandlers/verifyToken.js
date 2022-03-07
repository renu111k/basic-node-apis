const jwt = require('jsonwebtoken')

async function  verifyToken(request,reply) {

    const token = request.headers['authorization']
    if(!token){
        reply.status(403)
    }
    jwt.verify(token,'secretkey')

}
module.exports= verifyToken