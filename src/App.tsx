/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { ProductsTeaserBanner } from './components/sections/ProductsTeaserBanner';
import { ImpactSection } from './components/sections/ImpactSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { AISolutionAdvisor } from './components/AISolutionAdvisor';
import { TeamSection } from './components/sections/TeamSection';
import { HowWeWorkSection } from './components/sections/HowWeWorkSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { WhatsAppFloatingButton } from './components/WhatsAppChatTrigger';
import { ServiceItem } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'products'>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [estimatorInitialServiceId, setEstimatorInitialServiceId] = useState<string>('ai');

  // Handle URL hash changes for direct linking (#products or #products-apk)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#products' || hash === '#products-apk' || hash === '#apk-install-guide') {
        setCurrentView('products');
        if (hash === '#apk-install-guide') {
          setTimeout(() => {
            document.getElementById('apk-install-guide')?.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (hash === '' || hash === '#home') {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateView = (view: 'home' | 'products') => {
    setCurrentView(view);
    if (view === 'products') {
      window.location.hash = 'products';
    } else {
      if (window.location.hash === '#products' || window.location.hash === '#products-apk') {
        try {
          window.history.pushState(null, '', window.location.pathname);
        } catch {
          window.location.hash = '';
        }
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEstimator = (serviceId?: string) => {
    if (serviceId) {
      setEstimatorInitialServiceId(serviceId);
    }
    setIsEstimatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigateView={handleNavigateView}
        onOpenEstimator={() => handleOpenEstimator()}
      />

      {/* Main Content Rendered conditionally based on currentView */}
      <main>
        {currentView === 'home' ? (
          <>
            {/* 3D Animated Hero Section */}
            <HeroSection
              onOpenEstimator={() => handleOpenEstimator()}
              onOpenProducts={() => handleNavigateView('products')}
            />

            {/* 10 Core Services & Capabilities Grid */}
            <ServicesSection
              onSelectService={(service) => setSelectedService(service)}
              onOpenEstimator={(serviceId) => handleOpenEstimator(serviceId)}
            />

            {/* Clean Products Teaser Banner with CTA to open dedicated products page */}
            <ProductsTeaserBanner onOpenProducts={() => handleNavigateView('products')} />

            {/* Measurable Impact & Live Multi-Agent Simulator */}
            <ImpactSection />

            {/* Selected Outcomes & Portfolio Projects */}
            <PortfolioSection onOpenEstimator={() => handleOpenEstimator()} />

            {/* Smart AI Solution Advisor for Domains */}
            <AISolutionAdvisor onOpenEstimator={(serviceId) => handleOpenEstimator(serviceId)} />

            {/* Senior Engineering Minds & Leadership */}
            <TeamSection />

            {/* Operating Rhythm: 6 Principles & 3 Working Models */}
            <HowWeWorkSection onOpenEstimator={(serviceId) => handleOpenEstimator(serviceId)} />

            {/* Common Client Questions & FAQ Accordion */}
            <FAQSection />

            {/* Project Brief Submission & Direct WhatsApp Portal */}
            <ContactSection />
          </>
        ) : (
          /* Dedicated Products, Softwares & APK Hub Page */
          <ProductsSection
            onBackToHome={() => handleNavigateView('home')}
            onOpenEstimator={() => handleOpenEstimator()}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onOpenProducts={() => handleNavigateView('products')}
        onNavigateHome={() => handleNavigateView('home')}
      />

      {/* Floating Instant WhatsApp Trigger */}
      <WhatsAppFloatingButton />

      {/* Service Deep Dive Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenEstimator={(serviceId) => handleOpenEstimator(serviceId)}
      />

      {/* Interactive Project Scope & Budget Estimator Modal */}
      <ProjectEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        initialServiceId={estimatorInitialServiceId}
      />
    </div>
  );
}
