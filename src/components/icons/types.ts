import type { SVGProps } from 'react';

export interface ThemeIconProps {
  toggleTheme: () => void;
}

export interface UserIconProps {
  handleClick: () => void;
}

export type IconProps = SVGProps<SVGSVGElement>;
