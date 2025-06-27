
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GameCategories from '@/components/GameCategories';
import ServiceListings from '@/components/ServiceListings';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <GameCategories />
      <ServiceListings />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
