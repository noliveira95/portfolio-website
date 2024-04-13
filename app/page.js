import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Portfolio from '@/components/Portfolio/Portfolio';
// import Skills from '@/components/Skills/Skills';
// import Testimonials from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}
