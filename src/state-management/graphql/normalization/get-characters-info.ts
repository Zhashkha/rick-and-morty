import { Info, Maybe } from "../api-generated/graphql";

export type GetCharactersInfoNormalized = {
  itemsCount: number;
  pagesCount: number;
};

export const getCharactersInfoNormalization = (
  info: Maybe<Info>
): GetCharactersInfoNormalized => ({
  itemsCount: info?.count || 0,
  pagesCount: info?.pages || 0
});
