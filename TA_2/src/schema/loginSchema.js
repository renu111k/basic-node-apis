
const loginSchema = {
    tags: ["User"],
    summary: "Login",
    description: "User Login",
    body: {
        type: 'object',
        required: ["data"],
        additionalProperties: false,
        properties: {
            data: {
                type: "object",
                additionalProperties: false,
                required: [ "emailId" , "password"],
                properties: {
                    password: {type: "string"},
                    emailId: { type: "string" },
                }
            }
        }

    },
    response : {
        200: {
            type: 'object',
            properties: {
                token : {type: "string"}
            }
        },
    },
}

module.exports = loginSchema