import { useEffect, useMemo, useState } from 'react';
import { getPlans, deletePlan as removePlanLS } from '../utils/storage';
import type { SavedPlan } from '../types/plan';
import MyPlansSearchBar from '../components/myplans/MyPlansSearchBar';
import SavedPlanCard from '../components/myplans/SavedPlanCard';
import SavedPlanModal from '../components/myplans/SavedPlanModal';

export default function MyPlans() {
  const [plans, setPlans] = useState<SavedPlan[]>([]);
  const [q, setQ] = useState('');
  const [view, setView] = useState<SavedPlan | null>(null);

  useEffect(() => {
    setPlans(getPlans());
  }, []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return plans;
    return plans.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.destination.toLowerCase().includes(term)
    );
  }, [plans, q]);

  const deletePlan = (id: string) => {
    if (!confirm('Delete this plan? This action cannot be undone.')) return;
    removePlanLS(id);
    setPlans((prev) => prev.filter((p) => p.id !== id));
    if (view?.id === id) setView(null);
  };

  const exportJson = (plan: SavedPlan) => {
    const blob = new Blob([JSON.stringify(plan, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${plan.name.replace(/\s+/g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section>
      <h1 className='text-2xl font-bold text-blue-900 mb-4'>My Plans</h1>

      <MyPlansSearchBar initialQuery={q} onChange={setQ} />

      {filtered.length === 0 ? (
        <p className='text-sm text-gray-600 mt-4'>No saved plans found.</p>
      ) : (
        <div className='mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-4'>
          {filtered.map((p) => (
            <SavedPlanCard
              key={p.id}
              plan={p}
              onView={setView}
              onExport={exportJson}
              onDelete={deletePlan}
            />
          ))}
        </div>
      )}

      {view && <SavedPlanModal plan={view} onClose={() => setView(null)} />}
    </section>
  );
}
