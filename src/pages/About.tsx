import { Link } from 'react-router-dom';
import {
  Plane,
  Star,
  CircleDollarSign,
  Layers,
  MapPin,
  Heart,
  CalendarDays,
} from 'lucide-react';
import Feature from '../components/about/Feature';
import StepItem from '../components/about/StepItem';

export default function About() {
  return (
    <section className='space-y-8'>
      <div className='rounded-2xl bg-blue-50 p-6 md:p-8 shadow-sm'>
        <div className='flex items-start gap-4'>
          <div className='rounded-xl bg-white p-3 shadow'>
            <Plane className='h-6 w-6 text-blue-700' />
          </div>
          <div className='flex-1'>
            <h1 className='text-3xl font-bold text-blue-900'>
              About TravelPlanner
            </h1>
            <p className='mt-2 text-gray-700 max-w-3xl'>
              Plan your next trip with ease. Discover activities, manage your
              budget, and build an itinerary that fits your style.
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
                View Saved Plans
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className='text-xl font-semibold text-blue-900 mb-3'>
          What you can do
        </h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <Feature
            icon={<MapPin className='h-5 w-5 text-blue-700' />}
            title='Explore destinations'
            desc='Search for cities worldwide and see highlights, activities and experiences available there.'
          />
          <Feature
            icon={<Star className='h-5 w-5 text-blue-700' />}
            title='Discover top attractions'
            desc='View images, ratings and descriptions of activities to easily compare options.'
          />
          <Feature
            icon={<CircleDollarSign className='h-5 w-5 text-blue-700' />}
            title='Plan within your budget'
            desc='Add activities to your plan and instantly see how much of your budget is left.'
          />
          <Feature
            icon={<Layers className='h-5 w-5 text-blue-700' />}
            title='Save and revisit plans'
            desc='Save your itineraries and open them later to continue planning or adjust details.'
          />
          <Feature
            icon={<CalendarDays className='h-5 w-5 text-blue-700' />}
            title='Organize by trip duration'
            desc='Specify the number of days to tailor activities and recommendations to your timeframe.'
          />
          <Feature
            icon={<Heart className='h-5 w-5 text-blue-700' />}
            title='Get inspired'
            desc='Use the Explore page to browse popular destinations and curated ideas for your next trip.'
          />
        </div>
      </div>

      <div className='rounded-2xl bg-white shadow p-6'>
        <h2 className='text-xl font-semibold text-blue-900'>How it works</h2>
        <ol className='mt-4 space-y-3'>
          <StepItem
            step={1}
            title='Search a destination'
            desc='Enter your city and trip details to see activities, with images and ratings.'
          />
          <StepItem
            step={2}
            title='Build your plan'
            desc='Add activities to your personal itinerary and track your spending.'
          />
          <StepItem
            step={3}
            title='Save your plan'
            desc='Save it to easily view or adjust later from the My Plans page.'
          />
        </ol>
      </div>
    </section>
  );
}
