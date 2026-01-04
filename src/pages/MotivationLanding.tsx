import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { EarningsCalculator } from '../components/EarningsCalculator';
import { ProductShowcase } from '../components/ProductShowcase';
import { ActionPlan } from '../components/ActionPlan';
import { ProgressTracker } from '../components/ProgressTracker';
export function MotivationLanding() {
  return <div className="min-h-screen bg-white font-sans text-slate-900">
      <HeroSection />
      <ProductShowcase />
      <EarningsCalculator />
      <ActionPlan />
      <ProgressTracker />

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            &copy; 2024 iPhone Challenge. Все права защищены.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Правила участия
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Поддержка
            </a>
          </div>
        </div>
      </footer>
    </div>;
}