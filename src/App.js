import "./App.css";
import { AppRoute } from "./Routes";
import React from "react";
import { Toaster } from "react-hot-toast";

function App() {
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
      <AppRoute />
    </>
  );
}

export default App;
