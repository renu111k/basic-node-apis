const swagger_options = { // after
    routePrefix: '/documentation',
    exposeRoute: {
      ui : true,
      json : true,
      yaml : true
    },
    hideUntagged: true,
    addModels : true,
    yaml: true,
    swagger: {
      info: {
        title: 'APIs for Store Service',
        description: 'Documentation for all the APIs related to Store Service',
        version: '3.1.9'
      },
      servers: [
        {
          url : "http://localhost:3000",
          description : "Local server"
        }
      ],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'User'},
        { name: 'News' },
        { name: 'Weather'},
      ],
    }
}

module.exports = {
    swagger_options
}