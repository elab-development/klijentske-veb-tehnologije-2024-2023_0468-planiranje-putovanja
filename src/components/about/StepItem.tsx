export default function StepItem({
  step,
  title,
  desc,
}: {
  step: number;
  title: string;
  desc: string;
}) {
  return (
    <li className='flex gap-3'>
      <span className='h-7 w-7 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold'>
        {step}
      </span>
      <div>
        <p className='font-medium text-gray-900'>{title}</p>
        <p className='text-sm text-gray-600'>{desc}</p>
      </div>
    </li>
  );
}
