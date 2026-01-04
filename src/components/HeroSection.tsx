import React, { useEffect, useState } from 'react';
import { Timer, ArrowRight, Smartphone } from 'lucide-react';
export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  // Simple countdown simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return {
          ...prev,
          seconds: prev.seconds - 1
        };
        if (prev.minutes > 0) return {
          ...prev,
          minutes: prev.minutes - 1,
          seconds: 59
        };
        if (prev.hours > 0) return {
          ...prev,
          hours: prev.hours - 1,
          minutes: 59,
          seconds: 59
        };
        if (prev.days > 0) return {
          ...prev,
          days: prev.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59
        };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <section className="relative overflow-hidden bg-slate-900 text-white py-20 lg:py-32">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-200">
                Челлендж запущен
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Твой iPhone 15 Pro <br />
              <span className="text-blue-500">через 14 дней</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Зарабатывай на перепродаже подписок на модули для сайтов. Простой
              план, реальная цель, быстрый результат.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2 w-full sm:w-auto justify-center">
                Начать зарабатывать
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-lg transition-all backdrop-blur-sm w-full sm:w-auto">
                Узнать подробнее
              </button>
            </div>
          </div>

          {/* Visual / Timer */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative bg-slate-800/50 border border-slate-700 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-500 to-blue-600 p-4 rounded-2xl shadow-lg transform rotate-12">
                <Smartphone className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-6 text-center text-slate-200">
                До конца челленджа
              </h3>

              <div className="grid grid-cols-4 gap-4 text-center mb-8">
                {[{
                label: 'Дней',
                value: timeLeft.days
              }, {
                label: 'Часов',
                value: timeLeft.hours
              }, {
                label: 'Минут',
                value: timeLeft.minutes
              }, {
                label: 'Секунд',
                value: timeLeft.seconds
              }].map((item, i) => <div key={i} className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                    <div className="text-2xl md:text-3xl font-bold text-blue-400 font-mono">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {item.label}
                    </div>
                  </div>)}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm text-slate-400">
                  <span>Цель: 120,000 ₽</span>
                  <span>iPhone 15 Pro</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-[5%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <p className="text-center text-sm text-slate-400">
                  Старт сегодня. Ты с нами?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}