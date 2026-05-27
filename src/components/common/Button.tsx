import type { ButtonProps } from './types';

export default function Button({ children, classes, onClick, type = 'button' }: ButtonProps) {
  return (
    <button className={`cursor-pointer rounded ${classes}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
