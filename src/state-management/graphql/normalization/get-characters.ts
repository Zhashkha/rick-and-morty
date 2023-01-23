import { Character, Maybe } from "../api-generated/graphql";

export type CharactersNormalized =
  | {
      [key: number]: Array<Character>;
    }
  | {};

export const charactersNormalize = (
  pageIndex: number,
  characters: Maybe<Array<Maybe<Character>>>
): CharactersNormalized => {
  return {
    [pageIndex]: characters
  };
};
