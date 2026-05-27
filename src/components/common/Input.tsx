import type { InputProps } from './types';

export default function Input({ type = 'text', placeholder = 'Search...', size = 30 }: InputProps) {
  return (
    <input
      type={type}
      size={size}
      placeholder={placeholder}
      onChange={e => console.log(e.target.value)}
      className="rounded border border-gray-900 bg-amber-100 p-1 text-slate-900 dark:border-amber-200 dark:bg-gray-600 dark:text-slate-100"
    />
  );
}
