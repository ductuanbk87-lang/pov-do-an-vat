import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs md:text-sm font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/25 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" /> Giải đáp thắc mắc
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 mb-3">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto">
            Mọi điều bạn cần biết trước khi sở hữu Chatbot Video AI POV Đồ Ăn Vặt #VATC
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 text-sm sm:text-base font-bold text-white hover:text-amber-400 transition"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have question? */}
        <div className="mt-10 text-center text-xs text-slate-400">
          Bạn còn câu hỏi khác? Nhắn tin trực tiếp với Admin qua Zalo{' '}
          <a
            href="https://zalo.me/0329586788"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 font-bold underline"
          >
            0329.586.788
          </a>{' '}
          để được giải đáp tức thì 24/7.
        </div>
      </div>
    </section>
  );
};
