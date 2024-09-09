import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import GlobalStyle from "@/styles/globalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HelloWorld from "@/components/HelloWorld";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const routes = [
  {
    path: "/",
    element: <HelloWorld />,
  },
];

const router = createBrowserRouter(routes, {
  basename: "/",
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
