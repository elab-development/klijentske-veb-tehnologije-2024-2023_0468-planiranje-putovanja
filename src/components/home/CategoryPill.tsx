export default function CategoryPill({
  label,
  selected = false,
  onClick,
}: {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-sm transition shadow-sm ${
        selected
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-white text-blue-800 hover:shadow-md'
      }`}
    >
      {label}
    </button>
  );
}
