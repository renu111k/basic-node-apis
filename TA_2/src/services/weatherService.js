
/* eslint-disable no-undef */
const axios = require('axios'); 

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=22.7196&lon=75.8577&exclude=hourly,minutely&appid=${process.env.WEATHER_API_KEY}`
function processResponse(data){
    const transformedWeatherHistory = data.daily.map(weatherData=>{
        return {
                date: new Date(weatherData.dt).toDateString(),
                main:weatherData.weather[0].main,
                temp:weatherData.temp

        }
    })
    let processedData = {
        count: transformedWeatherHistory.length,
        lat: data?.lat,
        lon:data?.lon,
        data:transformedWeatherHistory
    }

return processedData


}
async function weatherService () {
        const response = await axios.get(url)
        const processedData = processResponse(response.data)
        return processedData

}

module.exports = weatherService
  