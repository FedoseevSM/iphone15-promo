import React from 'react';
import { MessageSquare, BarChart3, Layout, Zap, Check } from 'lucide-react';
const products = [{
  title: 'Умный Онлайн-Чат',
  description: 'Виджет чата с поддержкой AI ответов. Увеличивает конверсию сайта на 20%.',
  price: '1,500 ₽/мес',
  icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
  features: ['AI автоответы', 'Сбор контактов', 'Кастомизация дизайна']
}, {
  title: 'SEO Аналитика',
  description: 'Простая панель аналитики для владельцев малого бизнеса. Все метрики на одном экране.',
  price: '2,000 ₽/мес',
  icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
  features: ['Отчеты в Telegram', 'Тепловые карты', 'Воронка продаж']
}, {
  title: 'Конструктор Форм',
  description: 'Всплывающие окна и формы захвата для сбора лидов без программиста.',
  price: '1,200 ₽/мес',
  icon: <Layout className="w-8 h-8 text-pink-500" />,
  features: ['A/B тесты', 'Интеграция с CRM', 'Готовые шаблоны']
}];
export function ProductShowcase() {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Твой арсенал
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Что ты будешь продавать?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Востребованные модули для бизнеса, которые легко продавать. Бизнесу
            нужны клиенты, а эти инструменты помогают их получать.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => <div key={idx} className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                {product.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {product.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-6 pb-6 border-b border-slate-100">
                <span className="text-2xl font-bold text-slate-900">
                  {product.price}
                </span>
                <span className="text-slate-500 text-sm"> / с клиента</span>
              </div>

              <ul className="space-y-3">
                {product.features.map((feature, fIdx) => <li key={fIdx} className="flex items-center text-sm text-slate-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
}