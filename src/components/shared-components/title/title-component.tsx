import { Box, Typography } from "@mui/material";

const Title = ({ text }: { text: string }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4">{text}</Typography>
    </Box>
  );
};

export default Title;
