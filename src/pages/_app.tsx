import "@/styles/globals.css";
import "@/styles/blogs.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
