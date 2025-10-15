export type Money = { amount: number; currency: string };

export interface AttractionSummary {
  id: string;
  name: string;
  lat: number;
  lon: number;
  categories?: string[];
  rating?: number;
  price?: Money;
  imageUrl?: string;
  description?: string;
  providerUrl?: string;
}
