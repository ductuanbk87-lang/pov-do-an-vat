import React, { useState } from 'react';
import { MessageCircle, Zap, Menu, X, Sparkles, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="main-header" className="border-b border-slate-800 bg-slate-950/85 backdrop-blur-md sticky top-10 z-40 transition-all">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-red-600 flex items-center justify-center font-black text-lg text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
            AI
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base md:text-lg tracking-tight text-white">
                CHATBOT #VATC
              </span>
              <span className="hidden sm:inline-block text-[11px] font-semibold bg-amber-500/15 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                POV Đồ Ăn Vặt
              </span>
            </div>
            <p className="text-[10px] text-slate-400 -mt-0.5">X5 Tốc Độ Cho Affiliate TikTok & Shopee</p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-300">
          <a href="#video-showcase" className="hover:text-amber-400 transition">10+ Video Mẫu</a>
          <a href="#interactive-demo" className="hover:text-amber-400 transition flex items-center gap-1 text-amber-300">
            <Sparkles className="w-3.5 h-3.5" /> Dùng Thử AI
          </a>
          <a href="#comparison" className="hover:text-amber-400 transition">Hiệu Quả</a>
          <a href="#how-it-works" className="hover:text-amber-400 transition">3 Bước Sử Dụng</a>
          <a href="#reviews" className="hover:text-amber-400 transition">Đánh Giá</a>
          <a href="#faq" className="hover:text-amber-400 transition">Hỏi Đáp</a>
        </nav>

        {/* Header CTAs */}
        <div className="flex items-center gap-2 md:gap-3">
          <a
            id="nav-zalo-btn"
            href="https://zalo.me/0329586788"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-blue-600/90 hover:bg-blue-600 text-white font-semibold px-3 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm border border-blue-400/30"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">Zalo:</span> 0329.586.788
          </a>

          <a
            id="nav-order-btn"
            href="#order-section"
            className="text-xs md:text-sm bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:brightness-110 text-slate-950 font-black px-4 py-2 rounded-lg transition-all shadow-md shadow-orange-500/20 flex items-center gap-1"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Sở Hữu 268k</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white lg:hidden"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3 text-sm font-medium">
          <a
            href="#video-showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-amber-400 py-1"
          >
            10+ Video Mẫu Thực Tế
          </a>
          <a
            href="#interactive-demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-amber-300 font-semibold hover:text-amber-400 py-1"
          >
            Dùng Thử Chatbot AI Ngay
          </a>
          <a
            href="#comparison"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-amber-400 py-1"
          >
            So Sánh Cách Cũ vs Chatbot
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-amber-400 py-1"
          >
            Quy Trình 3 Bước Đơn Giản
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-amber-400 py-1"
          >
            Đánh Giá Của Khách Hàng
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-amber-400 py-1"
          >
            Câu Hỏi Thường Gặp (FAQ)
          </a>
          <div className="pt-2 border-t border-slate-800 flex gap-2">
            <a
              href="https://www.facebook.com/groups/videoaithucchien"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-center flex items-center justify-center gap-1"
            >
              Nhóm Facebook <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
