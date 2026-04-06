"use client"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import About from './components/About';
import ProgramDetails from './components/ProgramDetails';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Register from'./components/Register';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Benefits />
        <About />
        <ProgramDetails />
        <Testimonials />
        <Cta />
            <Register />
      </main>
      <Footer />
    </div>
  );
}