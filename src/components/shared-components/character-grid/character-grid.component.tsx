import { useState } from "react";
import { useSelector } from "react-redux";
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

import {
  selectCharactersByPage,
  selectCharactersPageIndex
} from "../../../state-management/redux/characters/characters.selector";
import { ExpandMore } from "./character-grid.styles";
import { Character } from "../../../state-management/graphql/api-generated/graphql";

const CharacterGrid = () => {
  const [cardExpanded, setCardExpanded] = useState<{
    [key: string]: boolean;
  }>();
  const pageIndex: number = useSelector(selectCharactersPageIndex);
  const characters: Character[] = useSelector(
    selectCharactersByPage(pageIndex)
  );

  const handleExpandClick = (id: string) => {
    setCardExpanded({
      ...cardExpanded,
      [id]: !((cardExpanded && cardExpanded[id]) || false)
    });
  };

  return (
    <Grid container spacing={3}>
      {characters?.map((character: Character) => {
        const {
          id,
          name,
          status,
          species,
          type,
          gender,
          origin,
          location,
          episode: episodes,
          image
        } = character;

        // typescript checking, since "id" is used as an index
        if (!id) {
          return null;
        }

        const originName = origin?.name,
          locationName = location?.name;

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
                  image={image || ""}
                  alt={name || ""}
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
                    expand={(cardExpanded && cardExpanded[id]) || false}
                    onClick={() => handleExpandClick(id)}
                    aria-expanded={(cardExpanded && cardExpanded[id]) || false}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse
                  in={(cardExpanded && cardExpanded[id]) || false}
                  timeout="auto"
                  unmountOnExit
                >
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
