import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Pagination } from "@mui/material";

import Title from "../../components/character-list/title-component";
import SearchBox from "../../components/character-list/search-box.component";
import Sidebar from "../../components/character-list/sidebar.component";
import CharacterGrid from "../../components/shared-compoents/character-grid/character-grid.component";
import Spinner from "../../components/general-components/spinner/spinner.component";
import {
  fetchCharactersInfoStart,
  fetchCharactersStart,
  setCharactersPage
} from "../../state-management/redux/characters/characters.action";
import {
  selectCharactersIsLoading,
  selectCharactersPagination,
  selectIsPageFetched
} from "../../state-management/redux/characters/characters.selector";

const CharacterList = () => {
  const loading = useSelector(selectCharactersIsLoading);
  const { pagesCount, pageIndex } = useSelector(selectCharactersPagination);
  const isPageFetched = useSelector(selectIsPageFetched(pageIndex));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersInfoStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isPageFetched) {
      dispatch(fetchCharactersStart(pageIndex));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setCharactersPage(page));
  };

  return (
    <Container sx={{ marginTop: 5 }}>
      <Title />
      <SearchBox />
      <Grid
        container
        spacing={2}
        // sx={{ marginTop: 2, border: "2px solid cyan" }}
        sx={{ marginTop: 2 }}
      >
        {/* <Grid item xs={3} sx={{ border: "2px solid green" }}> */}
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        {/* <Grid item xs={8} sx={{ border: "2px solid green" }}> */}
        <Grid item xs={8}>
          {loading ? (
            <Spinner />
          ) : (
            <Fragment>
              <CharacterGrid />
              <Pagination
                count={pagesCount}
                page={pageIndex}
                onChange={handleChange}
                color="primary"
                shape="rounded"
                sx={{ marginTop: 3 }}
              />
            </Fragment>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CharacterList;
