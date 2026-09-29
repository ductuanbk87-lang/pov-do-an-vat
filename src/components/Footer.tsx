import React from 'react';
import { ShieldCheck, MessageCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-xs text-slate-500 pb-24 md:pb-12">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-red-600 flex items-center justify-center font-black text-sm text-white">
            AI
          </div>
          <span className="font-extrabold text-white text-base tracking-tight">
            CHATBOT #VATC
          </span>
        </div>

        <p className="max-w-md mx-auto text-slate-400">
          Công cụ tạo prompt và video AI POV Đồ Ăn Vặt chuyên biệt số 1 cho Creator làm Affiliate trên nền tảng TikTok & Shopee Video.
        </p>

        <div className="flex items-center justify-center flex-wrap gap-4 text-slate-400 font-medium pt-2">
          <a
            href="https://zalo.me/0329586788"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5" /> Hotline/Zalo: 0329.586.788
          </a>
          <span>•</span>
          <a
            href="https://www.facebook.com/groups/videoaithucchien"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
          >
            Cộng đồng Video AI Thực Chiến
          </a>
          <span>•</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" /> Hỗ trợ kỹ thuật trọn đời
          </span>
        </div>

        <div className="pt-4 border-t border-slate-900 text-[11px] text-slate-600">
          <p>© 2026 Chatbot #VATC. Mọi quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};
