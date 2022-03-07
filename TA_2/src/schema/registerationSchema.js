/* eslint-disable no-undef */
const registerationSchema = {
    tags: ["User"],
    summary: "To register new users",
    description: "To register new users",

    body: {
        type: 'object',
        required: ["data"],
        additionalProperties: false,
        properties: {
            data: {
                type: "object",
                additionalProperties: false,
                required: ["name", "emailId" , "password"],
                properties: {
                    name: {type: "string"},
                    emailId: { type: "string" },
                    password: { type: "string" }
                }
            }
        }

    },
    response : {
        201:{

        },
    },
}


module.exports = registerationSchema