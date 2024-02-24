import "./App.css";
import { AppRoute } from "./Routes";
import React from "react";
import { Toaster } from "react-hot-toast";
import 'swiper/css';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: 4000,
          style: {
            boxShadow: `none`,
            borderRadius: `2px`,
            fontSize: `16px`,
            fontFamily: `Barlow`,
            fontWeight: `600`,
            maxWidth: `unset`,
            flexDirection: `row-reverse`,
          },
          success: {
            style: {
              backgroundColor: `#ADFFB6`,
              color: `#131A23`,
            },
          },
          error: {
            style: {
              backgroundColor: `#ADFFB6`,
              color: `#131A23`,
            },
          },
        }}
      />
      <QueryClientProvider client={queryClient}>
        <AppRoute />
      </QueryClientProvider>
    </>
  );
}

export default App;
