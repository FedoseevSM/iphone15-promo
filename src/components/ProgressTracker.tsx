import React from 'react';
import { Flag, Gift, Smartphone } from 'lucide-react';
export function ProgressTracker() {
  const milestones = [{
    percent: 0,
    label: 'Старт',
    amount: '0 ₽'
  }, {
    percent: 25,
    label: 'AirPods',
    amount: '30,000 ₽'
  }, {
    percent: 50,
    label: 'Apple Watch',
    amount: '60,000 ₽'
  }, {
    percent: 75,
    label: 'iPad Air',
    amount: '90,000 ₽'
  }, {
    percent: 100,
    label: 'iPhone 15 Pro',
    amount: '120,000 ₽'
  }];
  return <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Визуализация цели
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Каждая продажа приближает тебя к мечте. Не останавливайся.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative px-4 md:px-0">
          {/* Progress Bar Background */}
          <div className="h-4 bg-slate-800 rounded-full w-full absolute top-1/2 -translate-y-1/2 z-0"></div>

          {/* Active Progress (Simulated at 0 for start) */}
          <div className="h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-[5%] absolute top-1/2 -translate-y-1/2 z-0 shadow-[0_0_20px_rgba(147,51,234,0.5)]"></div>

          {/* Milestones */}
          <div className="relative z-10 flex justify-between w-full">
            {milestones.map((milestone, idx) => <div key={idx} className="flex flex-col items-center group cursor-default">
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${idx === 0 ? 'bg-blue-600 border-blue-400 scale-110 shadow-lg shadow-blue-500/50' : idx === 4 ? 'bg-slate-800 border-purple-500 hover:bg-purple-900' : 'bg-slate-800 border-slate-600 hover:border-slate-400'}`}>
                  {idx === 0 ? <Flag className="w-5 h-5 md:w-6 md:h-6 text-white" /> : idx === 4 ? <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-purple-400" /> : <Gift className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />}
                </div>

                <div className="mt-4 text-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="text-xs md:text-sm font-bold text-slate-300">
                    {milestone.label}
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500">
                    {milestone.amount}
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-2xl font-bold text-xl shadow-xl shadow-purple-600/20 transform transition-all hover:scale-105 active:scale-95">
            Принять вызов и начать
          </button>
          <p className="mt-4 text-sm text-slate-500">
            Регистрация займет 1 минуту. Никаких вложений не требуется.
          </p>
        </div>
      </div>
    </section>;
}