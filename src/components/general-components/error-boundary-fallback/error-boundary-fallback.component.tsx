import { FallbackProps } from "react-error-boundary";
import Button from "@mui/material/Button";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./error-boundary-fallback.styles";
import ErrorBoundaryFallbackImage from "./error-boundary-fallback.png";

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
