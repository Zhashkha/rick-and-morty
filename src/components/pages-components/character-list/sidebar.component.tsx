import { Container } from "@mui/material";

import Filters from "./filters.component";

const Sidebar = () => {
  return (
    <Container sx={{ marginTop: 3 }}>
      <Filters />
    </Container>
  );
};

export default Sidebar;
