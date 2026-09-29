import React, { useState } from 'react';
import { QrCode, Copy, Check, ShieldCheck, Zap, MessageCircle, CheckCircle2, AlertCircle, Phone, Mail, User } from 'lucide-react';

export const OrderSection: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cleanPhone = phone.trim().replace(/[^0-9]/g, '');
  const transferMemo = cleanPhone ? `VATC ${cleanPhone}` : 'VATC [Số điện thoại của bạn]';

  // Dynamic VietQR API URL with customized reference
  const vietQrUrl = cleanPhone
    ? `https://api.vietqr.io/image/970407-88286268268-print.jpg?amount=99000&addInfo=VATC%20${cleanPhone}&accountName=DINH%20DUC%20TUAN`
    : 'https://api.vietqr.io/image/970407-88286268268-print.jpg?amount=99000&addInfo=CHATBOT%20VATC&accountName=DINH%20DUC%20TUAN';

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      alert('Vui lòng nhập số điện thoại để tạo mã chuyển khoản chính xác!');
      return;
    }
    setIsSubmitted(true);
  };

  const zaloMessage = encodeURIComponent(
    `Chào Admin, tôi muốn kích hoạt Chatbot #VATC (99.000đ). Họ tên: ${fullName || 'Khách hàng'}, SĐT: ${phone || 'Chưa cung cấp'}`
  );
  const zaloUrl = `https://zalo.me/0329586788?text=${zaloMessage}`;

  return (
    <section id="order-section" className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-red-500/10 px-3.5 py-1 rounded-full border border-red-500/25 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> Thanh toán an toàn & Tự động
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-3">
            Sở Hữu Chatbot #VATC Ngay Hôm Nay
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Quét mã QR để chuyển khoản 99.000đ hoặc điền thông tin bên dưới để được hệ thống kích hoạt tự động tức thì.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-orange-950/30 grid lg:grid-cols-12 gap-8 items-start relative">
          {/* Left Column: Product info + Quick Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-block bg-amber-500/20 text-amber-300 font-bold text-xs px-3 py-1 rounded-md mb-2 border border-amber-500/30">
                GÓI TRỌN ĐỜI (LIFETIME ACCESS)
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Chatbot Video AI POV Đồ Ăn Vặt #VATC
              </h3>

              <div className="flex items-baseline gap-3 my-3">
                <span className="text-4xl sm:text-5xl font-black text-red-500 tracking-tight">99.000đ</span>
                <span className="text-xl text-slate-500 line-through">200.000đ</span>
                <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold px-2 py-0.5 rounded">
                  -50%
                </span>
              </div>
            </div>

            {/* Included Benefits */}
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dùng không giới hạn lượt tạo, không phát sinh chi phí duy trì.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tặng kèm <strong>Bộ công thức video POV nổ đơn triệu view</strong> (ASMR + Hook).</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Tham gia nhóm hỗ trợ VIP{' '}
                  <a
                    href="https://www.facebook.com/groups/videoaithucchien"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 font-bold underline hover:text-blue-300"
                  >
                    Video AI Thực Chiến
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hỗ trợ cài đặt và hướng dẫn 1-1 trực tiếp qua Zalo.</span>
              </div>
            </div>

            {/* Order Registration Form */}
            <form onSubmit={handleQuickSubmit} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                  Thông tin kích hoạt Chatbot:
                </span>
                <span className="text-[11px] text-slate-400">*Bảo mật 100%</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Họ và tên của bạn:</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Ví dụ: Nguyễn Văn An"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">
                    Số điện thoại Zalo <span className="text-red-400">*</span>:
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="0912 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Email nhận tài liệu & chatbot (tùy chọn):</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none"
                  />
                </div>
              </div>

              {cleanPhone && (
                <div className="bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-xl text-xs text-amber-300 flex items-center gap-2">
                  <Zap className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>
                    Mã QR bên cạnh đã được cập nhật cú pháp chuyển khoản: <strong className="font-mono text-white">VATC {cleanPhone}</strong>
                  </span>
                </div>
              )}
            </form>

            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-center justify-between flex-wrap gap-2">
              <div>
                <strong className="text-slate-200">Zalo Admin:</strong> 0329.586.788 (Đinh Đức Tuấn)
              </div>
              <div className="text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Kích hoạt sau 1 - 5 phút
              </div>
            </div>
          </div>

          {/* Right Column: VietQR Code + 1-Click Copy Transfer Details (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col items-center shadow-xl text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-3 uppercase tracking-wider">
              <QrCode className="w-4 h-4" /> Quét Mã Chuyển Khoản 99.000đ
            </div>

            {/* QR Box */}
            <div className="w-56 h-56 bg-white p-2.5 rounded-2xl shadow-lg mb-4 flex items-center justify-center relative group">
              <img
                src={vietQrUrl}
                alt="Mã VietQR Thanh Toán Chatbot VATC"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            <p className="text-[11px] text-slate-400 mb-4">
              Mở App Ngân hàng bất kỳ (Vietcombank, MB, Techcombank...) quét mã để thanh toán tức thì
            </p>

            {/* Bank Transfer Details with 1-Click Copy */}
            <div className="w-full space-y-2 text-xs text-left bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
              {/* Ngân hàng */}
              <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Ngân hàng:</span>
                <span className="font-bold text-white">Techcombank</span>
              </div>

              {/* Số tài khoản with Copy button */}
              <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Số tài khoản:</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-mono font-black text-sm">8828 6268 268</span>
                  <button
                    onClick={() => copyToClipboard('88286268268', 'stk')}
                    className="p-1 text-slate-400 hover:text-white rounded transition"
                    title="Sao chép số tài khoản"
                  >
                    {copiedKey === 'stk' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Chủ tài khoản */}
              <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Chủ tài khoản:</span>
                <span className="font-bold text-white">DINH DUC TUAN</span>
              </div>

              {/* Số tiền */}
              <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Số tiền:</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-red-400 font-black text-sm">99.000đ</span>
                  <button
                    onClick={() => copyToClipboard('99000', 'money')}
                    className="p-1 text-slate-400 hover:text-white rounded transition"
                    title="Sao chép số tiền"
                  >
                    {copiedKey === 'money' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Nội dung chuyển khoản with Copy button */}
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Nội dung CK:</span>
                <div className="flex items-center gap-1.5 max-w-[190px]">
                  <span className="text-yellow-400 font-mono font-bold text-xs truncate">
                    {transferMemo}
                  </span>
                  <button
                    onClick={() => copyToClipboard(cleanPhone ? `VATC ${cleanPhone}` : 'VATC', 'memo')}
                    className="p-1 text-slate-400 hover:text-white rounded transition shrink-0"
                    title="Sao chép nội dung"
                  >
                    {copiedKey === 'memo' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Zalo Confirmation Button */}
            <a
              id="confirm-zalo-bill-btn"
              href={zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-lg shadow-emerald-950 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Đã Chuyển Khoản? Gửi Bill Qua Zalo Admin</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
