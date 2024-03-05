"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { worker } from "@uidotdev/react-query-api";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  useEffect(() => {
    new Promise((res) => setTimeout(res, 50))
      .then(() =>
        worker.start({
          quiet: true,
          onUnhandledRequest: "bypass",
        })
      )
      .then(() => {
        // Prefetch initial data if needed
        // queryCache.prefetchQuery('yourQueryKey', yourFetchFunction);
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
