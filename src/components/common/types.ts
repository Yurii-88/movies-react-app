export interface ButtonProps {
  children: React.ReactNode;
  classes: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
}

export interface InputProps {
  type?: string;
  placeholder?: string;
  size?: number;
}
