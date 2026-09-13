import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Sidebar />
      <div className="pl-72">
        <TopBar />
        <main className="w-full pt-16 bg-background min-h-screen px-space-lg py-space-lg">
          <Outlet />
        </main>
      </div>
    </div>
  );
}