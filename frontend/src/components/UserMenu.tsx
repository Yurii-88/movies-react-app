import { useEffect, useRef, useState } from 'react';
import UserIcon from './icons/UserIcon';

export default function UserProfile() {
  const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonClasses =
    'block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer';

  useEffect(() => {
    if (!isUserMenuOpened) return;

    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsUserMenuOpened(false);
      }
    }

    function handleEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsUserMenuOpened(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isUserMenuOpened]);

  function handleClick() {
    setIsUserMenuOpened(prev => !prev);
  }

  function handleNavigateToMyMovies() {
    // TODO: implement navigation to My Movies page
    console.log('Navigate to My Movies');
  }

  function handleNavigateToSettings() {
    // TODO: implement navigation to Settings page
    console.log('Navigate to Settings');
  }

  function handleLogout() {
    // TODO: implement logout functionality
    console.log('Logout');
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        className="flex items-center"
        onClick={handleClick}
        aria-expanded={isUserMenuOpened}
        aria-label="User menu"
        aria-haspopup="menu"
      >
        <UserIcon />
      </button>

      {isUserMenuOpened && (
        <div className="absolute top-10 right-0 z-10 w-40 rounded-lg bg-white text-slate-900 dark:bg-gray-900 dark:text-slate-100">
          <button className={buttonClasses} onClick={handleNavigateToMyMovies}>
            My movies
          </button>

          <button className={buttonClasses} onClick={handleNavigateToSettings}>
            Settings
          </button>

          <button className={`${buttonClasses} text-red-500`} onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
