export default function Home() {
  return (
    <section className='space-y-6 text-center'>
      <h1 className='text-3xl font-bold'>Welcome to TravelPlanner</h1>
      <p className='max-w-xl mx-auto text-gray-600'>
        Create personalized travel plans — choose your destination, trip length
        and budget to discover attractions that match your preferences.
      </p>
      <a
        href='/planner'
        className='inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition'
      >
        Start Planning
      </a>
    </section>
  );
}
