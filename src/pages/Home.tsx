import { Link } from 'react-router-dom';
import {
  Plane,
  Sparkles,
  Star,
  Compass,
  CalendarDays,
  CircleDollarSign,
} from 'lucide-react';
import { useState } from 'react';
import CategoryPill from '../components/home/CategoryPill';

export default function Home() {
  const [activeCat, setActiveCat] = useState<string>('All');

  const categories = [
    'All',
    'Culture',
    'Outdoors',
    'Food & Wine',
    'Family',
    'Nightlife',
  ];

  return (
    <section className='space-y-10'>
      <div className='rounded-2xl bg-blue-50 p-6 md:p-8 shadow-sm'>
        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-6'>
          <div className='rounded-xl bg-white p-3 shadow'>
            <Plane className='h-6 w-6 text-blue-700' />
          </div>
          <div className='flex-1'>
            <h1 className='text-3xl font-bold text-blue-900'>
              Plan trips you’ll actually love
            </h1>
            <p className='mt-2 text-gray-700 max-w-3xl'>
              Discover activities, compare options with images and ratings,
              track your budget, and save your itinerary for later.
            </p>

            <div className='mt-4 flex flex-wrap gap-2'>
              <Link
                to='/planner'
                className='inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition'
              >
                Start Planning
              </Link>
              <Link
                to='/plans'
                className='inline-flex items-center rounded-lg bg-white px-4 py-2 shadow hover:shadow-md transition'
              >
                My Plans
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='grid gap-4 md:grid-cols-3'>
        <Highlight
          icon={<Sparkles className='h-5 w-5 text-blue-700' />}
          title='Smart discovery'
          desc='See popular activities with images and ratings for quick decision-making.'
        />
        <Highlight
          icon={<CircleDollarSign className='h-5 w-5 text-blue-700' />}
          title='Budget tracking'
          desc='Add activities to your plan and instantly see what’s left to spend.'
        />
        <Highlight
          icon={<CalendarDays className='h-5 w-5 text-blue-700' />}
          title='Custom itineraries'
          desc='Shape your trip by duration and preferences, then save it for later.'
        />
      </div>

      <div>
        <h2 className='text-xl font-semibold text-blue-900 mb-3'>
          Browse by category
        </h2>
        <div className='flex flex-wrap gap-2'>
          {categories.map((c) => (
            <CategoryPill
              key={c}
              label={c}
              selected={activeCat === c}
              onClick={() => setActiveCat(c)}
            />
          ))}
        </div>
      </div>

      <div className='rounded-2xl bg-white shadow p-6'>
        <h2 className='text-xl font-semibold text-blue-900 mb-3'>
          Why travelers like this
        </h2>
        <ul className='grid gap-3 md:grid-cols-2'>
          <li className='flex items-start gap-3'>
            <div className='rounded-lg bg-blue-50 p-2'>
              <Star className='h-5 w-5 text-blue-700' />
            </div>
            <div>
              <p className='font-medium text-gray-900'>Clear, visual choices</p>
              <p className='text-sm text-gray-600'>
                Images, ratings and concise descriptions help you pick fast.
              </p>
            </div>
          </li>
          <li className='flex items-start gap-3'>
            <div className='rounded-lg bg-blue-50 p-2'>
              <Compass className='h-5 w-5 text-blue-700' />
            </div>
            <div>
              <p className='font-medium text-gray-900'>Designed for action</p>
              <p className='text-sm text-gray-600'>
                From explore to plan to save — everything is a click away.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Highlight({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className='rounded-2xl bg-white p-4 shadow hover:shadow-md transition'>
      <div className='flex items-start gap-3'>
        <div className='rounded-lg bg-blue-50 p-2'>{icon}</div>
        <div>
          <h3 className='font-semibold text-gray-900'>{title}</h3>
          <p className='text-sm text-gray-600 mt-1'>{desc}</p>
        </div>
      </div>
    </div>
  );
}
