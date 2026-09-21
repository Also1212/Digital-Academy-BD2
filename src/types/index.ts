export type ProductCategory = 'ebooks' | 'wordpress' | 'software' | 'services';

export interface ProductChapter {
  number: number;
  titleBn: string;
  summaryBn: string;
  topics: string[];
}

export interface TargetAudienceItem {
  iconName: string;
  titleBn: string;
  descBn: string;
}

export interface ProductFaq {
  questionBn: string;
  answerBn: string;
}

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  titleBn: string;
  titleEn: string;
  shortPitchBn: string;
  descriptionBn: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  badge?: string;
  isFlagship?: boolean;
  isComingSoon?: boolean;
  fileFormat?: string;
  fileSize?: string;
  pages?: number;
  languageBn: string;
  author: {
    nameBn: string;
    titleBn: string;
    experience: string;
  };
  chapters?: ProductChapter[];
  benefits?: string[];
  targetAudience?: TargetAudienceItem[];
  faqs?: ProductFaq[];
  downloadFileName?: string;
  releaseDateBn?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  titleBn: string;
  subtitleBn: string;
  descriptionBn: string;
  startingPrice: number;
  deliveryTimeBn: string;
  features: string[];
  deliverablesBn: string[];
  suitableForBn: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PaymentMethod = 'bkash' | 'nagad' | 'rocket' | 'card';

export interface OrderItem {
  product: Product;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  customerName: string;
  phone: string;
  email: string;
  district?: string;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: PaymentMethod;
  transactionId: string;
  senderPhone?: string;
  status: 'completed' | 'processing';
  downloadToken: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  titleBn: string;
  summaryBn: string;
  contentBn: string;
  categoryBn: string;
  readTimeBn: string;
  publishDateBn: string;
  authorBn: string;
}
