import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "jotai";
import { Suspense } from "react";

// Create a client
export const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Suspense>
          <Component {...pageProps} />
        </Suspense>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
