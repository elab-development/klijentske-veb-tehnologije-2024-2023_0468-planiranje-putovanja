export default function LoadingGrid({ count = 9 }: { count?: number }) {
  return (
    <div className='mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-4'>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className='rounded-xl bg-white shadow overflow-hidden'>
          <div className='w-full h-44 bg-gray-200 animate-pulse' />
          <div className='p-3 space-y-2'>
            <div className='h-4 bg-gray-200 rounded animate-pulse w-2/3' />
            <div className='h-3 bg-gray-200 rounded animate-pulse w-5/6' />
            <div className='h-3 bg-gray-200 rounded animate-pulse w-4/6' />
          </div>
        </div>
      ))}
    </div>
  );
}
