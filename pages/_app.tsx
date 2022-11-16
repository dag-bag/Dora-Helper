/** @format */

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { selectedTheme } from "../libs/pageData";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  // const [theme, setTheme] = useState("dark");

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* @ts-ignore*/}
        <Hydrate state={pageProps.dehydratedState}>
          <Navbar />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
