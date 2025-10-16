import { Trash2 } from 'lucide-react';
import type { AttractionSummary } from '../../types/attraction';

type Props = {
  budget: number;
  items: AttractionSummary[];
  onRemove: (id: string) => void;
};

export default function PlanSidebar({ budget, items, onRemove }: Props) {
  const total = items.reduce((s, a) => s + (a.price?.amount ?? 0), 0);
  const remaining = Math.max(0, budget - total);

  return (
    <aside className='rounded-xl bg-blue-50 shadow-sm p-4 h-fit sticky top-20'>
      <h2 className='text-lg font-semibold text-blue-900'>Your Plan</h2>
      <p className='text-sm text-blue-800 mt-1'>
        Budget: <span className='font-semibold'>€{budget}</span> • Remaining:{' '}
        <span className='font-semibold'>€{remaining}</span>
      </p>

      <ul className='mt-4 space-y-2'>
        {items.length === 0 && (
          <li className='text-sm text-blue-900/80'>No items yet.</li>
        )}
        {items.map((it) => (
          <li
            key={it.id}
            className='flex items-center justify-between rounded-lg bg-white shadow px-3 py-2'
          >
            <div>
              <p className='text-sm font-medium text-gray-900'>{it.name}</p>
              <p className='text-xs text-gray-500'>
                {it.price ? `€${it.price.amount} ${it.price.currency}` : 'n/a'}
              </p>
            </div>
            <button
              onClick={() => onRemove(it.id)}
              className='inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700'
              aria-label={`Remove ${it.name}`}
            >
              <Trash2 className='h-4 w-4' />
              Remove
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
