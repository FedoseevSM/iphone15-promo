import React from 'react';
import { CheckCircle2, Rocket, Target, Trophy } from 'lucide-react';
const steps = [{
  days: 'Дни 1-3',
  title: 'Подготовка и Старт',
  description: 'Регистрация в партнерке, изучение продукта, подготовка скриптов продаж.',
  icon: <Rocket className="w-6 h-6 text-white" />,
  color: 'bg-blue-500',
  tasks: ['Изучить функционал виджетов', 'Составить список из 50 потенциальных клиентов', 'Подготовить шаблоны сообщений']
}, {
  days: 'Дни 4-7',
  title: 'Первые продажи',
  description: 'Активный аутрич, первые звонки и переписки. Цель: закрыть первые 3-5 сделок.',
  icon: <Target className="w-6 h-6 text-white" />,
  color: 'bg-purple-500',
  tasks: ['Отправить 20 предложений в день', 'Провести 5 демо-показов', 'Получить первые оплаты']
}, {
  days: 'Дни 8-14',
  title: 'Масштабирование',
  description: 'Анализ того, что работает. Увеличение объема контактов. Дожим сделок.',
  icon: <Trophy className="w-6 h-6 text-white" />,
  color: 'bg-green-500',
  tasks: ['Увеличить рассылку в 2 раза', 'Повторный контакт с думающими', 'Фиксация прибыли']
}];
export function ActionPlan() {
  return <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Твой план на 14 дней
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Четкая стратегия действий. Просто следуй шагам и получай результат.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 md:hidden"></div>

            <div className="space-y-12">
              {steps.map((step, idx) => <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Icon Marker */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10" style={{
                backgroundColor: idx === 0 ? '#3b82f6' : idx === 1 ? '#a855f7' : '#22c55e'
              }}>
                    {step.icon}
                  </div>

                  {/* Content Card */}
                  <div className="ml-20 md:ml-0 md:w-1/2 md:px-12">
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${step.color}`}>
                        {step.days}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 mb-4 text-sm">
                        {step.description}
                      </p>
                      <div className="space-y-2">
                        {step.tasks.map((task, tIdx) => <div key={tIdx} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span>{task}</span>
                          </div>)}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for the other side of the timeline */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}