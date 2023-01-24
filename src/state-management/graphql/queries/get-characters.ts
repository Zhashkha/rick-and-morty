import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query ($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        episode {
          name
        }
      }
    }
  }
`;

export default GET_CHARACTERS;
