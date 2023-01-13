import { Fragment, Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import ErrorBoundaryFallback from "../../components/error-boundary-fallback/error-boundary-fallback.component";
import Spinner from "../../components/spinner/spinner.component";

const Root = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Header />
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
