import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Architects from './components/Architects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplineBackground from './components/SplineBackground';
import ClientInteractions from './components/ClientInteractions';

export default function Home() {
  return (
    <>
      {/* 3D Spline Background - Rendered below content level */}
      <SplineBackground />
      <ClientInteractions />

      {/* Main Content sits on top recursively via z-index set in globals.css */}
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Architects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
