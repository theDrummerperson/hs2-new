import "../styles/globals.css";
import "react-image-gallery/styles/css/image-gallery.css"; // third-party global
import "../styles/carousel.css"; // your custom global carousel styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
