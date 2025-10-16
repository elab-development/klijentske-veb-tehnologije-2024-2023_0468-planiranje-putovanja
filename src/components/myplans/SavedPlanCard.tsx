import {
  Trash2,
  Download,
  Eye,
  MapPin,
  CalendarDays,
  Wallet,
  Package,
} from 'lucide-react';
import type { SavedPlan } from '../../types/plan';

type Props = {
  plan: SavedPlan;
  onView: (p: SavedPlan) => void;
  onExport: (p: SavedPlan) => void;
  onDelete: (id: string) => void;
};

export default function SavedPlanCard({
  plan,
  onView,
  onExport,
  onDelete,
}: Props) {
  return (
    <article className='rounded-xl bg-white shadow hover:shadow-md transition overflow-hidden'>
      <div className='p-4 space-y-3'>
        <h3 className='font-semibold text-gray-900 line-clamp-1'>
          {plan.name}
        </h3>

        <div className='text-sm text-gray-700 space-y-1'>
          <p className='flex items-center gap-2'>
            <MapPin className='h-4 w-4 text-blue-700' />
            <span className='line-clamp-1'>{plan.destination}</span>
          </p>
          <p className='flex items-center gap-2'>
            <CalendarDays className='h-4 w-4 text-blue-700' />
            <span>
              {plan.days} {plan.days === 1 ? 'day' : 'days'}
            </span>
          </p>
          <p className='flex items-center gap-2'>
            <Wallet className='h-4 w-4 text-blue-700' />
            <span>
              Budget: €{plan.budget} · Total: €{plan.total}
            </span>
          </p>
          <p className='flex items-center gap-2'>
            <Package className='h-4 w-4 text-blue-700' />
            <span>
              {plan.items.length} {plan.items.length === 1 ? 'item' : 'items'}
            </span>
          </p>
          <p className='text-xs text-gray-500'>
            Saved: {new Date(plan.createdAt).toLocaleString()}
          </p>
        </div>

        <div className='flex items-center justify-between pt-2'>
          <button
            onClick={() => onView(plan)}
            className='inline-flex items-center gap-1 text-sm rounded bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700 transition'
          >
            <Eye className='h-4 w-4' />
            View
          </button>
          <div className='flex items-center gap-2'>
            <button
              onClick={() => onExport(plan)}
              className='inline-flex items-center gap-1 text-sm rounded bg-white px-3 py-1.5 shadow hover:shadow-md transition'
              title='Export JSON'
            >
              <Download className='h-4 w-4 text-blue-700' />
              Export
            </button>
            <button
              onClick={() => onDelete(plan.id)}
              className='inline-flex items-center gap-1 text-sm rounded bg-white px-3 py-1.5 shadow hover:shadow-md text-red-600 transition'
              title='Delete'
            >
              <Trash2 className='h-4 w-4' />
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
