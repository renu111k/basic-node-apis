/* eslint-disable no-undef */
const fastify = require('fastify')({ logger: true })
require('dotenv').config()
const oas = require('fastify-oas');
const { swagger_options } = require('./src/config/swagger');
const apiRoutes = require("./src/routes/routes")
fastify.register(oas, swagger_options);
fastify.register(apiRoutes);


  // Run the server!
  const start = async () => {
    try {
      await fastify.listen( process.env.SERVER_PORT,
        process.env.SERVER_HOST,)
       } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()