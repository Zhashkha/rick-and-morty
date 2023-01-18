import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Typography variant="body2" color="text.secondary" mt={5} align="center">
      Made with 💖 from Alex ⌛ {new Date().getFullYear()} ⌛
    </Typography>
  );
};

export default Footer;
