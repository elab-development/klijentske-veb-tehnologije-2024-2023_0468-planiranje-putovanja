import type { SavedPlan } from '../types/plan';

const KEY = 'travel_plans';

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function getPlans(): SavedPlan[] {
  return safeParse<SavedPlan[]>(localStorage.getItem(KEY)) ?? [];
}

export function savePlan(plan: SavedPlan) {
  const all = getPlans();
  all.unshift(plan);
  localStorage.setItem(KEY, JSON.stringify(all));
}

export function deletePlan(id: string) {
  const next = getPlans().filter((p) => p.id !== id);
  localStorage.setItem(KEY, JSON.stringify(next));
}
