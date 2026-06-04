export default function PrimaryButton({
  className = '',
  label,
  onClick,
}: {
  className?: string;
  label: string;
  onClick?: () => void;
}) {
  const border = 'border border-gray-900 dark:border-amber-200';
  const color = 'bg-amber-100 text-black dark:bg-gray-600 dark:text-white';

  return (
    <button className={`cursor-pointer rounded p-2 ${border} ${color} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}
