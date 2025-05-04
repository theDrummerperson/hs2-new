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
      
        <section id="about" className="relative text-[#222] min-h-screen sm:min-h-[800px]">
  {/* Background image */}
  <div className="absolute inset-0 z-0 bg-hero bg-cover bg-center bg-no-repeat" />

  {/* Text Content in Front, Bottom-Left */}
  <div className="absolute bottom-0 left-0 z-10 m-6 bg-white/90 rounded-xl shadow-lg p-6 max-w-md space-y-5 leading-relaxed">
    <h1 className="text-3xl font-bold text-[#111]">
      A home for radical imagination.
    </h1>

    <p className="text-sm text-[#444]">
      We craft <span className="font-semibold text-[#8A0303]">digital stories</span>,
      <span className="font-semibold text-[#8A0303]"> live gatherings</span>, and
      <span className="font-semibold text-[#8A0303]"> communal rituals</span> that center liberation—not consumption.
    </p>

    <p className="text-sm text-[#444]">
      Rooted in <span className="italic">freedom</span> and
      <span className="italic"> sovereignty</span>, Holland Street is both a cultural studio and a public house
      for visionaries, refugees, and builders of new worlds.
    </p>

    <p className="text-md font-bold text-[#8A0303] tracking-wide uppercase">
      We don’t sell belonging —
      <br className="sm:hidden" />
      we cultivate becoming.
    </p>
  </div>
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
