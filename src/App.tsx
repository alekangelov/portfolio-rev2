import { Layout, Loader } from "@components";
import { clientHeight } from "@utils";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty(
      clientHeight.set,
      `${window.innerHeight}px`
    );
  }, []);
  return (
    <>
      <Loader />
      <Layout />
    </>
  );
}

export default App;
