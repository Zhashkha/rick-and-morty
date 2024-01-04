import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Header from "../../components/general-components/header/header.component";
import Footer from "../../components/general-components/footer/footer.component";
import ErrorBoundaryFallback from "../../components/general-components/error-boundary-fallback/error-boundary-fallback.component";
import Spinner from "../../components/general-components/spinner/spinner.component";

const Root = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <ErrorBoundary
        FallbackComponent={ErrorBoundaryFallback}
        onReset={() => {
          navigate("/");
          window.location.reload();
        }}
      >
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default Root;
