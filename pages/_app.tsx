import { Layout } from "components";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import * as styles from "styles";

// gotta do this so they're "used" and propagate...
const log = (...args: any) => void 0;
log(styles.globals, styles.resets);

function MyApp({ Component, pageProps }: AppProps) {
  // if (typeof window === "undefined") return;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
