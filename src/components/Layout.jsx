import NewsTicker from "./NewsTicker";
import Header from "./Header";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <NewsTicker />
      <Header />
      <main className="relative z-0 pt-32">
        <Gallery />
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
