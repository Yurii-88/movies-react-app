import Button from './common/Button';

export default function UserMenu() {
  const buttonClassses = 'block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer';
  console.log('UserProfile rendered');

  return (
    <div className="absolute top-10 right-0 z-1 w-40 rounded-lg bg-white text-slate-900 dark:bg-gray-900 dark:text-slate-100">
      <Button classes={buttonClassses} onClick={() => console.log('Navigate to My Movies')}>
        My movies
      </Button>
      <Button classes={buttonClassses} onClick={() => console.log('Navigate to Settings')}>
        Settings
      </Button>
      <Button classes={`${buttonClassses} text-red-500`} onClick={() => console.log('Logout')}>
        Logout
      </Button>
    </div>
  );
}
