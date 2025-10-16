import type { AttractionSummary } from './attraction';

export interface SavedPlan {
  id: string;
  name: string;
  destination: string;
  days: number;
  budget: number;
  total: number;
  items: AttractionSummary[];
  createdAt: string;
}
