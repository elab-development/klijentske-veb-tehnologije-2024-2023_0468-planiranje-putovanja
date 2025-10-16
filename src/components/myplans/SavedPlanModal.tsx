import { useEffect } from 'react';
import type { SavedPlan } from '../../types/plan';

type Props = {
  plan: SavedPlan;
  onClose: () => void;
};

export default function SavedPlanModal({ plan, onClose }: Props) {
  // ESC to close + lock scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center px-4'
      aria-modal='true'
      role='dialog'
    >
      <div
        className='absolute inset-0 bg-black/40 backdrop-blur-sm'
        onClick={onClose}
      />

      <div className='relative w-full max-w-2xl rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden'>
        <div className='p-4 bg-blue-50/60'>
          <h2 className='text-lg font-semibold text-blue-900'>{plan.name}</h2>
          <p className='text-sm text-blue-900/80'>
            {plan.destination} · {plan.days} {plan.days === 1 ? 'day' : 'days'}
          </p>
        </div>

        <div className='p-4 space-y-3 max-h-[70vh] overflow-auto'>
          <div className='text-sm text-gray-700'>
            <p>
              Budget: <span className='font-medium'>€{plan.budget}</span> —
              Total: <span className='font-medium'>€{plan.total}</span>
            </p>
          </div>

          <ul className='space-y-2'>
            {plan.items.length === 0 ? (
              <li className='text-sm text-gray-600'>No items in this plan.</li>
            ) : (
              plan.items.map((it) => (
                <li
                  key={it.id}
                  className='flex items-center justify-between rounded-xl bg-blue-50 px-3 py-2 ring-1 ring-blue-100'
                >
                  <div className='pr-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      {it.name}
                    </p>
                    <p className='text-xs text-gray-600'>
                      {it.price
                        ? `€${it.price.amount} ${it.price.currency}`
                        : 'n/a'}
                    </p>
                  </div>
                  {it.imageUrl && (
                    <img
                      src={it.imageUrl}
                      alt={it.name}
                      className='h-12 w-20 object-cover rounded-md'
                      loading='lazy'
                    />
                  )}
                </li>
              ))
            )}
          </ul>
        </div>

        <div className='p-4 bg-gray-50/60 flex items-center justify-end gap-2'>
          <button
            onClick={onClose}
            className='rounded-lg bg-white px-3 py-2 text-sm shadow hover:shadow-md transition ring-1 ring-gray-200'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
