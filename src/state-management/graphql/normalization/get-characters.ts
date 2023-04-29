import { Character, Maybe } from "../api-generated/graphql";

export type GetCharactersNormalized =
  | {
      [key: number]: Array<Character>;
    }
  | {};

export const getCharactersNormalization = (
  pageIndex: number,
  characters: Maybe<Array<Maybe<Character>>>
): GetCharactersNormalized =>
  characters
    ? {
        [pageIndex]: characters.filter(Boolean)
      }
    : {};
