import React, { useEffect, useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Users } from 'lucide-react';
export function EarningsCalculator() {
  const IPHONE_PRICE = 120000;
  const DAYS = 14;
  const [subscriptionPrice, setSubscriptionPrice] = useState(1500); // RUB
  const [salesPerDay, setSalesPerDay] = useState(3);
  const dailyRevenue = subscriptionPrice * salesPerDay;
  const totalRevenue = dailyRevenue * DAYS;
  const progress = Math.min(totalRevenue / IPHONE_PRICE * 100, 100);
  const daysToGoal = Math.ceil(IPHONE_PRICE / dailyRevenue);
  return <section className="py-20 bg-slate-50" id="calculator">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Калькулятор успеха
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Посчитай, сколько нужно продавать подписок в день, чтобы забрать
            свой iPhone через 2 недели.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2">
            {/* Controls */}
            <div className="p-8 md:p-10 bg-white">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                Вводные данные
              </h3>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Цена подписки (₽)
                  </label>
                  <input type="range" min="500" max="5000" step="100" value={subscriptionPrice} onChange={e => setSubscriptionPrice(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-slate-400">500 ₽</span>
                    <span className="text-lg font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                      {subscriptionPrice} ₽
                    </span>
                    <span className="text-xs text-slate-400">5000 ₽</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Продаж в день
                  </label>
                  <input type="range" min="1" max="20" step="1" value={salesPerDay} onChange={e => setSalesPerDay(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600" />
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-slate-400">1</span>
                    <span className="text-lg font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-lg">
                      {salesPerDay}
                    </span>
                    <span className="text-xs text-slate-400">20</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="p-8 md:p-10 bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative z-10 space-y-6">
                <div>
                  <div className="text-slate-400 text-sm mb-1">
                    Доход в день
                  </div>
                  <div className="text-3xl font-bold flex items-center gap-2">
                    {dailyRevenue.toLocaleString()} ₽
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 text-sm mb-1">
                    Итого за 14 дней
                  </div>
                  <div className={`text-4xl font-bold ${totalRevenue >= IPHONE_PRICE ? 'text-green-400' : 'text-white'}`}>
                    {totalRevenue.toLocaleString()} ₽
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Цель: {IPHONE_PRICE.toLocaleString()} ₽
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Прогресс к iPhone 15 Pro</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${totalRevenue >= IPHONE_PRICE ? 'bg-green-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'}`} style={{
                    width: `${progress}%`
                  }}></div>
                  </div>
                  {totalRevenue < IPHONE_PRICE ? <p className="text-xs text-orange-400 mt-2 flex items-center gap-1">
                      Нужно еще{' '}
                      {daysToGoal > DAYS ? 'больше усилий!' : `${daysToGoal} дней в таком темпе`}
                    </p> : <p className="text-xs text-green-400 mt-2 flex items-center gap-1">
                      🎉 Цель достигнута! Ты сможешь купить iPhone!
                    </p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}