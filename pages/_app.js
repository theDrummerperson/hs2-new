// pages/_app.js

import "../styles/globals.css";
import "yet-another-react-lightbox/styles.css";


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
