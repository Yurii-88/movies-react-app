import { useTheme } from '../hooks/useTheme';
import { headerIconClasses } from './icons/constants';
import DarkThemeIcon from './icons/DarkThemeIcon';
import LightThemeIcon from './icons/LightThemeIcon';

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();
  const ThemeIcon = theme === 'dark' ? LightThemeIcon : DarkThemeIcon;

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      <ThemeIcon className={headerIconClasses} />
    </button>
  );
}
