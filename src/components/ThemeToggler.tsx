import { useTheme } from '../context/ThemeContext';
import DarkIcon from './icons/DarkIcon';
import LightIcon from './icons/LightIcon';

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === 'dark' ? LightIcon : DarkIcon;

  return <Icon toggleTheme={toggleTheme} />;
}
