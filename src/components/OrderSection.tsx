import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  LoaderCircle,
  LockKeyhole,
  Mail,
  MessageCircle,
  Phone,
  QrCode,
  ShieldCheck,
  User,
  Zap,
} from 'lucide-react';

type OrderStatus = 'PENDING' | 'PAID' | 'CANCELLED' | 'FAILED' | 'REVIEW';
type PaymentStep = 'IDLE' | 'CREATING' | 'REDIRECTING' | 'CHECKING' | OrderStatus | 'ERROR';

type CreateOrderResponse = {
  orderId: string;
  checkoutUrl: string;
  expiresAt: string;
  error?: string;
};

type OrderStatusResponse = {
  status: OrderStatus;
  amount: number;
  paidAt: string | null;
  expiresAt: string;
  error?: string;
};

const ORDER_STORAGE_KEY = 'vatc_pending_order_id';
const SUPPORT_ZALO_URL = 'https://zalo.me/0329586788';

const statusCopy: Record<OrderStatus, { title: string; description: string }> = {
  PENDING: {
    title: 'Đang chờ thanh toán',
    description: 'Nếu bạn vừa chuyển khoản, hệ thống thường cần vài giây để nhận webhook từ payOS.',
  },
  PAID: {
    title: 'Thanh toán thành công',
    description: 'Đơn 99.000đ đã được xác nhận tự động. Admin sẽ gửi quyền truy cập qua Zalo hoặc email bạn đã nhập.',
  },
  CANCELLED: {
    title: 'Thanh toán đã hủy',
    description: 'Bạn chưa bị ghi nhận thanh toán. Có thể tạo một đơn mới khi sẵn sàng.',
  },
  FAILED: {
    title: 'Không thể tạo thanh toán',
    description: 'Đơn này chưa hoàn tất. Vui lòng thử tạo đơn mới hoặc liên hệ hỗ trợ.',
  },
  REVIEW: {
    title: 'Đơn cần được kiểm tra',
    description: 'Số tiền hoặc dữ liệu giao dịch chưa khớp. Vui lòng liên hệ Admin và không thanh toán lại ngay.',
  },
};

export const OrderSection: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<PaymentStep>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');
  const [orderId, setOrderId] = useState<string | null>(null);

  const cleanPhone = useMemo(() => phone.replace(/\D/g, '').slice(0, 11), [phone]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const returnedOrderId = params.get('orderId');
    const savedOrderId = window.sessionStorage.getItem(ORDER_STORAGE_KEY);
    const activeOrderId = returnedOrderId || savedOrderId;

    if (!activeOrderId) return;

    setOrderId(activeOrderId);
    setStep('CHECKING');

    let cancelled = false;
    let intervalId: number | undefined;

    const checkStatus = async () => {
      try {
        const response = await fetch(`/api/order-status?orderId=${encodeURIComponent(activeOrderId)}`, {
          headers: { Accept: 'application/json' },
          cache: 'no-store',
        });
        const result = (await response.json()) as OrderStatusResponse;

        if (!response.ok) {
          throw new Error(result.error || 'Không thể kiểm tra trạng thái đơn hàng.');
        }

        if (cancelled) return;
        setStep(result.status);

        if (result.status !== 'PENDING') {
          if (intervalId) window.clearInterval(intervalId);
          if (result.status === 'PAID' || result.status === 'CANCELLED' || result.status === 'FAILED') {
            window.sessionStorage.removeItem(ORDER_STORAGE_KEY);
          }
        }
      } catch {
        if (!cancelled) {
          setStep('ERROR');
          setErrorMessage('Chưa thể kiểm tra đơn hàng. Vui lòng tải lại trang sau ít phút.');
        }
      }
    };

    void checkStatus();
    intervalId = window.setInterval(() => void checkStatus(), 3_000);

    return () => {
      cancelled = true;
      if (intervalId) window.clearInterval(intervalId);
    };
  }, []);

  const handleCheckout = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');

    if (fullName.trim().length < 2) {
      setErrorMessage('Vui lòng nhập họ và tên.');
      return;
    }

    if (!/^0\d{8,10}$/.test(cleanPhone)) {
      setErrorMessage('Số điện thoại cần bắt đầu bằng 0 và có từ 9 đến 11 chữ số.');
      return;
    }

    setStep('CREATING');

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          phone: cleanPhone,
          email: email.trim(),
        }),
      });
      const result = (await response.json()) as CreateOrderResponse;

      if (!response.ok || !result.orderId || !result.checkoutUrl) {
        throw new Error(result.error || 'Không thể tạo liên kết thanh toán.');
      }

      setOrderId(result.orderId);
      window.sessionStorage.setItem(ORDER_STORAGE_KEY, result.orderId);
      setStep('REDIRECTING');
      window.location.assign(result.checkoutUrl);
    } catch (error) {
      setStep('ERROR');
      setErrorMessage(error instanceof Error ? error.message : 'Không thể tạo thanh toán. Vui lòng thử lại.');
    }
  };

  const resetOrder = () => {
    window.sessionStorage.removeItem(ORDER_STORAGE_KEY);
    setOrderId(null);
    setStep('IDLE');
    setErrorMessage('');
    window.history.replaceState({}, '', `${window.location.pathname}#order-section`);
  };

  const isBusy = step === 'CREATING' || step === 'REDIRECTING' || step === 'CHECKING';
  const visibleOrderStatus = statusCopy[step as OrderStatus];

  return (
    <section id="order-section" className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-red-500/10 px-3.5 py-1 rounded-full border border-red-500/25 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> Thanh toán tự động qua payOS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-3">Sở Hữu Chatbot #VATC Ngay Hôm Nay</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Tạo đơn trên website, quét VietQR tại trang bảo mật của payOS và nhận xác nhận tự động khi tiền về.
          </p>
        </div>

        <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-orange-950/30 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-block bg-amber-500/20 text-amber-300 font-bold text-xs px-3 py-1 rounded-md mb-2 border border-amber-500/30">GÓI TRỌN ĐỜI (LIFETIME ACCESS)</div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">Chatbot Video AI POV Đồ Ăn Vặt #VATC</h3>
              <div className="flex items-baseline gap-3 my-3">
                <span className="text-4xl sm:text-5xl font-black text-red-500 tracking-tight">99.000đ</span>
                <span className="text-xl text-slate-500 line-through">200.000đ</span>
                <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold px-2 py-0.5 rounded">-50%</span>
              </div>
            </div>

            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Dùng không giới hạn lượt tạo, không phát sinh chi phí duy trì.</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Tặng kèm <strong>Bộ công thức video POV nổ đơn triệu view</strong> (ASMR + Hook).</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Hỗ trợ cài đặt và hướng dẫn 1-1 trực tiếp qua Zalo.</span></div>
            </div>

            <form onSubmit={handleCheckout} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3.5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">Thông tin đơn hàng</span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1"><LockKeyhole className="w-3 h-3" /> Không lưu thông tin ngân hàng</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <label className="block text-[11px] text-slate-400">
                  Họ và tên <span className="text-red-400">*</span>
                  <span className="relative block mt-1">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input type="text" required maxLength={100} autoComplete="name" placeholder="Ví dụ: Nguyễn Văn An" value={fullName} onChange={(event) => setFullName(event.target.value)} disabled={isBusy} className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none disabled:opacity-60" />
                  </span>
                </label>

                <label className="block text-[11px] text-slate-400">
                  Số điện thoại Zalo <span className="text-red-400">*</span>
                  <span className="relative block mt-1">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input type="tel" required inputMode="numeric" autoComplete="tel" placeholder="0912 345 678" value={phone} onChange={(event) => setPhone(event.target.value)} disabled={isBusy} className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none disabled:opacity-60" />
                  </span>
                </label>
              </div>

              <label className="block text-[11px] text-slate-400">
                Email nhận tài liệu (không bắt buộc)
                <span className="relative block mt-1">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input type="email" maxLength={254} autoComplete="email" placeholder="email@example.com" value={email} onChange={(event) => setEmail(event.target.value)} disabled={isBusy} className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none disabled:opacity-60" />
                </span>
              </label>

              {errorMessage && (
                <div role="alert" className="bg-red-500/10 border border-red-500/30 p-3 rounded-xl text-xs text-red-300 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" /><span>{errorMessage}</span>
                </div>
              )}

              <button type="submit" disabled={isBusy || step === 'PAID'} className="w-full py-3.5 bg-red-600 hover:bg-red-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-black text-sm rounded-xl transition shadow-lg shadow-red-950 flex items-center justify-center gap-2">
                {isBusy ? <LoaderCircle className="w-5 h-5 animate-spin" /> : <QrCode className="w-5 h-5" />}
                {step === 'CREATING' ? 'Đang tạo đơn an toàn...' : step === 'REDIRECTING' ? 'Đang mở payOS...' : 'Thanh toán 99.000đ qua payOS'}
              </button>

              <p className="text-[10px] leading-relaxed text-slate-500 text-center">
                Bằng việc tiếp tục, bạn đồng ý cung cấp thông tin trên để xử lý đơn hàng. Website không yêu cầu mật khẩu, OTP hoặc thông tin đăng nhập ngân hàng.
              </p>
            </form>
          </div>

          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col items-center shadow-xl text-center min-h-[390px] justify-center">
            {visibleOrderStatus ? (
              <>
                {step === 'PAID' ? <CheckCircle2 className="w-20 h-20 text-emerald-400 mb-5" /> : step === 'PENDING' ? <Clock3 className="w-20 h-20 text-amber-400 mb-5" /> : <AlertCircle className="w-20 h-20 text-orange-400 mb-5" />}
                <h4 className="text-xl font-black text-white mb-2">{visibleOrderStatus.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{visibleOrderStatus.description}</p>
                {orderId && <p className="mt-3 text-[10px] text-slate-600">Mã tra cứu: {orderId.slice(0, 8).toUpperCase()}</p>}
                <div className="flex flex-col w-full gap-2 mt-6">
                  {(step === 'PAID' || step === 'REVIEW') && (
                    <a href={SUPPORT_ZALO_URL} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" /> Liên hệ Admin qua Zalo
                    </a>
                  )}
                  {step !== 'PAID' && (
                    <button onClick={resetOrder} className="w-full py-3 border border-slate-700 hover:border-amber-500 text-slate-300 text-xs font-bold rounded-xl transition">Tạo đơn mới</button>
                  )}
                </div>
              </>
            ) : isBusy ? (
              <>
                <LoaderCircle className="w-16 h-16 text-amber-400 animate-spin mb-5" />
                <h4 className="text-xl font-black text-white mb-2">{step === 'CHECKING' ? 'Đang kiểm tra thanh toán' : 'Đang kết nối payOS'}</h4>
                <p className="text-xs text-slate-400">Vui lòng không đóng trang trong vài giây.</p>
              </>
            ) : (
              <>
                <div className="w-24 h-24 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-5"><QrCode className="w-14 h-14 text-amber-400" /></div>
                <h4 className="text-xl font-black text-white mb-3">VietQR riêng cho từng đơn</h4>
                <div className="w-full space-y-3 text-left text-xs text-slate-400">
                  <div className="flex gap-2"><Zap className="w-4 h-4 text-amber-400 shrink-0" /><span>Giá 99.000đ được cố định tại máy chủ, không thể sửa trên trình duyệt.</span></div>
                  <div className="flex gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" /><span>payOS xác nhận giao dịch bằng webhook có chữ ký.</span></div>
                  <div className="flex gap-2"><LockKeyhole className="w-4 h-4 text-blue-400 shrink-0" /><span>Bạn thanh toán trên trang payOS; website không thấy mật khẩu hoặc OTP ngân hàng.</span></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
