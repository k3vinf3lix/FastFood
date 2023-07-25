import React, { useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  return (
     <Component {...pageProps} />
  );
}

export default MyApp;
