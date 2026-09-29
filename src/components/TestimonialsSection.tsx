import React from 'react';
import { Star, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import { REVIEWS_DATA } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs md:text-sm font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/25 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Đánh Giá Thực Tế
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 mb-3">
            Học Viên & Creator Nói Gì Về Chatbot #VATC?
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Hơn 1,420+ anh chị em đã áp dụng thành công để bùng nổ hoa hồng tiếp thị liên kết đồ ăn vặt
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 relative flex flex-col justify-between shadow-lg"
            >
              <Quote className="w-8 h-8 text-slate-800 absolute top-4 right-4 pointer-events-none" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs text-amber-300 font-bold ml-1">5.0</span>
                </div>

                {/* Earnings Badge */}
                <div className="inline-block bg-emerald-950 text-emerald-300 text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-emerald-500/30 mb-3">
                  {review.earningsBadge}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-500/40"
                />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    {review.name}
                    {review.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
