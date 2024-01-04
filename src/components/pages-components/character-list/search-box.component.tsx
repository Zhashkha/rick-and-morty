import { useDispatch, useSelector } from "react-redux";
import { Stack, TextField, Button } from "@mui/material";

import { selectCharactersFilter } from "../../../state-management/redux/characters/characters.selector";
import { setCharactersFilter } from "../../../state-management/redux/characters/characters.action";

const SearchBox = () => {
  const { name } = useSelector(selectCharactersFilter);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCharactersFilter({ name: event.target.value }));
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      spacing={{ xs: 1, sm: 2, md: 4 }}
      mt={2}
    >
      <TextField
        sx={{ width: { xs: "100%", sm: "50%" } }}
        label="Search by the character name"
        type="search"
        value={name}
        onChange={handleChange}
      />
      <Button variant="contained">Search</Button>
    </Stack>
  );
};

export default SearchBox;
