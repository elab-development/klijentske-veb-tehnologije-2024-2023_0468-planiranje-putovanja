import { ExternalLink, Plus } from 'lucide-react';
import type { AttractionSummary } from '../../types/attraction';

type Props = {
  item: AttractionSummary;
  onAdd: (item: AttractionSummary) => void;
};

export default function ActivityCard({ item, onAdd }: Props) {
  return (
    <article className='rounded-xl bg-white shadow hover:shadow-md transition overflow-hidden'>
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.name}
          className='w-full h-44 object-cover'
          loading='lazy'
        />
      )}
      <div className='p-3 space-y-2'>
        <h3 className='font-semibold text-gray-900'>{item.name}</h3>
        {item.description && (
          <p className='text-sm text-gray-600 max-h-24 overflow-hidden'>
            {item.description}
          </p>
        )}
        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-700'>
            {item.price
              ? `€${item.price.amount} ${item.price.currency}`
              : 'Price: n/a'}
          </span>
          <button
            onClick={() => onAdd(item)}
            className='inline-flex items-center gap-1 text-sm bg-emerald-600 text-white px-3 py-1.5 rounded hover:bg-emerald-700 transition'
          >
            <Plus className='h-4 w-4' />
            Add
          </button>
        </div>
        {item.providerUrl && (
          <a
            href={item.providerUrl}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-1 text-xs text-blue-700 hover:underline'
          >
            <ExternalLink className='h-3 w-3' />
            View / Book
          </a>
        )}
      </div>
    </article>
  );
}
