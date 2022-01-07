const { gql } = require('apollo-server-express');

// define typedefs (based on assignment README)
const typeDefs = gql`
type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  


`;

module.exports = typeDefs