import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
        }
        location {
          id
          name
        }
        image
        episode {
          id
          name
        }
      }
    }
  }
`;

export default GET_CHARACTERS;
