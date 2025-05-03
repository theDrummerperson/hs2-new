import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div id="outer-container">
      <Head>
        <title>Holland Street</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Page Content for react-burger-menu to wrap around */}
      <main id="page-wrap" className="relative">
        {/* Site Header with Logo + Menu */}
        <Header />

        {/* Your Page Sections */}
       
      </main>

    
    </div>
  );
}
