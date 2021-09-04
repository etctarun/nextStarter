import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

//redux
import { useStore } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,height=device-height, initial-scale=1.0, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
