import React from 'react';
import { Users, ArrowRight, ExternalLink } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-14 bg-slate-900 border-t border-slate-800 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 text-2xl mb-4 border border-blue-500/30 shadow-lg shadow-blue-900/30">
          <Users className="w-8 h-8 text-blue-400" />
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
          Gia Nhập Cộng Đồng Video AI Thực Chiến
        </h2>

        <p className="text-slate-400 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
          Học hỏi kinh nghiệm từ các Top Affiliate Creator, cập nhật các prompt đồ ăn mới nhất và cùng nhau đẩy số TikTok & Shopee mỗi ngày.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            id="join-fb-group-btn"
            href="https://www.facebook.com/groups/videoaithucchien"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-blue-900/40"
          >
            <span>Tham Gia Nhóm Facebook (Miễn Phí)</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="https://zalo.me/0329586788"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl border border-slate-700 transition"
          >
            <span>Nhóm Zalo VIP Trao Đổi</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
