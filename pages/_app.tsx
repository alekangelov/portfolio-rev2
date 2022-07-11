import { Layout } from "components";
import type { AppProps } from "next/app";
import * as styles from "styles";

// gotta do this so they're "used" and propagate...
console.log(styles.globals, styles.resets);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
