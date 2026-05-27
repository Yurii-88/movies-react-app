import { useNavigate } from 'react-router';
import Button from '../components/common/Button';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="border-grey-100 flex h-screen flex-col items-center gap-5 bg-amber-200 p-5 py-4 align-middle text-slate-900 dark:border-amber-200 dark:bg-gray-800 dark:text-slate-100">
      <h1 className="text-3xl">Page Not Found</h1>
      <Button
        classes="bg-amber-100 p-2 w-3xs text-black dark:bg-gray-600 dark:text-white border border-grey-100 dark:border-amber-200 rounded"
        onClick={() => navigate('/')}
      >
        Go home
      </Button>
    </div>
  );
}
