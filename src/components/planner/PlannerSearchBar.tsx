import { useState } from 'react';
import { MapPin, CalendarDays, Wallet, Search } from 'lucide-react';

type Props = {
  initialDestination?: string;
  initialDays?: number;
  initialBudget?: number;
  loading?: boolean;
  onSubmit: (payload: {
    destination: string;
    days: number;
    budget: number;
  }) => void;
};

export default function PlannerSearchBar({
  initialDestination = '',
  initialDays = 3,
  initialBudget = 300,
  loading,
  onSubmit,
}: Props) {
  const [destination, setDestination] = useState(initialDestination);
  const [days, setDays] = useState(initialDays);
  const [budget, setBudget] = useState(initialBudget);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ destination, days, budget });
      }}
      className='rounded-xl bg-blue-50 shadow-sm p-4 md:p-5'
    >
      <div className='grid gap-3 md:grid-cols-[1.2fr,0.6fr,0.8fr,auto]'>
        <label className='relative'>
          <span className='absolute left-3 top-2.5 text-blue-700'>
            <MapPin className='h-4 w-4' />
          </span>
          <input
            className='w-full rounded-lg bg-white pl-9 pr-3 py-2 outline-none ring-1 ring-blue-100 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-300 transition'
            placeholder='Destination (e.g. Rome)'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>

        <label className='relative'>
          <span className='absolute left-3 top-2.5 text-blue-700'>
            <CalendarDays className='h-4 w-4' />
          </span>
          <input
            type='number'
            min={1}
            className='w-full rounded-lg bg-white pl-9 pr-3 py-2 outline-none ring-1 ring-blue-100 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-300 transition'
            placeholder='Days'
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          />
        </label>

        <label className='relative'>
          <span className='absolute left-3 top-2.5 text-blue-700'>
            <Wallet className='h-4 w-4' />
          </span>
          <input
            type='number'
            min={0}
            className='w-full rounded-lg bg-white pl-9 pr-3 py-2 outline-none ring-1 ring-blue-100 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-300 transition'
            placeholder='Budget (EUR)'
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </label>

        <button
          type='submit'
          disabled={loading}
          className='inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 disabled:opacity-60 transition'
        >
          <Search className='h-4 w-4 mr-2' />
          {loading ? 'Loading…' : 'Search'}
        </button>
      </div>
    </form>
  );
}
