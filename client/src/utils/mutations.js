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



// saveBook



// removeBook