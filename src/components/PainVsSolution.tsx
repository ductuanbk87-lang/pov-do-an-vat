import React, { useState } from 'react';
import { XCircle, CheckCircle2, Calculator, Sparkles, Clock, DollarSign, Rocket } from 'lucide-react';

export const PainVsSolution: React.FC = () => {
  const [videosPerDay, setVideosPerDay] = useState(2);

  // Calculations:
  // Traditional: 1 video sample costs ~60,000đ; takes 2.5 hours to stage, light, shoot, clean up
  // VATC: sample cost = 0đ; takes 15 mins (0.25h)
  const monthlySampleCostSaved = videosPerDay * 30 * 60000;
  const hoursSavedPerMonth = Math.round(videosPerDay * 30 * 2.25);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('vi-VN').format(val) + 'đ';
  };

  return (
    <section id="comparison" className="py-14 md:py-20 bg-slate-900/60 border-y border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs md:text-sm font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/25 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Giải Pháp Đột Phá
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-white mt-3 mb-3">
            Tại Sao Bạn Làm Affiliate Đồ Ăn Vặt Mãi Chưa Ra Đơn?
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Sự khác biệt giữa cách làm thủ công vất vả, tốn kém và bước nhảy vọt công nghệ Video AI POV
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Cách cũ */}
          <div className="bg-red-950/20 border-2 border-red-900/50 rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-1.5 bg-red-900/60 text-red-300 text-xs font-bold px-3 py-1 rounded-full border border-red-800">
                  <XCircle className="w-4 h-4 text-red-400" /> Cách làm thủ công cũ
                </span>
                <span className="text-xs text-red-400 font-semibold">Tốn kém & Dễ nản</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Tốn tiền triệu mua mẫu:</strong> Phải tự đặt hàng chục gói đồ ăn về thử, bảo quản khó, nhanh ỉu mốc và tốn vốn ban đầu.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Mất 2 - 3 tiếng cho 1 video:</strong> Bày biện, căn chỉnh ánh sáng, góc máy điện thoại vụng về, dầu mỡ dính tay chân.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Hình ảnh kém bắt mắt:</strong> Đồ ăn tự quay trông nhợt nhạt, không kích thích vị giác, người xem lướt qua trong 1 giây đầu.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Nản lòng bỏ cuộc:</strong> Đăng 20-30 video mà lượt xem lẹt đẹt vài chục view, không có hoa hồng để bù tiền mua mẫu.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-red-900/30 text-xs text-red-400/90 font-medium">
              ⚠️ Rủi ro: Tốn từ 1.500.000đ - 3.000.000đ/tháng tiền mua mẫu nhưng chưa chắc có đơn!
            </div>
          </div>

          {/* Cách mới với Chatbot #VATC */}
          <div className="bg-gradient-to-b from-emerald-950/30 to-slate-900 border-2 border-emerald-500/60 rounded-2xl p-6 sm:p-7 relative shadow-xl shadow-emerald-950/30 flex flex-col justify-between">
            <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-[11px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
              Khuyên Dùng
            </div>

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-1.5 bg-emerald-900/60 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-700/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Đột phá với Chatbot #VATC
                </span>
                <span className="text-xs text-emerald-400 font-semibold">Tự động & Siêu tốc</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Tiết kiệm 100% tiền mua mẫu:</strong> Chỉ cần gõ tên món, AI tự render hình ảnh chân thực từng giọt dầu sa tế, thớ ớt, hạt mè.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">X5 Tốc độ sản xuất:</strong> Chỉ mất 1-2 phút là có ngay hình ảnh POV sốt dẻo, cuốn hút. Một ngày làm được 5-10 video nhẹ tênh.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Góc POV "nuốt nước bọt":</strong> Tạo cảm giác thức ăn được đưa tận miệng người xem, giữ chân 80-90% đến giây cuối.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Tối ưu ra đơn Affiliate:</strong> Thích hợp cho mẹ bỉm, học sinh, sinh viên kiếm 5 - 20 triệu/tháng từ hoa hồng TikTok & Shopee.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-800/40 text-xs text-emerald-300 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Chỉ 268.000đ dùng trọn đời — Bù lại vốn ngay từ đơn hàng đầu tiên!
            </div>
          </div>
        </div>

        {/* Interactive Savings Calculator */}
        <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wide">
                <Calculator className="w-4 h-4" /> Bảng Tính Tiết Kiệm Khi Dùng Chatbot #VATC
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                Kéo thanh trượt để xem bạn tiết kiệm được bao nhiêu mỗi tháng:
              </h3>
            </div>

            <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-xl border border-slate-700">
              <span className="text-xs text-slate-400">Mục tiêu đăng:</span>
              <span className="text-xl font-black text-amber-400">{videosPerDay} video/ngày</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between text-xs text-slate-400 mb-2 font-medium">
              <span>1 video/ngày (Mới bắt đầu)</span>
              <span>3 video/ngày (Đều đặn)</span>
              <span>5 video/ngày (Siêu cày cuốc)</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              step={1}
              value={videosPerDay}
              onChange={(e) => setVideosPerDay(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
              <div className="flex items-center justify-center text-emerald-400 mb-1">
                <DollarSign className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-emerald-400">
                {formatCurrency(monthlySampleCostSaved)}
              </div>
              <div className="text-xs text-slate-400 mt-1">Tiết kiệm tiền mua đồ ăn mẫu/tháng</div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
              <div className="flex items-center justify-center text-amber-400 mb-1">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-amber-400">
                ~{hoursSavedPerMonth} Giờ
              </div>
              <div className="text-xs text-slate-400 mt-1">Thời gian quay dựng tiết kiệm/tháng</div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
              <div className="flex items-center justify-center text-orange-400 mb-1">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-orange-400">
                {videosPerDay * 30} Video
              </div>
              <div className="text-xs text-slate-400 mt-1">Sản lượng video chất lượng cao/tháng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
