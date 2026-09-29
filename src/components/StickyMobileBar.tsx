import React from 'react';
import { MessageCircle, Zap } from 'lucide-react';

export const StickyMobileBar: React.FC = () => {
  return (
    <div
      id="mobile-sticky-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 px-4 py-2.5 flex items-center justify-between z-50 shadow-2xl"
    >
      <div>
        <div className="text-[10px] text-slate-400 font-medium">Giá ưu đãi hôm nay:</div>
        <div className="text-lg font-black text-red-500 flex items-center gap-1.5 leading-tight">
          99.000đ{' '}
          <span className="text-xs text-slate-500 line-through font-normal">200k</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          id="mobile-zalo-btn"
          href="https://zalo.me/0329586788"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm shadow-md flex items-center justify-center"
          title="Liên hệ Zalo"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>

        <a
          id="mobile-buy-btn"
          href="#order-section"
          className="px-5 py-2.5 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-black text-sm rounded-xl shadow-lg shadow-orange-900/40 flex items-center gap-1.5"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>MUA NGAY 99K</span>
        </a>
      </div>
    </div>
  );
};
