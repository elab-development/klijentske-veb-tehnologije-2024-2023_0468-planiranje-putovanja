import { Link } from 'react-router-dom';
import { MapPinOff, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className='flex items-center justify-center py-14'>
      <div className='w-full max-w-xl text-center'>
        <div className='inline-flex items-center justify-center rounded-2xl bg-blue-50 p-4 shadow-sm'>
          <MapPinOff className='h-8 w-8 text-blue-700' />
        </div>

        <h1 className='mt-4 text-3xl font-bold text-blue-900'>
          Page not found
        </h1>
        <p className='mt-2 text-gray-700'>
          The page you’re looking for doesn’t exist or was moved.
        </p>

        <div className='mt-6 flex flex-wrap items-center justify-center gap-2'>
          <Link
            to='/'
            className='inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition'
          >
            <Home className='h-4 w-4' />
            Go Home
          </Link>
        </div>

        <p className='mt-6 text-xs text-gray-500'>Error code: 404</p>
      </div>
    </section>
  );
}
