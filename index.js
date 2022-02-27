const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const {connectDB} = require('./db');


const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

const start = async () => {
  const app = express();
  connectDB();
  
  app.get('/', (req, res) => {
    res.send('Hello World');
  });


  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  //404 response
  app.use((req, res, next) => {
    res.status(404).send('404: Page not found');
  });

  app.listen(3000, () => {
    console.log('Listening on Port 3000');
  });
};

start();
