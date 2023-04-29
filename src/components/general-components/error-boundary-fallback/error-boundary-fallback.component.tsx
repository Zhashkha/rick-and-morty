import { FallbackProps } from "react-error-boundary";
import Button from "@mui/material/Button";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "../../shared-components/error-image/error-image.styles";
import ErrorBoundaryFallbackImage from "../../shared-components/error-image/error-image.png";

const ErrorBoundaryFallback = ({
  error,
  resetErrorBoundary
}: FallbackProps) => {
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl={ErrorBoundaryFallbackImage} />
      <ErrorImageText>Sorry, this page is missed.</ErrorImageText>
      <Button variant="outlined" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </ErrorImageOverlay>
  );
};

export default ErrorBoundaryFallback;
