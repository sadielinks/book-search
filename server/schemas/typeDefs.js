const { gql } = require('apollo-server-express');

// define typedefs
const typeDefs = gql`
type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }



`;

module.exports = typeDefs