import type { ButtonProps } from './Button.types';

export default function Button({ children, classes, onClick, type = 'button' }: ButtonProps) {
  return (
    <button className={`cursor-pointer ${classes}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
