// pages/_app.js
import "../styles/globals.css";

import "../components/GalleryLightbox.module.css"; // ✅ Move it here



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
