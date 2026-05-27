import type { IconProps } from './types';

export default function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 cursor-pointer text-gray-900 dark:text-amber-200"
      {...props}
    >
      {children}
    </svg>
  );
}
