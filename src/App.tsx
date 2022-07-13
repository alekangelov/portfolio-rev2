import { Landing, Layout } from "@components";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Landing />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
