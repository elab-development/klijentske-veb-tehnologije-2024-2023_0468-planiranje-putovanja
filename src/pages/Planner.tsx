import { useMemo, useState } from 'react';
import { AmadeusClient } from '../services/amadeus';
import { mapAmadeusActivity } from '../utils/mapAmadeusToAttraction';
import type { AttractionSummary } from '../types/attraction';

import PlannerSearchBar from '../components/planner/PlannerSearchBar';
import ActivityCard from '../components/planner/ActivityCard';
import PlanSidebar from '../components/planner/PlanSidebar';
import Pagination from '../components/planner/Pagination';
import LoadingGrid from '../components/planner/LoadingGrid';

export default function Planner() {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState(300);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string>('');

  const [results, setResults] = useState<AttractionSummary[]>([]);
  const [plan, setPlan] = useState<AttractionSummary[]>([]);

  const [page, setPage] = useState(1);
  const pageSize = 9;
  const total = results.length;
  const start = (page - 1) * pageSize;
  const pageItems = results.slice(start, start + pageSize);

  const amadeus = useMemo(
    () =>
      new AmadeusClient(
        import.meta.env.VITE_AMADEUS_API_KEY as string,
        import.meta.env.VITE_AMADEUS_API_SECRET as string
      ),
    []
  );

  async function geocode(
    query: string
  ): Promise<{ lat: number; lon: number } | null> {
    const preset: Record<string, { lat: number; lon: number }> = {
      rome: { lat: 41.9028, lon: 12.4964 },
      paris: { lat: 48.8566, lon: 2.3522 },
      belgrade: { lat: 44.7866, lon: 20.4489 },
      london: { lat: 51.5072, lon: -0.1276 },
      barcelona: { lat: 41.3874, lon: 2.1686 },
    };
    const k = query.trim().toLowerCase();
    return preset[k] ?? null;
  }

  const handleSearch = async (p: {
    destination: string;
    days: number;
    budget: number;
  }) => {
    setDestination(p.destination);
    setDays(p.days);
    setBudget(p.budget);

    if (!p.destination.trim()) return;
    setLoading(true);
    setErr('');
    setResults([]);
    setPage(1);

    try {
      const geo = await geocode(p.destination);
      if (!geo) throw new Error('Destination not found (demo geocoder)');
      const data = await amadeus.searchActivities({
        lat: geo.lat,
        lon: geo.lon,
        radiusMeters: 6000,
        pageLimit: 60,
        sortBy: 'rating',
        currency: 'EUR',
      });
      const mapped = data.map(mapAmadeusActivity);
      setResults(mapped);
    } catch (e: any) {
      setErr(e?.message || 'Error fetching activities');
    } finally {
      setLoading(false);
    }
  };

  const addToPlan = (a: AttractionSummary) => {
    setPlan((p) => (p.some((x) => x.id === a.id) ? p : [...p, a]));
  };
  const removeFromPlan = (id: string) =>
    setPlan((p) => p.filter((x) => x.id !== id));

  return (
    <section className='grid gap-8 lg:grid-cols-[1fr,380px]'>
      <div>
        <h1 className='text-2xl font-bold mb-4 text-blue-900'>
          Create Your Travel Plan
        </h1>

        <PlannerSearchBar
          initialDestination={destination}
          initialDays={days}
          initialBudget={budget}
          loading={loading}
          onSubmit={handleSearch}
        />

        {err && <p className='text-red-600 text-sm mt-3'>{err}</p>}

        {loading ? (
          <LoadingGrid />
        ) : (
          <>
            {results.length === 0 ? (
              <p className='mt-6 text-sm text-gray-600'>
                No activities yet — try searching for a destination.
              </p>
            ) : (
              <>
                <div className='mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                  {pageItems.map((a) => (
                    <ActivityCard key={a.id} item={a} onAdd={addToPlan} />
                  ))}
                </div>

                <Pagination
                  page={page}
                  pageSize={pageSize}
                  total={total}
                  onPageChange={setPage}
                />
              </>
            )}
          </>
        )}
      </div>

      <PlanSidebar budget={budget} items={plan} onRemove={removeFromPlan} />
    </section>
  );
}
