import { Trash2, Save } from 'lucide-react';
import type { AttractionSummary } from '../../types/attraction';

type Props = {
  destination: string;
  days: number;
  budget: number;
  items: AttractionSummary[];
  onRemove: (id: string) => void;
  onSave: (name: string) => void;
};

export default function PlanSidebar({
  destination,
  days,
  budget,
  items,
  onRemove,
  onSave,
}: Props) {
  const total = items.reduce((s, a) => s + (a.price?.amount ?? 0), 0);
  const remaining = Math.max(0, budget - total);

  return (
    <aside className='rounded-xl bg-blue-50 shadow-sm p-4 h-fit sticky top-20'>
      <h2 className='text-lg font-semibold text-blue-900'>Your Plan</h2>
      <p className='text-sm text-blue-800 mt-1'>
        {destination ? (
          <span className='font-medium'>{destination}</span>
        ) : (
          'Destination not set'
        )}
        {' · '}Days: <span className='font-medium'>{days}</span>
      </p>
      <p className='text-sm text-blue-800'>
        Budget: <span className='font-semibold'>€{budget}</span> • Remaining:{' '}
        <span className='font-semibold'>€{remaining}</span>
      </p>

      <div className='mt-4 rounded-lg bg-white shadow p-3 space-y-2'>
        <label className='block text-xs text-gray-500'>Plan name</label>
        <input
          id='plan-name'
          placeholder='e.g. Rome weekend with friends'
          className='w-full rounded border px-3 py-2 text-sm'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const name = (e.target as HTMLInputElement).value.trim();
              if (name) onSave(name);
            }
          }}
        />
        <button
          onClick={() => {
            const input = document.getElementById(
              'plan-name'
            ) as HTMLInputElement | null;
            const name = input?.value.trim() || '';
            if (name) onSave(name);
          }}
          className='w-full inline-flex items-center justify-center gap-2 rounded bg-blue-600 text-white px-3 py-2 text-sm hover:bg-blue-700 transition'
          disabled={items.length === 0}
          title={
            items.length === 0
              ? 'Add at least one item to save'
              : 'Save plan to this device'
          }
        >
          <Save className='h-4 w-4' />
          Save Plan
        </button>
      </div>

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
