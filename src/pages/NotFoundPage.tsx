import { Link } from 'react-router';
import PrimaryButton from '../components/common/PrimaryButton';

export default function NotFoundPage() {
  return (
    <div className="border-grey-100 flex h-screen flex-col items-center gap-5 bg-amber-200 p-5 py-4 text-slate-900 dark:border-amber-200 dark:bg-gray-800 dark:text-slate-100">
      <h1 className="text-3xl">Page Not Found</h1>
      <Link to="/">
        <PrimaryButton className="w-3xs" label="Go home" />
      </Link>
    </div>
  );
}
