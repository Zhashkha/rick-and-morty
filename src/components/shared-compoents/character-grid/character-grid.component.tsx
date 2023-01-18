import { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { ExpandMore } from "./character-grid.styles";

const CharacterGrid = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card>
          <CardMedia
            component="img"
            height="194"
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick Sanchez"
          />
          <CardContent>Rick Sanchez</CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CharacterGrid;
