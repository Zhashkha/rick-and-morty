import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query ($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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
