import React, { useState, useEffect } from 'react';
import { Flame, Clock } from 'lucide-react';

export const TopBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 38, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (n: number) => n.toString().padStart(2, '0');

  return (
    <div id="top-banner" className="bg-gradient-to-r from-red-700 via-orange-600 to-amber-600 text-white text-xs md:text-sm font-bold py-2.5 px-4 text-center sticky top-0 z-50 shadow-lg flex items-center justify-center flex-wrap gap-2 md:gap-4 border-b border-orange-500/30">
      <div className="flex items-center gap-1.5 animate-pulse">
        <Flame className="w-4 h-4 text-yellow-300 fill-yellow-300" />
        <span>ƯU ĐÃI ĐẶC BIỆT GIẢM 73% DUY NHẤT HÔM NAY:</span>
        <span className="underline decoration-yellow-300 underline-offset-2 text-yellow-200 font-extrabold text-sm md:text-base">
          CHỈ 268.000đ
        </span>
        <span className="bg-black/30 px-2 py-0.5 rounded text-[11px] font-normal border border-white/20">
          (Dùng Vĩnh Viễn Trọn Đời)
        </span>
      </div>

      <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full text-xs font-mono border border-yellow-400/30">
        <Clock className="w-3.5 h-3.5 text-yellow-300" />
        <span>Kết thúc sau:</span>
        <span className="text-yellow-300 font-black">
          {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
        </span>
      </div>
    </div>
  );
};
