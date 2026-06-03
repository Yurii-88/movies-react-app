import { useState } from 'react';
import NotificationIcon from './icons/NotificationIcon';

export default function Notifications() {
  const [hasNotifications, setHasNotifications] = useState(false);

  // TODO: Update the setHasNotifications handler and implement the UI for viewing notifications received from the backend.
  return (
    <button className="relative" onClick={() => setHasNotifications(prev => !prev)}>
      <NotificationIcon />
      {hasNotifications && <span className="absolute top-0 right-0 flex h-2 w-2 rounded-full bg-amber-600"></span>}
    </button>
  );
}
