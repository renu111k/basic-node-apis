

const UserModel = require('../databaseSchema/userDataSchema')

async function updateUserDataService (request, {updatedData,userId}) {

try{
    const user = await UserModel.update( {...updatedData},{
        where: {
            userId
        }
      });
    return user

}catch(error){
    throw error
}


}


module.exports = updateUserDataService
  