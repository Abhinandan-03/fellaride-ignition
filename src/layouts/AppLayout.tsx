import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PATH_MAP: Record<string, string> = {
  'command-center': '/app',
  'community-radar': '/app/radar',
  'communities': '/app/communities',
  'connectors': '/app/connectors',
  'ghost-demand': '/app/ghost-demand',
  'activation': '/app/activation',
  'butterfly-effect': '/app/butterfly-effect',
  'community-health': '/app/community-health',
  'find-a-ride': '/app/find-ride',
  'offer-a-ride': '/app/offer-ride',
  'ride-confirmed': '/app/ride-confirmed',
  'operator-profile': '/app'
};

export default function AppLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavigationClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest('[data-path]');
      if (target) {
        const path = target.getAttribute('data-path');
        if (path && PATH_MAP[path]) {
          event.preventDefault();
          navigate(PATH_MAP[path]);
        }
      }
    };

    document.addEventListener('click', handleNavigationClick);
    return () => document.removeEventListener('click', handleNavigationClick);
  }, [navigate]);

  return <Outlet />;
}