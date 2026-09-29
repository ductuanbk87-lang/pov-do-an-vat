import React, { useState } from 'react';
import { Sparkles, Send, Copy, Check, Terminal, Camera, Volume2, Lightbulb, Zap, RefreshCw } from 'lucide-react';
import { DEMO_PRESETS, generateMockPrompt } from '../data/mockData';
import { GeneratedPromptResult } from '../types';

export const InteractiveChatbotDemo: React.FC = () => {
  const [dishInput, setDishInput] = useState('Bánh tráng phơi sương chấm bơ béo cay');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GeneratedPromptResult>(() =>
    generateMockPrompt('Bánh tráng phơi sương chấm bơ béo cay')
  );
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleGenerate = (dishToGen?: string) => {
    const target = dishToGen || dishInput;
    if (!target.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      setResult(generateMockPrompt(target));
      setIsGenerating(false);
    }, 700);
  };

  const handleCopy = (text: string, fieldKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="interactive-demo" className="py-16 md:py-20 bg-slate-900/80 border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs md:text-sm font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/25 inline-flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-current" /> Trải Nghiệm Thực Tế
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 mb-3">
            Dùng Thử Chatbot #VATC Ngay Tại Đây
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Nhập thử một món ăn vặt bất kỳ để xem chatbot tự động xuất trọn bộ Prompt POV, góc quay và kịch bản ASMR trong 1 giây!
          </p>
        </div>

        {/* Interactive Chatbot Interface */}
        <div className="bg-slate-950 border-2 border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl">
          {/* Header Bar */}
          <div className="bg-slate-900/90 px-5 py-3.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-amber-400" /> Chatbot_VATC_Engine_v3.2 [Demo]
              </span>
            </div>
            <span className="text-[11px] bg-emerald-950 text-emerald-300 font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              Sẵn sàng tạo prompt
            </span>
          </div>

          <div className="p-5 sm:p-7 space-y-6">
            {/* Input Form */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wide">
                1. Gõ tên món ăn vặt bạn muốn làm video:
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={dishInput}
                    onChange={(e) => setDishInput(e.target.value)}
                    placeholder="Ví dụ: Bánh tráng phơi sương chấm bơ cay..."
                    className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition"
                    onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                  />
                </div>
                <button
                  onClick={() => handleGenerate()}
                  disabled={isGenerating}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-110 text-slate-950 font-black text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Đang tạo...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 fill-current" /> Xuất Prompt POV
                    </>
                  )}
                </button>
              </div>

              {/* Quick Preset Buttons */}
              <div className="mt-3 flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] text-slate-400">Gợi ý nhanh:</span>
                {DEMO_PRESETS.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => {
                      setDishInput(preset);
                      handleGenerate(preset);
                    }}
                    className="text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 px-2.5 py-1 rounded-lg border border-slate-800 transition"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Generated Results Output */}
            <div className="border-t border-slate-800/80 pt-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Kết quả tạo bởi Chatbot #VATC:
                </span>
                <span className="text-[11px] text-slate-400">Món: <strong className="text-white">{result.dishName}</strong></span>
              </div>

              {/* English Prompt Box (Ready for Midjourney / Flux) */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 relative group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    🎯 Prompt Chuẩn (Midjourney / Flux / Kling AI):
                  </span>
                  <button
                    onClick={() => handleCopy(result.englishPrompt, 'prompt')}
                    className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1 rounded-lg flex items-center gap-1.5 transition"
                  >
                    {copiedField === 'prompt' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Đã chép!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Prompt
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs font-mono text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800 leading-relaxed select-all">
                  {result.englishPrompt}
                </p>
              </div>

              {/* Strategy Details: Camera, Lighting, ASMR */}
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800">
                  <div className="font-bold text-white flex items-center gap-1.5 mb-1 text-amber-400">
                    <Camera className="w-3.5 h-3.5" /> Góc máy POV & Khẩu độ:
                  </div>
                  <p className="text-slate-300 leading-relaxed">{result.cameraSettings}</p>
                </div>

                <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800">
                  <div className="font-bold text-white flex items-center gap-1.5 mb-1 text-amber-400">
                    <Lightbulb className="w-3.5 h-3.5" /> Ánh sáng studio ẩm thực:
                  </div>
                  <p className="text-slate-300 leading-relaxed">{result.lighting}</p>
                </div>

                <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800">
                  <div className="font-bold text-white flex items-center gap-1.5 mb-1 text-emerald-400">
                    <Volume2 className="w-3.5 h-3.5" /> Gợi ý âm thanh ASMR hút view:
                  </div>
                  <p className="text-slate-300 leading-relaxed">{result.asmrAudioTip}</p>
                </div>

                <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800">
                  <div className="font-bold text-white flex items-center gap-1.5 mb-1 text-orange-400">
                    <Zap className="w-3.5 h-3.5" /> Hook mở đầu 3s giữ chân:
                  </div>
                  <p className="text-slate-300 leading-relaxed italic">{result.hook3s}</p>
                </div>
              </div>

              {/* Bottom Callout in Demo */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-300">
                  💡 Bạn muốn sở hữu trọn bộ chatbot với hơn <strong>200+ món ăn vặt hot trend</strong> được cài đặt sẵn?
                </div>
                <a
                  href="#order-section"
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-110 text-slate-950 font-black text-xs rounded-lg shrink-0 transition"
                >
                  Sở Hữu Bản Đầy Đủ (268k)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
