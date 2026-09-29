export interface VideoShowcaseItem {
  id: number;
  title: string;
  category: 'cay' | 'kho' | 'chua' | 'ngot';
  categoryName: string;
  views: string;
  ordersBadge: string;
  retentionRate: string;
  imageUrl: string;
  description: string;
  promptExample: string;
  asmrTip: string;
  cameraAngle: string;
  hookCaption: string;
}

export interface ReviewItem {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  earningsBadge: string;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GeneratedPromptResult {
  dishName: string;
  vietnamesePrompt: string;
  englishPrompt: string;
  cameraSettings: string;
  lighting: string;
  asmrAudioTip: string;
  hook3s: string;
}
