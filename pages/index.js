
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryLightbox from "../components/GalleryLightbox";
import TestImage from "../components/TestImage";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div id="outer-container">
      <div id="top" />

      <Head>
        <title>Holland Street</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="page-wrap" className="relative">
        <Header />

        {/* About Section */}
        <section id="about" className="relative text-[#222] min-h-screen sm:min-h-[800px]">
          <div className="absolute inset-0 z-0 bg-hero bg-cover bg-center bg-no-repeat" />

          <div className="absolute bottom-0 left-0 z-10 m-6 bg-white/90 rounded-xl shadow-lg p-6 max-w-md space-y-5 leading-relaxed">
            <h1 className="text-3xl font-bold text-[#111]">A home for radical imagination.</h1>
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

        {/* Projects Section */}
        <section id="projects" className="relative min-h-screen px-6 py-24 bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#F9F6F1] to-[#F9F6F1] opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight text-[#111] sm:text-5xl">Our Promise</h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Cultural interventions that animate public space, challenge narratives, and celebrate community.
              </p>
            </div>

            {/* Lightbox Gallery */}
            <div className="mb-12">
              {/* <GalleryLightbox /> */} 

<GalleryLightbox />

            
            </div>

            <div className="max-w-3xl mx-auto text-center text-[#333] text-base sm:text-lg leading-relaxed px-4">
              <p className="mb-6">
                At <span className="font-semibold text-[#8A0303]">Holland Street</span>, community engagement is not an outcome—it’s the method.
                We activate public space with cultural programming that honors the rich heritage of our communities and invites collective celebration.
              </p>
              <p>
                Whether through performance, conceptual installations, or public art, our projects are designed to
                <span className="italic"> uplift</span>, <span className="italic"> reflect</span>, and <span className="italic">transform</span>.
                Holland Street reclaims the commons—to rewrite narratives and uplift voices.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen px-6 py-20">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p>Let’s connect. Here’s your contact information.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
