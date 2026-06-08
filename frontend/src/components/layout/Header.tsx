import { Link } from 'react-router';
import logo from '../../assets/tmdb-logo.svg';
import Notifications from '../Notifications';
import ThemeToggler from '../ThemeToggler';
import UserMenu from '../UserMenu';

export default function Header() {
  function handleSearchMovie(event: React.ChangeEvent<HTMLInputElement>) {
    // TODO: implement search functionality
    console.log('Search query:', event.target.value);
  }

  return (
    <header className="flex items-center justify-between bg-amber-200 p-2 dark:bg-gray-800">
      <Link to="/">
        <img src={logo} alt="Movies React App Logo" width={100} className="cursor-pointer" />
      </Link>
      <input
        aria-label="Search movies"
        id="search-input"
        placeholder="Search..."
        className="w-72 rounded border border-gray-900 bg-amber-100 p-1 text-slate-900 outline-none dark:border-amber-200 dark:bg-gray-600 dark:text-slate-100"
        name="search-input"
        onChange={handleSearchMovie}
      />

      <div className="flex items-center gap-2">
        <Notifications />
        <UserMenu />
        <ThemeToggler />
      </div>
    </header>
  );
}
