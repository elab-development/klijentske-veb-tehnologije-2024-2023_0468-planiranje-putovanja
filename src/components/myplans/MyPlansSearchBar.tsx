import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

type Props = {
  initialQuery?: string;
  onChange: (q: string) => void;
};

export default function MyPlansSearchBar({
  initialQuery = '',
  onChange,
}: Props) {
  const [q, setQ] = useState(initialQuery);

  useEffect(() => {
    onChange(q);
  }, []);
  useEffect(() => {
    onChange(q);
  }, [q, onChange]);

  return (
    <div className='rounded-xl bg-blue-50 shadow-sm p-4 md:p-5'>
      <div className='grid gap-3 md:grid-cols-[1fr,auto]'>
        <label className='relative'>
          <span className='absolute left-3 top-2.5 text-blue-700'>
            <Search className='h-4 w-4' />
          </span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder='Search by name or destination…'
            className='w-full rounded-lg bg-white pl-9 pr-3 py-2 outline-none ring-1 ring-blue-100 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-300 transition'
          />
        </label>

        <button
          type='button'
          onClick={() => setQ('')}
          className='inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm shadow hover:shadow-md transition'
        >
          Clear
        </button>
      </div>
    </div>
  );
}
