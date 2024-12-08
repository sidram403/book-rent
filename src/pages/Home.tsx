import Hero from '../components/Hero';
import PropertyTypes from '../components/PropertyTypes';
import PropertyListing from '../components/PropertyListing';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <PropertyTypes />
      <PropertyListing />
      <Testimonials />
    </div>
  );
}