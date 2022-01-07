const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

// apollo server to use graphQL
const { ApolloServer } = require('apollo-server-express');

// introduce schema
const { typeDefs, resolvers } = require("./schemas")

// introduce authentication
const { authMiddleware } = require('./utils/auth')

const app = express();
const PORT = process.env.PORT || 3001;

// middleware + server connect
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

// build from the OG index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Now running API server on port ${PORT}!!!!`);
    console.log(`Now use GraphQL at http://localhost:${PORT}${server.graphqlPath}!!!!`);
  });
});