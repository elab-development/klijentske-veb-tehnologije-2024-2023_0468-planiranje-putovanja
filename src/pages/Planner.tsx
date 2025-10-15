import { useState } from 'react';

export default function Planner() {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(1);
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Later: call API to fetch attractions
    console.log({ destination, days, budget });
  };

  return (
    <section>
      <h1 className='text-2xl font-bold mb-4'>Create Your Travel Plan</h1>
      <form onSubmit={handleSubmit} className='space-y-4 max-w-md'>
        <input
          type='text'
          placeholder='Destination'
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className='w-full border rounded px-3 py-2'
        />
        <input
          type='number'
          placeholder='Number of Days'
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className='w-full border rounded px-3 py-2'
        />
        <input
          type='number'
          placeholder='Budget (EUR)'
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className='w-full border rounded px-3 py-2'
        />
        <button
          type='submit'
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
        >
          Show Suggestions
        </button>
      </form>
    </section>
  );
}
