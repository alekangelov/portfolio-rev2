import { About, Landing, Layout, Loader } from "@components";

function App() {
  return (
    <>
      <Loader />
      <Layout>
        <Landing />
        <About />
      </Layout>
    </>
  );
}

export default App;
