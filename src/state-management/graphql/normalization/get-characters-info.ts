import { CharactersReducer } from "../../redux/characters/characters.reducer";
import { Info, Maybe } from "../api-generated/graphql";

export type CharactersInfoNormalized = Omit<
  CharactersReducer["pagination"],
  "itemsPerPage" | "pageIndex"
>;

export const charactersInfoNormalize = (
  info: Maybe<Info>
): CharactersInfoNormalized => {
  return { itemsCount: info?.count || 0, pagesCount: info?.pages || 0 };
};
