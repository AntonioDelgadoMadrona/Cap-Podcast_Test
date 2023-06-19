// DEPENDENCIES
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// COMPONENTS
import { Layout } from "./layout/layout";
import { PodcastList } from "./views/podcast-list/PodcastList";
import { PodcastInfo } from "./views/podcast-info/PodcastInfo";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PodcastList />} />
          <Route path="/podcast/:id" element={<PodcastInfo />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
