import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Root from "./pages/root/root.component";

const NotFound = lazy(() => import("./pages/not-found/not-found.component"));
const CharacterList = lazy(
  () => import("./pages/character-list/character-list.component")
);
const EpisodeList = lazy(
  () => import("./pages/episode-list/episode-list.component")
);
const LocationList = lazy(
  () => import("./pages/location-list/location-list.component")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
            <Route index element={<CharacterList />} />
            <Route path="characters" element={<CharacterList />} />
            <Route path="episodes" element={<EpisodeList />} />
            <Route path="locations" element={<LocationList />} />
            <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
