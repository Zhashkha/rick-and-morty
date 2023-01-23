import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query ($page: Int!) {
    characters (page: $page) {
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
