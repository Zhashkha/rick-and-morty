import { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Badge,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { ExpandMore } from "./character-grid.styles";

const CharacterGrid = ({ data }: { data: any }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
    // characters: { info, results }
    characters: { results }
  } = data;

  return (
    <Grid container spacing={3}>
      {results.map((character: any) => {
        const {
          id,
          name,
          status,
          species,
          type,
          gender,
          origin: { name: originName },
          location: { name: locationName },
          episode: episodes,
          image
        } = character;

        const badgeColor =
          status === "Alive"
            ? "success"
            : status === "Dead"
            ? "error"
            : "primary";

        return (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Badge
              variant="standard"
              badgeContent={status}
              overlap="circular"
              color={badgeColor}
              sx={{ "& .MuiBadge-badge": { top: 25, right: "15%" } }}
            >
              <Card sx={{ border: "2px solid blue", borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={image}
                  alt={name}
                />
                <CardContent sx={{ paddingBottom: 0 }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {name}
                  </Typography>
                  <Typography variant="body2" mt={2}>
                    Last known location
                  </Typography>
                  <Typography variant="h6">{locationName}</Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ paddingTop: 0 }}>
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
                  <CardContent sx={{ paddingTop: 0 }}>
                    <Typography component="div">
                      <Box
                        sx={{ display: "inline-block", fontWeight: "bold" }}
                        mr={1}
                      >
                        Gender:
                      </Box>
                      {gender}
                    </Typography>
                    <Typography component="div">
                      <Box
                        sx={{ display: "inline-block", fontWeight: "bold" }}
                        mr={1}
                      >
                        Species:
                      </Box>
                      {species}
                    </Typography>
                    <Typography component="div">
                      <Box
                        sx={{ display: "inline-block", fontWeight: "bold" }}
                        mr={1}
                      >
                        Type:
                      </Box>
                      {type || "unknown"}
                    </Typography>
                    <Typography component="div">
                      <Box
                        sx={{ display: "inline-block", fontWeight: "bold" }}
                        mr={1}
                      >
                        Origin:
                      </Box>
                      {originName}
                    </Typography>
                    <Typography component="div">
                      <Box
                        sx={{ display: "inline-block", fontWeight: "bold" }}
                        mr={1}
                      >
                        Appears on:
                      </Box>
                      {episodes.length} episodes
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Badge>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CharacterGrid;
