import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "../../components/shared-components/error-image/error-image.styles";
import ErrorImage from "../../components/shared-components/error-image/error-image.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl={ErrorImage} />
      <ErrorImageText>Sorry, page not found.</ErrorImageText>
      <Button variant="outlined" onClick={() => navigate("/")}>
        Home
      </Button>
    </ErrorImageOverlay>
  );
};

export default NotFound;
