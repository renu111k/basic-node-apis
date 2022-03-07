/* eslint-disable no-undef */

const newsSchema = {
    tags: ["Weather"],
    summary: "Shows the weather projecttion of next few days of a location",
    description: "Shows the weather projecttion of next few days of a location",
  
    response : {
        200: {
            type: 'object',
            properties: {
                        count: {type: "string"},
                        lat: { type: "string" },
                        lon: { type: "string" },
                        data: { type: "array" },
                }
            
        },
    },
}

module.exports = newsSchema
