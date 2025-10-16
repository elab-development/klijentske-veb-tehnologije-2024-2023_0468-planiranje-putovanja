type Props = {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  page,
  pageSize,
  total,
  onPageChange,
}: Props) {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  if (pages <= 1) return null;

  const btn =
    'min-w-9 h-9 inline-flex items-center justify-center rounded-md text-sm px-3 py-2 bg-white shadow hover:shadow-md transition';
  const active = 'bg-blue-600 text-blue-600 font-bold hover:shadow-md';

  const items = Array.from({ length: pages }, (_, i) => i + 1).slice(
    Math.max(0, page - 3),
    Math.max(0, page - 3) + 5
  );

  return (
    <div className='flex items-center justify-center gap-2 mt-6'>
      <button
        className={btn}
        disabled={page === 1}
        onClick={() => onPageChange(Math.max(1, page - 1))}
      >
        ‹
      </button>
      {page > 3 && (
        <>
          <button className={btn} onClick={() => onPageChange(1)}>
            1
          </button>
          <span className='text-sm text-gray-500'>…</span>
        </>
      )}
      {items.map((p) => (
        <button
          key={p}
          className={`${btn} ${p === page ? active : ''}`}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}
      {page < pages - 2 && (
        <>
          <span className='text-sm text-gray-500'>…</span>
          <button className={btn} onClick={() => onPageChange(pages)}>
            {pages}
          </button>
        </>
      )}
      <button
        className={btn}
        disabled={page === pages}
        onClick={() => onPageChange(Math.min(pages, page + 1))}
      >
        ›
      </button>
    </div>
  );
}
