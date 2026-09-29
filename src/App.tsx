import React from 'react';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PainVsSolution } from './components/PainVsSolution';
import { VideoShowcase } from './components/VideoShowcase';
import { InteractiveChatbotDemo } from './components/InteractiveChatbotDemo';
import { HowItWorks } from './components/HowItWorks';
import { OrderSection } from './components/OrderSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CommunitySection } from './components/CommunitySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { LiveSalesNotification } from './components/LiveSalesNotification';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-black">
      {/* Top Banner with Countdown */}
      <TopBanner />

      {/* Main Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Pain Points vs Solution + Interactive ROI Calculator */}
      <PainVsSolution />

      {/* 10+ Video Showcase with 9:16 cards and prompt modal */}
      <VideoShowcase />

      {/* Interactive Live Chatbot Demo Simulator */}
      <InteractiveChatbotDemo />

      {/* 3-Step Simple Workflow */}
      <HowItWorks />

      {/* Order & Payment Section with VietQR + 1-Click Copy */}
      <OrderSection />

      {/* Testimonials & Reviews */}
      <TestimonialsSection />

      {/* Community Section */}
      <CommunitySection />

      {/* FAQ Accordion Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <StickyMobileBar />

      {/* Live Sales Notification Toast */}
      <LiveSalesNotification />
    </div>
  );
}
