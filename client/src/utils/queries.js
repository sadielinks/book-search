import { gql } from "@apollo/client";

// GET_ME will execute the "me" query set up with apollo server
export const GET_ME = gql`
{
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        # _id
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;