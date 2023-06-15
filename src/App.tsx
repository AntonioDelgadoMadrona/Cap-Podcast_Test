// DEPENDENCIES
import { BrowserRouter } from "react-router-dom";
// COMPONENTS
import { Layout } from "./layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>Podcaster</Layout>;
    </BrowserRouter>
  );
}

export default App;
