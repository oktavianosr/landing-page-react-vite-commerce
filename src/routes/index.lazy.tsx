import { createLazyFileRoute } from '@tanstack/react-router';

import About from '@/features/about';
import Contact from '@/features/contact';
import Hero from '@/features/hero';
import MenuSection from '@/features/menu';
import Testimonials from '@/features/testimonials';
import WhyUs from '@/features/why-us';

export const Route = createLazyFileRoute('/')({
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <MenuSection />
      <Testimonials />
      <Contact />
    </>
  );
}
