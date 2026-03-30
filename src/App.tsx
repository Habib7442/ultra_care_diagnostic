import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import ReportDownload from './components/ReportDownload';
import Doctors from './components/Doctors';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <BookingForm />
        <ReportDownload />
        <Doctors />
        <TrustSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
