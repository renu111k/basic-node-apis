
const {getTopHeadlinesService,getNewsByQuery} = require("../services/newsService");
async function newsHandler (request,reply) {

    const searchQuery = request.query.search

    if (!searchQuery) {
    return  await getTopHeadlinesService(request)
    }
    return await getNewsByQuery(request,{searchQuery})
}


module.exports = newsHandler
  