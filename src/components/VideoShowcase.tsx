import React, { useState } from 'react';
import { Play, Eye, ShoppingBag, Sparkles, X, Copy, Check, Volume2, Video, Camera, ArrowRight } from 'lucide-react';
import { VIDEO_SHOWCASE_DATA } from '../data/mockData';
import { VideoShowcaseItem } from '../types';

export const VideoShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoShowcaseItem | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const filteredVideos = activeCategory === 'all'
    ? VIDEO_SHOWCASE_DATA
    : VIDEO_SHOWCASE_DATA.filter(v => v.category === activeCategory);

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section id="video-showcase" className="py-16 md:py-24 max-w-6xl mx-auto px-4">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <span className="text-xs md:text-sm font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Kết quả thực chiến
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 mb-4">
          10 Mẫu Video AI Thực Tế Đã Viral & Nổ Đơn Đều Đặn
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
          Bấm vào từng ô bên dưới để xem chất lượng hình ảnh POV siêu thực, góc quay và prompt AI tương ứng được tạo ra trực tiếp từ Chatbot #VATC.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeCategory === 'all'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          Tất cả ({VIDEO_SHOWCASE_DATA.length})
        </button>
        <button
          onClick={() => setActiveCategory('cay')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeCategory === 'cay'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          🌶️ Đồ cay sốt (4)
        </button>
        <button
          onClick={() => setActiveCategory('kho')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeCategory === 'kho'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          🥢 Đồ ăn vặt khô (3)
        </button>
        <button
          onClick={() => setActiveCategory('chua')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeCategory === 'chua'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          🥭 Trái cây chua cay (2)
        </button>
        <button
          onClick={() => setActiveCategory('ngot')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeCategory === 'ngot'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          🍪 Bánh ngọt (1)
        </button>
      </div>

      {/* 10 Khung Video dọc (Tỉ lệ chuẩn 9:16) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/60 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1 flex flex-col"
          >
            {/* 9:16 Image Container */}
            <div className="relative aspect-[9/16] bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={video.imageUrl}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-85 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>

              {/* Top View Tag */}
              <div className="absolute top-2.5 left-2.5 bg-red-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                <Eye className="w-2.5 h-2.5" /> {video.views}
              </div>

              {/* Number Badge */}
              <div className="absolute top-2.5 right-2.5 bg-slate-900/80 text-amber-300 text-[10px] font-mono px-2 py-0.5 rounded border border-amber-500/30">
                #{video.id.toString().padStart(2, '0')}
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center text-lg shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Quick Retention */}
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="text-[10px] bg-slate-950/80 backdrop-blur-sm text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                  {video.retentionRate}
                </span>
              </div>
            </div>

            {/* Card Footer Info */}
            <div className="p-3 bg-slate-900 border-t border-slate-800/80 flex-1 flex flex-col justify-between">
              <p className="text-xs font-bold text-slate-100 line-clamp-2 leading-snug group-hover:text-amber-400 transition-colors">
                {video.title}
              </p>
              <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <ShoppingBag className="w-3 h-3" /> {video.ordersBadge}
                </span>
                <span className="text-[10px] text-slate-400">Xem Prompt</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button After Showcase */}
      <div className="text-center mt-12">
        <a
          id="showcase-cta-btn"
          href="#order-section"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:brightness-110 text-slate-950 font-black text-base md:text-lg rounded-2xl shadow-xl shadow-orange-500/20 transition-all hover:scale-[1.02]"
        >
          <Sparkles className="w-5 h-5 fill-current" />
          <span>Tôi Muốn Sở Hữu Bộ Prompt & Chatbot Này (Chỉ 99k)</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* Video / Prompt Detail Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Close button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-5 gap-6 p-6 sm:p-8">
              {/* Left Column: Phone mockup preview (2 cols) */}
              <div className="md:col-span-2 flex flex-col items-center">
                <div className="w-full max-w-[240px] aspect-[9/16] rounded-2xl overflow-hidden relative shadow-2xl border-2 border-slate-700 bg-black">
                  <img
                    src={selectedVideo.imageUrl}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

                  {/* Simulated TikTok UI Overlays */}
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    🔥 {selectedVideo.views}
                  </div>

                  {/* Simulated Sound wave at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-[11px] font-bold text-white drop-shadow">@{selectedVideo.categoryName}</p>
                    <p className="text-[10px] text-slate-200 line-clamp-2 drop-shadow mt-0.5">
                      {selectedVideo.hookCaption}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2 text-[9px] text-amber-300 font-mono bg-black/50 px-2 py-1 rounded backdrop-blur">
                      <Volume2 className="w-3 h-3 text-amber-400 shrink-0" />
                      <span className="truncate">Âm thanh ASMR gốc giòn tan</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-xs bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 font-semibold">
                    {selectedVideo.ordersBadge}
                  </span>
                </div>
              </div>

              {/* Right Column: Prompt breakdown & Strategy (3 cols) */}
              <div className="md:col-span-3 space-y-4">
                <div>
                  <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider">
                    {selectedVideo.categoryName} • Mẫu #{selectedVideo.id}
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-1">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {selectedVideo.description}
                  </p>
                </div>

                {/* Prompt Box */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Prompt AI Chuẩn (Midjourney / Flux)
                    </span>
                    <button
                      onClick={() => handleCopyPrompt(selectedVideo.promptExample)}
                      className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1 transition"
                    >
                      {copiedPrompt ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Đã copy!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[11px] font-mono text-slate-300 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 leading-relaxed select-all">
                    {selectedVideo.promptExample}
                  </p>
                </div>

                {/* Angle & Sound tips */}
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                    <strong className="text-white flex items-center gap-1 mb-1">
                      <Camera className="w-3.5 h-3.5 text-amber-400" /> Góc quay POV:
                    </strong>
                    <span className="text-slate-400">{selectedVideo.cameraAngle}</span>
                  </div>

                  <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                    <strong className="text-white flex items-center gap-1 mb-1">
                      <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> Gợi ý âm thanh ASMR:
                    </strong>
                    <span className="text-slate-400">{selectedVideo.asmrTip}</span>
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-2">
                  <a
                    href="#order-section"
                    onClick={() => setSelectedVideo(null)}
                    className="block w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm text-center rounded-xl hover:brightness-110 shadow-lg transition"
                  >
                    Kích Hoạt Chatbot Ngay (99k Dùng Vĩnh Viễn)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
