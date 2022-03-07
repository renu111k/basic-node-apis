/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const axios = require('axios'); 
const { URLS} = require("../constants/constant")
const API_KEY = process.env.NEWS_API_KEY
const country = "us"

function processnewsData(data){

    const processedData = {
        count:data.totalResults,
        data:data.articles.map(article=>{
            return {headline: article.title,
            link: article.url
            }
        })  
    }

    return processedData
}

async function getTopHeadlinesService (request) {
        const url = `${URLS.NEWS_BASE_URL}?country=${country}&apiKey=${API_KEY}`
        const response = await axios.get(url)
        return processnewsData(response.data)

}

async function getNewsByQuery (request,{searchQuery}) {
        const url = `${URLS.NEWS_BASE_URL}?q=${searchQuery}&apiKey=${API_KEY}`
        const response = await axios.get(url)

        return processnewsData(response.data)

}

module.exports = {
    getTopHeadlinesService,
    getNewsByQuery
}
  