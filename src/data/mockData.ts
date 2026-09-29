import { VideoShowcaseItem, ReviewItem, FaqItem, GeneratedPromptResult } from '../types';

export const VIDEO_SHOWCASE_DATA: VideoShowcaseItem[] = [
  {
    id: 1,
    title: 'Bánh tráng phơi sương sốt bơ béo cay',
    category: 'cay',
    categoryName: 'Đồ cay sốt',
    views: '1.2M Views',
    ordersBadge: '+185 đơn Shopee',
    retentionRate: '86% giữ chân',
    imageUrl: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&auto=format&fit=crop&q=80',
    description: 'Bánh tráng dẻo phơi sương cuộn tròn đẫm sốt bơ vàng óng, rắc hành phi giòn tan và ớt rim đỏ au.',
    promptExample: 'POV first person perspective hands rolling soft dewy rice paper, thick glossy golden butter egg sauce dripping, crispy fried shallots, deep red chili flakes, ultra realistic macro 85mm f/1.8, warm cinema lighting, mouthwatering 4k --ar 9:16',
    asmrTip: 'Tiếng xé bánh tráng phơi sương dai dẻo, tiếng nhúng ngập vào chén sốt bơ sền sệt béo ngậy.',
    cameraAngle: 'POV góc nhìn thứ nhất cúi xuống 45 độ, tay đang xé cuốn bánh chấm ngập sốt.',
    hookCaption: 'Tập 45: Bánh tráng phơi sương dẻo quánh sốt bơ trứng muối cay tê lưỡi, nửa đêm xem chỉ có đói bụng!'
  },
  {
    id: 2,
    title: 'Snack tai heo cuộn giòn rụm sốt sa tế',
    category: 'cay',
    categoryName: 'Đồ cay sốt',
    views: '850K Views',
    ordersBadge: '+240 đơn TikTok',
    retentionRate: '89% giữ chân',
    imageUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&auto=format&fit=crop&q=80',
    description: 'Từng lát tai heo cuộn xoắn giòn sần sật, óng ánh dầu sa tế tỏi ớt, kích thích tuyến nước bọt tức thì.',
    promptExample: 'POV macro close up holding crispy rolled pig ear snack glistening with fiery spicy chili oil, toasted sesame seeds scattered, crunch texture visible, warm restaurant ambient light, shallow depth of field, 8k --ar 9:16',
    asmrTip: 'Tiếng cắn giòn "rôm rốp" vang vọng trong khoang miệng, tiếng nhai sần sật vui tai.',
    cameraAngle: 'Góc cận cảnh macro 10cm, ngón tay giữ miếng snack óng ả đưa thẳng vào ống kính.',
    hookCaption: 'Tìm ra món snack cày phim đỉnh chóp, nhai giòn rụm tê cay cay cả đêm!'
  },
  {
    id: 3,
    title: 'Cơm cháy chà bông mắm hành giòn rụm',
    category: 'kho',
    categoryName: 'Đồ ăn vặt khô',
    views: '920K Views',
    ordersBadge: '+160 đơn đều/ngày',
    retentionRate: '84% giữ chân',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
    description: 'Miếng cơm cháy đáy nồi dày cộm vàng ươm, phủ ngập chà bông thịt heo cay và mỡ hành xanh mướt.',
    promptExample: 'POV two hands snapping a thick golden crispy scorched rice cracker in half, shredded spicy pork floss flying, glistening green scallion oil drip, steam rising, high dynamic range, hyper detailed food photography --ar 9:16',
    asmrTip: 'Tiếng bẻ đôi miếng cơm cháy "rắc" giòn tan, âm thanh mỡ hành béo ngậy.',
    cameraAngle: 'Góc từ ngực nhìn xuống thớt gỗ mộc mạc, hai tay bẻ đôi miếng cơm cháy.',
    hookCaption: 'Mẹo chọn cơm cháy chà bông ngập mắm hành, cắn miếng nào giòn tan miếng đó!'
  },
  {
    id: 4,
    title: 'Chân gà rút xương sả tắc sốt Thái',
    category: 'cay',
    categoryName: 'Đồ cay sốt',
    views: '1.5M Views',
    ordersBadge: '+310 đơn TikTok',
    retentionRate: '91% giữ chân',
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80',
    description: 'Chân gà trắng giòn sần sật ngập trong nước sốt Thái chua cay ngọt, lát quất tắc thơm phức và ớt hiểm đỏ rực.',
    promptExample: 'POV chopsticks lifting a translucent crunchy boneless chicken foot bathed in vibrant spicy Thai red sauce, slices of calamansi lime and fresh chili, droplets of sauce falling in slow motion, studio backlight, 8k --ar 9:16',
    asmrTip: 'Tiếng nhúng đũa vào tô sốt Thái chua ngọt sánh mịn, tiếng gắp giòn sừn sựt.',
    cameraAngle: 'Đôi đũa gắp một miếng chân gà căng mọng giơ sát trước mắt camera rồi nhúng lại vào sốt.',
    hookCaption: 'Đang lướt TikTok mà gặp cái bát chân gà sốt Thái này thì bảo sao không thèm!'
  },
  {
    id: 5,
    title: 'Khô bò miếng mềm sốt cay Tây Bắc',
    category: 'kho',
    categoryName: 'Đồ ăn vặt khô',
    views: '670K Views',
    ordersBadge: '+125 đơn Shopee',
    retentionRate: '82% giữ chân',
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&auto=format&fit=crop&q=80',
    description: 'Thớ thịt bò nguyên miếng sấy thơm lừng hạt dổi mắc khén, màu nâu đỏ đậm đà, xé sợi mềm ngọt tê tê đầu lưỡi.',
    promptExample: 'POV first person view hands pulling apart a large piece of tender spicy dried beef jerky, rich mahogany color, fibers stretching, chili flakes and sesame, dark rustic background, cinematic soft lighting --ar 9:16',
    asmrTip: 'Tiếng xé từng thớ thịt bò mềm dai dai, tiếng vắt chanh xèo xèo lên bề mặt thịt.',
    cameraAngle: 'Góc nhìn thứ nhất, hai tay kéo giãn thớ thịt bò để lộ sợi thịt hồng tươi tẩm ướp đậm đà.',
    hookCaption: 'Khô bò mềm chuẩn vị Tây Bắc, vắt thêm nửa quả chanh là chấm ăn quên sầu!'
  },
  {
    id: 6,
    title: 'Rong biển kẹp hạt cháy tỏi mè giòn tan',
    category: 'kho',
    categoryName: 'Đồ ăn vặt khô',
    views: '480K Views',
    ordersBadge: '+95 đơn Shopee',
    retentionRate: '80% giữ chân',
    imageUrl: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?w=600&auto=format&fit=crop&q=80',
    description: 'Lớp bánh rong biển đen nhánh kẹp đầy hạt bí, hạt điều, hạnh nhân nướng thơm phức phủ tỏi phi vàng ruộm.',
    promptExample: 'POV hand holding up a crispy roasted seaweed crisp stuffed with pumpkin seeds, almonds and roasted sesame, golden fried garlic bits on top, dark wooden surface, crisp sharp focus, warm highlights --ar 9:16',
    asmrTip: 'Tiếng cắn hạt giòn vỡ tan tí tách kết hợp lớp rong biển giòn xốp.',
    cameraAngle: 'Góc nghiêng 30 độ khoe độ dày của lớp nhân hạt dinh dưỡng kẹp bên trong.',
    hookCaption: 'Ăn vặt healthy không sợ béo, thanh rong biển kẹp hạt giòn rụm cứu đói dân văn phòng!'
  },
  {
    id: 7,
    title: 'Mực cán tẩm gia vị sa tế cay ngọt',
    category: 'cay',
    categoryName: 'Đồ cay sốt',
    views: '730K Views',
    ordersBadge: '+145 đơn TikTok',
    retentionRate: '85% giữ chân',
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
    description: 'Mực tươi cán mỏng tơi xốp, ngấm đều mật ong, sa tế tỏi ớt, kéo sợi dài mềm dai đậm vị biển.',
    promptExample: 'POV tearing a sheet of roasted shredded spicy squid, thin fluffy fibers, coated with glistening amber honey chili sauce, macro lens 100mm, appetizing steam, vibrant colors --ar 9:16',
    asmrTip: 'Tiếng xé tơi từng thớ mực mềm xốp, tiếng nhai bùi ngậy gia vị tỏi ớt.',
    cameraAngle: 'POV hai tay cầm dải mực vàng cam xé nhẹ sang hai bên cho sợi mực bung tơi.',
    hookCaption: 'Mực cán tẩm sa tế cay ngọt này nhâm nhi lúc xem bóng đá hay làm lon nước ngọt thì hết nước chấm!'
  },
  {
    id: 8,
    title: 'Bánh gấu kem sữa béo ngậy tuổi thơ',
    category: 'ngot',
    categoryName: 'Bánh ngọt',
    views: '540K Views',
    ordersBadge: '+110 đơn Shopee',
    retentionRate: '78% giữ chân',
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=80',
    description: 'Vỏ bánh nướng hình chú gấu giòn tan, cắn ngập miệng là dòng kem sữa vani trắng mịn béo ngậy tràn ra.',
    promptExample: 'POV macro hand biting a cute bear biscuit, creamy thick white milk filling oozing out, golden baked crust texture, pastel cozy aesthetic background, high detail --ar 9:16',
    asmrTip: 'Tiếng vỏ bánh giòn tan "crackle" và dòng kem mềm mịn êm tai.',
    cameraAngle: 'Cận cảnh chiếc bánh gấu được cắn một góc để lộ nhân kem sữa tràn trề.',
    hookCaption: 'Món ăn vặt tuổi thơ phiên bản nhân kem sữa ngập ngụa béo ngậy 10/10!'
  },
  {
    id: 9,
    title: 'Xoài non lắc muối ớt tôm ứa nước miếng',
    category: 'chua',
    categoryName: 'Trái cây chua cay',
    views: '1.8M Views',
    ordersBadge: '+380 đơn TikTok',
    retentionRate: '93% giữ chân',
    imageUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop&q=80',
    description: 'Xoài non thái lát giòn tan, hạt muối ớt tôm Tây Ninh đỏ hồng bám chặt từng thớ xoài, ứa nước miếng ngay giây đầu tiên.',
    promptExample: 'POV first person perspective dipping a crunchy green young mango slice into pink savory shrimp chili salt, glistening sour juice droplets, ultra sharp food macro, vivid natural lighting, saliva-inducing mouthwatering --ar 9:16',
    asmrTip: 'Tiếng cắn xoài non "rộp rộp" giòn khấc, tiếng lắc hộp xoài lạo xạo hạt muối.',
    cameraAngle: 'Miếng xoài non chấm ngập chén muối ớt đưa sát ống kính với hạt muối bám lấp lánh.',
    hookCaption: 'Cảnh báo ứa nước miếng! Ai thèm đồ chua cay mà lướt qua clip này thì chịu sao nổi!'
  },
  {
    id: 10,
    title: 'Set nộm bò khô chua ngọt lạc rang giòn',
    category: 'chua',
    categoryName: 'Trái cây chua cay',
    views: '610K Views',
    ordersBadge: '+135 đơn TikTok',
    retentionRate: '83% giữ chân',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
    description: 'Đu đủ cà rốt bào sợi giòn sần sật, thịt bò khô xé cay, lạc rang vàng ruộm chan đẫm nước giấm đường ớt tỏi.',
    promptExample: 'POV chopsticks mixing fresh shredded green papaya salad topped with spicy dried beef and toasted peanuts, glossy sweet and sour dressing coating every strand, vibrant colors, rustic table, 4k --ar 9:16',
    asmrTip: 'Tiếng đũa trộn đều đĩa nộm sột soạt, tiếng nhai đu đủ và lạc rang giòn bùi.',
    cameraAngle: 'Đôi đũa gắp một gắp nộm đầy ắp bò khô và rau răm đưa lên cao trước camera.',
    hookCaption: 'Món ăn vặt vỉa hè quốc dân: Nộm bò khô chua ngọt cay tê làm tại nhà ngon hơn ngoài hàng!'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 1,
    name: 'Nguyễn Bích Ngọc',
    role: 'Mẹ bỉm sữa làm Affiliate TikTok',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    earningsBadge: 'Thu nhập 14.2tr/tháng',
    comment: 'Trước đây mỗi lần quay video phải mua 4-5 gói đồ ăn vặt về, vừa tốn cả triệu vừa ăn không hết thì ỉu. Từ ngày có Chatbot #VATC, mình gõ tên bánh tráng hay khô gà là có ngay hình ảnh POV chân thực từng giọt dầu sa tế. Đăng 3 hôm đã có video 400k view nổ hơn 80 đơn!',
    date: '2 ngày trước',
    verified: true
  },
  {
    id: 2,
    name: 'Trần Hoàng Long',
    role: 'Sinh viên năm 3 - Creator Shopee Video',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    earningsBadge: 'Đã tạo 150+ video',
    comment: 'Chatbot 268k mà quá chất lượng! Nó không chỉ cho prompt ảnh đẹp mà còn gợi ý luôn góc máy POV, mô tả âm thanh ASMR và câu hook mở đầu 3s. Mình set up hàng loạt video tự động mỗi ngày chỉ mất 30 phút, hoa hồng Shopee nhảy đều mỗi sáng thức dậy.',
    date: '4 ngày trước',
    verified: true
  },
  {
    id: 3,
    name: 'Lê Thu Trang',
    role: 'Chủ shop đồ ăn vặt & Affiliate',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    earningsBadge: 'Đột phá doanh số x3',
    comment: 'Shop mình có hơn 30 món đồ ăn vặt, thuê người quay chụp thì tốn kém quá. Áp dụng chatbot #VATC render mẫu sản phẩm đẹp như chụp trong studio ẩm thực Tokyo. Khách nhìn vào là nuốt nước bọt đặt hàng ngay!',
    date: '1 tuần trước',
    verified: true
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Tôi là người mới, chưa từng biết gì về AI hay làm video thì có dùng được không?',
    answer: 'Hoàn toàn được! Chatbot #VATC được thiết kế cực kỳ đơn giản cho người không rành công nghệ. Bạn chỉ cần gõ tên món ăn bạn muốn bán bằng tiếng Việt (ví dụ: "Bánh tráng phơi sương bơ cay"), chatbot sẽ tự động tạo trọn bộ prompt chuyên nghiệp, góc máy POV và kịch bản video. Bạn chỉ việc copy và dán là xong.'
  },
  {
    id: 'faq-2',
    question: 'Chatbot chạy trên điện thoại hay máy tính? Có cần máy cấu hình mạnh không?',
    answer: 'Bạn dùng mượt mà trên cả điện thoại di động (iPhone, Android) lẫn máy tính. Không yêu cầu cài đặt phần mềm nặng nề, không cần máy cấu hình khủng vì toàn bộ quy trình đều chạy trên nền tảng AI đám mây nhẹ nhàng.'
  },
  {
    id: 'faq-3',
    question: 'Mức giá 268.000đ là thanh toán một lần hay đóng tiền theo tháng?',
    answer: 'Chỉ 268.000đ thanh toán DUY NHẤT 1 LẦN — bạn được sở hữu chatbot trọn đời, dùng vĩnh viễn không giới hạn số lượt tạo prompt, không phát sinh bất kỳ khoản phụ phí duy trì nào.'
  },
  {
    id: 'faq-4',
    question: 'Các công cụ tạo hình ảnh và video AI đi kèm có mất phí không?',
    answer: 'Chúng tôi hướng dẫn bạn kết hợp với các nền tảng tạo ảnh và tạo video AI có gói Miễn Phí (Free Credits) hàng ngày cực kỳ dư dả để bạn làm hàng chục video mỗi tháng mà không phải tốn thêm tiền mua tool đắt đỏ.'
  },
  {
    id: 'faq-5',
    question: 'Sau khi chuyển khoản 268k, tôi sẽ nhận chatbot như thế nào?',
    answer: 'Bạn tạo đơn và thanh toán bằng VietQR trên trang payOS. Hệ thống tự xác nhận khi tiền về; sau đó Admin Đinh Đức Tuấn gửi đường link truy cập và mã kích hoạt qua Zalo hoặc email bạn đã nhập, đồng thời hỗ trợ 1-1 cho đến khi bạn tạo được video đầu tiên.'
  },
  {
    id: 'faq-6',
    question: 'Có được cập nhật thêm các món ăn vặt hot trend mới không?',
    answer: 'Có! Bạn sẽ được mời vào nhóm kín Facebook "Video AI Thực Chiến" và nhóm Zalo VIP. Khi có món đồ ăn vặt nào đang sốt trên TikTok/Shopee, Admin sẽ cập nhật công thức prompt và từ khóa mới nhất vào chatbot cho bạn hoàn toàn miễn phí.'
  }
];

export const DEMO_PRESETS = [
  'Bánh tráng phơi sương chấm bơ béo cay',
  'Khô gà lá chanh bơ tỏi giòn thơm',
  'Chân gà sốt cay rút xương sả tắc',
  'Cơm cháy mỡ hành chà bông cay giòn',
  'Xoài lắc muối tôm ứa nước miếng'
];

export function generateMockPrompt(dish: string): GeneratedPromptResult {
  const trimmed = dish.trim() || 'Bánh tráng sốt bơ';
  return {
    dishName: trimmed,
    vietnamesePrompt: `Góc nhìn thứ nhất POV bàn tay đang cầm thưởng thức ${trimmed}, nước sốt cay óng ả sóng sánh nhỏ giọt, bề mặt bóng bẩy bắt sáng studio ấm áp, hơi nóng nhẹ bốc lên, hạt mè và tỏi phi giòn rụm bám đều, độ chi tiết 8K siêu chân thực kích thích vị giác tột đỉnh.`,
    englishPrompt: `POV first-person perspective holding delicious ${trimmed}, glossy savory spicy chili sauce dripping slowly, warm studio cinematic soft backlight, appetizing steam rising, macro 85mm f/1.4 lens, shallow depth of field, ultra realistic food photography, crisp textures, mouthwatering, 4K --ar 9:16 --v 6.1`,
    cameraSettings: `Ống kính macro 85mm, khẩu độ f/1.4 - f/1.8, tỉ lệ khung hình chuẩn TikTok 9:16, độ phân giải 4K 60fps.`,
    lighting: `Ánh sáng ấm 3200K đánh xiên 45 độ làm nổi bật độ bóng bẩy của dầu sa tế và nước sốt.`,
    asmrAudioTip: `Ghép âm thanh xé bánh/cắn giòn "rôm rốp" ở giây thứ 0:01, kết hợp tiếng nhúng sốt sột soạt để kích thích thính giác người xem.`,
    hook3s: `\"Dừng lại 3 giây! Món ${trimmed} sốt đẫm thế này ai mà kiềm lòng cho được...\"`
  };
}
