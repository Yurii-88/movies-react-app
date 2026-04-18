export interface ButtonProps {
  children: React.ReactNode;
  classes: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}
