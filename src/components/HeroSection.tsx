import React from 'react';
import { CheckCircle2, Zap, ArrowRight, ShieldCheck, Users, Sparkles, TrendingUp } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero-section" className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-orange-950/10 to-slate-950 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs md:text-sm text-amber-300 font-semibold mb-6 shadow-lg shadow-amber-500/5 backdrop-blur">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>Công cụ tạo video AI POV Đồ Ăn Vặt #1 cho Affiliate TikTok & Shopee</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] md:leading-[1.15] mb-6 tracking-tight">
          X5 Tốc Độ Làm Video <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 drop-shadow-sm">
            POV ĐỒ ĂN VẶT CỰC NÉT
          </span>
          <br />
          Hút Triệu View, Nổ Đơn Đều Mỗi Ngày!
        </h1>

        {/* Subheadline */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          Không cần tốn tiền triệu mua mẫu, không mất cả ngày bày biện quay chụp. Chatbot{' '}
          <strong className="text-amber-400 font-bold">#VATC</strong> tự động tạo prompt và kịch bản hình ảnh POV góc nhìn thứ nhất kích thích vị giác người xem tột độ.
        </p>

        {/* Price & CTA Box */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/40 p-6 md:p-8 rounded-3xl max-w-lg mx-auto shadow-2xl shadow-orange-950/40 relative">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-[11px] uppercase tracking-wider py-1 px-4 rounded-full shadow-md border border-orange-300/40">
            Ưu Đãi Ra Mắt Khóa Học & Tool
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 pt-1">
            <div className="text-slate-400 line-through text-lg sm:text-xl font-medium">999.000đ</div>
            <div className="text-3xl sm:text-4xl font-black text-red-500 tracking-tight">268.000đ</div>
            <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold px-2.5 py-1 rounded-md">
              TIẾT KIỆM 73%
            </span>
          </div>

          <p className="text-xs text-slate-400 mb-5">
            Thanh toán 1 lần duy nhất — Sở hữu & cập nhật vĩnh viễn trọn đời (Không phí ẩn)
          </p>

          <a
            id="hero-cta-btn"
            href="#order-section"
            className="pulse-btn group block w-full py-4 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 hover:brightness-110 text-white font-black text-base sm:text-lg md:text-xl rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5 fill-current" />
            <span>NHẬN CHATBOT NGAY BÂY GIỜ</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-slate-400 font-medium">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Kích hoạt tức thì
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-amber-300">
              <Users className="w-3.5 h-3.5" /> 1,420+ Creator tin dùng
            </span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-10 pt-8 border-t border-slate-800/80 text-slate-300 text-xs md:text-sm font-medium">
          <div className="flex items-center justify-center gap-2 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Dùng vĩnh viễn</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Hỗ trợ kỹ thuật 1-1</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Nhóm cộng đồng VIP</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Dễ dùng cho chị em</span>
          </div>
        </div>
      </div>
    </section>
  );
};
