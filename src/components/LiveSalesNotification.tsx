import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

const RECENT_ORDERS = [
  { name: 'Chị Mai Lan', location: 'Hà Nội', time: '2 phút trước' },
  { name: 'Anh Hoàng Đức', location: 'TP. Hồ Chí Minh', time: '5 phút trước' },
  { name: 'Chị Thu Trang', location: 'Đà Nẵng', time: '7 phút trước' },
  { name: 'Bạn Minh Quân', location: 'Cần Thơ', time: '11 phút trước' },
  { name: 'Chị Ngọc Ánh', location: 'Hải Phòng', time: '14 phút trước' }
];

export const LiveSalesNotification: React.FC = () => {
  const [currentOrderIndex, setCurrentOrderIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay then cycle every 10-15 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentOrderIndex((prev) => (prev + 1) % RECENT_ORDERS.length);
        setIsVisible(true);
      }, 1000);
    }, 12000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  const order = RECENT_ORDERS[currentOrderIndex];

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 z-40 max-w-xs bg-slate-900/95 border border-emerald-500/40 p-3 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <ShoppingBag className="w-4 h-4" />
        </div>
        <div className="text-xs">
          <p className="text-white font-bold leading-tight">
            {order.name} <span className="font-normal text-slate-400">({order.location})</span>
          </p>
          <p className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5">
            <CheckCircle2 className="w-3 h-3" /> Vừa kích hoạt Chatbot #VATC
          </p>
          <span className="text-[10px] text-slate-500 font-mono">{order.time}</span>
        </div>
      </div>
    </div>
  );
};
