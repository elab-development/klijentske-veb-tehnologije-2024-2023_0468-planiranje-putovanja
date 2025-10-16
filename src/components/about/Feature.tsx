export default function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className='rounded-xl bg-white p-4 shadow hover:shadow-md transition'>
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
