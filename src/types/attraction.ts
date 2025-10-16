export type Money = { amount: number; currency: string };

export interface AttractionSummary {
  id: string;
  name: string;
  lat: number;
  lon: number;
  description?: string;
  imageUrl?: string;
  images?: string[];
  categories?: string[];
  rating?: number;
  durationText?: string;
  price?: Money;
  providerUrl?: string;
}
