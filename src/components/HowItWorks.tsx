import React from 'react';
import { Type, Cpu, TrendingUp, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-xs md:text-sm font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/25">
          Quy trình đơn giản
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 mb-3">
          Sử Dụng Siêu Dễ — Chỉ 3 Bước Cho Người Mới
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-12">
          Dù bạn chưa từng làm AI hay không rành công nghệ, bạn vẫn có thể làm chủ toàn bộ quy trình chỉ trong 5 phút xem hướng dẫn.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left relative">
          {/* Step 1 */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative hover:border-amber-500/40 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 font-black flex items-center justify-center mb-5 text-xl border border-amber-500/30">
                1
              </div>
              <h3 className="font-extrabold text-white text-base mb-2 flex items-center gap-2">
                <Type className="w-4 h-4 text-amber-400" /> Nhập tên món ăn vặt
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ví dụ: "Bánh tráng phơi sương chấm sốt me bơ cay". Chatbot #VATC tự động phân tích tính chất món ăn, loại sốt, và các chi tiết hấp dẫn nhất.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-amber-400/80 font-mono">
              ⏱️ Thời gian: 5 giây
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative hover:border-orange-500/40 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 font-black flex items-center justify-center mb-5 text-xl border border-orange-500/30">
                2
              </div>
              <h3 className="font-extrabold text-white text-base mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-orange-400" /> Nhận Prompt & Tạo ảnh
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                AI xuất ra prompt siêu chi tiết về góc máy POV, ánh sáng ấm studio, độ bóng nước sốt. Bạn chỉ việc nhấn tạo ảnh trên công cụ AI miễn phí.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-orange-400/80 font-mono">
              ⏱️ Thời gian: 60 giây
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative hover:border-emerald-500/40 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center mb-5 text-xl border border-emerald-500/30">
                3
              </div>
              <h3 className="font-extrabold text-white text-base mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" /> Xuất video & Nổ đơn
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ghép nhạc xu hướng TikTok, chèn âm thanh ASMR giòn tan, gắn link sản phẩm Affiliate và đón nhận hoa hồng nhảy đều mỗi ngày!
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-emerald-400/80 font-mono">
              ⏱️ Thời gian: 2 phút
            </div>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="mt-10">
          <a
            href="#order-section"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 hover:underline"
          >
            Xem Hướng Dẫn Thanh Toán & Kích Hoạt Ngay <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
