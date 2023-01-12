import { Fragment, Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Navigation from "../../components/navigation/navigation.component";
import Footer from "../../components/footer/footer.component";
import ErrorBoundaryFallback from "../../components/error-boundary-fallback/error-boundary-fallback.component";
import Spinner from "../../components/spinner/spinner.component";

const Root = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Navigation />
      <ErrorBoundary
        FallbackComponent={ErrorBoundaryFallback}
        onReset={() => {
          navigate("/");
        }}
      >
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </Fragment>
  );
};

export default Root;
