import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";

import Title from "../../components/character-list/title-component";
import SearchBox from "../../components/character-list/search-box.component";
import Sidebar from "../../components/character-list/sidebar.component";
import CharacterGrid from "../../components/shared-compoents/character-grid/character-grid.component";
import Spinner from "../../components/general-components/spinner/spinner.component";
import { fetchCharactersStart } from "../../state-management/redux/characters/characters.action";
import { selectIsLoading } from "../../state-management/redux/characters/characters.selector";

const CharacterList = () => {
  const loading = useSelector(selectIsLoading);

  // const { page } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {loading ? <Spinner /> : <CharacterGrid />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CharacterList;
