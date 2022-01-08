import { gql } from "apollo-server-express";

// loginUser
export const LOGIN_USER = gql`
mutation loginUser ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

// addUser
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          authors
          bookId
          image
          link
          title
          description
        }
      }
    }
  }
`
// saveBook
export const SAVE_BOOK = gql`
  mutation saveBook($input: SavedBookInput) {
    saveBook (input: $input)
    {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`

// removeBook