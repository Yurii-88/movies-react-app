import { useState } from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assets/tmdb-logo.svg';
import Input from '../common/Input';
import UserIcon from '../icons/UserIcon';
import Notifications from '../Notifications';
import ThemeToggler from '../ThemeToggler';
import UserMenu from '../UserMenu';

export default function Header() {
  const navigate = useNavigate();
  const [isUserMenuDisplayed, setIsUserMenuDisplayed] = useState(false);

  return (
    <header className="flex items-center justify-between bg-amber-200 p-2 dark:bg-gray-800">
      <img
        src={logo}
        alt="Movies React App Logo"
        width={100}
        height={100}
        className="cursor-pointer"
        onClick={() => navigate('/')}
      />
      <Input type="text" placeholder="Search..." />
      <div className="relative flex items-center gap-2">
        <Notifications />
        <UserIcon handleClick={() => setIsUserMenuDisplayed(prev => !prev)} />
        {isUserMenuDisplayed && <UserMenu />}
        <ThemeToggler />
      </div>
    </header>
  );
}
