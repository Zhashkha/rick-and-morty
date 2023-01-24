import { gql } from "@apollo/client";

const GET_CHARACTERS_INFO = gql`
  query ($filter: FilterCharacter) {
    characters(filter: $filter) {
      info {
        count
        pages
      }
    }
  }
`;

export default GET_CHARACTERS_INFO;
