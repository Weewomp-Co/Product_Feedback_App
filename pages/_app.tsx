import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "jotai";
import { Suspense } from "react";

// Create a client
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
    </Suspense>
  );
}

export default MyApp;
