/* eslint-disable no-undef */

const newsSchema = {
    tags: ["News"],
    summary: "Get latest news headlines",
    description: "Get latest news headlines",
   headers: {
        type: "object",
       required: ["Authorization"],
        properties: {
          Authorization: { type: "string" },
        },
      }, 
    response : {
        200: {
            type: 'object',
            properties: {
                status: {type: "string"},
                count: { type: "string" },
                data: { type: "array",
                items : {
                  type : "object",
                  properties :  {
                      link : {type : "string"},
                      headline : {type : "string"},
                  }
              } },

            }
        },
    },

}
module.exports = newsSchema