import { useState } from 'react';
import NotificationIcon from './icons/NotificationIcon';

export default function Notifications() {
  const [hasNotifications, setIsNotifications] = useState(false);

  return (
    // TODO: replace onClick={() => setIsNotifications(prev => !prev)} with real notifications received from a backend
    <div className="notification relative" onClick={() => setIsNotifications(prev => !prev)}>
      <NotificationIcon />
      {hasNotifications && <span className="absolute top-0 right-0 flex h-2 w-2 rounded-full bg-amber-600"></span>}
    </div>
  );
}
