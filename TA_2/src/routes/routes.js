
const loginHandler = require("../handlers/loginHandler");
const weatherHandler = require("../handlers/weatherHandler");
const registerHandler = require("../handlers/registerHandler");
const registerationSchema= require("../schema/registerationSchema");
const loginSchema= require("../schema/loginSchema");
const newsSchema= require("../schema/newsSchema");
const weatherSchema= require("../schema/weatherSchema");
const verifyToken = require("../preHandlers/verifyToken");
const newsHandler = require("../handlers/newsHandler");

async function routes(fastify) {

    fastify.post(
        "/v1/register",{
            schema: registerationSchema,
        },
        registerHandler
    );
    fastify.post(
        "/v1/login",{
            schema: loginSchema,
        },
        loginHandler
    );
    fastify.get(
        "/v1/news",{
           schema: newsSchema,
            preHandler:[
                verifyToken
            ]
        },
        newsHandler
    );
    fastify.get(
        "/v1/weather",{
            schema: weatherSchema,
        },
        weatherHandler
    )
}
module.exports = routes;