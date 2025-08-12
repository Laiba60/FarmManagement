const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Farm Management API',
      version: '1.0.0',
      description: 'API documentation for Farm Management system',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',  // apke API ka base URL
      },
    ],
  },
  apis: ['./routes/*.js'],  // jahan apke route files hain, yahan swagger comments likhoge
};

const specs = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = setupSwagger;
