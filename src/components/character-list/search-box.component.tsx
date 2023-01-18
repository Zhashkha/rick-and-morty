import { Stack, TextField, Button } from "@mui/material";

const SearchBox = () => {
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
      />
      <Button variant="contained">Search</Button>
    </Stack>
  );
};

export default SearchBox;
