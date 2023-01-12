import { Fragment } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/episodes">Episodes</Link>
      <Link to="/locations">Locations</Link>
    </Fragment>
  );
};

export default Navigation;
