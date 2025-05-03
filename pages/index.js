import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div id="outer-container">
      {/* 🔝 Anchor for "Back to Top" link */}
      <div id="top" />

      <Head>
        <title>Holland Street</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Page Content for react-burger-menu to wrap around */}
      <main id="page-wrap" className="relative">
        <Header />

        {/* Your Page Sections */}
        {/* Example Sections */}
        <section id="about" className="min-h-screen px-6 py-20">
          <h1 className="text-4xl font-bold mb-4">About</h1>
          <p>Empty.</p>
        </section>

        <section id="projects" className="min-h-screen px-6 py-20 bg-gray-50">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p>Empty</p>
        </section>

        <section id="contact" className="min-h-screen px-6 py-20">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p>Let’s connect. Here’s your contact information.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
