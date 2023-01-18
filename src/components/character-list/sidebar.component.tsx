import { Grid } from "@mui/material";

import PaginationSettings from "../shared-compoents/pagination-settings.component";
import Filters from "./filters.component";

const Sidebar = () => {
  return (
    // <Grid container direction="column" sx={{ border: "3px solid red" }}>
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <PaginationSettings />
      </Grid>
      <Grid item>
        <Filters />
      </Grid>
    </Grid>
  );
};

export default Sidebar;
