

const jwt = require('jsonwebtoken')
async function authorizeService (request, {userData}) {

    try {
        const token = jwt.sign({userData},'secretkey',  {expiresIn: 1000})
        return {token} 
    }catch(e){
        throw "Error authorizing user"
    }


}


module.exports = authorizeService
  