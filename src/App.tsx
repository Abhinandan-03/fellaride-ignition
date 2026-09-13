import { lazy, Suspense, type ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './store/AppContext';
import PublicLayout from './layouts/PublicLayout';
import AppLayout from './layouts/AppLayout';

// Public Pages (Lazy Loaded)
const Landing = lazy(() => import('./pages/public/Landing'));
const Login = lazy(() => import('./pages/public/Login'));
const Pricing = lazy(() => import('./pages/public/Pricing'));
const Signup = lazy(() => import('./pages/public/Signup'));

// Onboarding Pages (Lazy Loaded)
const OnboardingCommunity = lazy(() => import('./pages/onboarding/OnboardingCommunity'));
const OnboardingProfile = lazy(() => import('./pages/onboarding/OnboardingProfile'));

// App Pages (Lazy Loaded)
const CommandCenter = lazy(() => import('./pages/app/CommandCenter'));
const Radar = lazy(() => import('./pages/app/Radar'));
const CommunityView = lazy(() => import('./pages/app/CommunityView'));
const Connectors = lazy(() => import('./pages/app/Connectors'));
const GhostDemand = lazy(() => import('./pages/app/GhostDemand'));
const Activation = lazy(() => import('./pages/app/Activation'));
const ButterflyEffect = lazy(() => import('./pages/app/ButterflyEffect'));
const CommunityHealthView = lazy(() => import('./pages/app/CommunityHealthView'));
const FindRide = lazy(() => import('./pages/app/FindRide'));
const OfferRide = lazy(() => import('./pages/app/OfferRide'));
const RideConfirmed = lazy(() => import('./pages/app/RideConfirmed'));

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useApp();
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* Onboarding Routes */}
          <Route path="/onboarding/community" element={<OnboardingCommunity />} />
          <Route path="/onboarding/profile" element={<OnboardingProfile />} />

          {/* Authenticated Routes */}
          <Route path="/app" element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
            <Route index element={<CommandCenter />} />
            <Route path="radar" element={<Radar />} />
            <Route path="communities" element={<CommunityView />} />
            <Route path="connectors" element={<Connectors />} />
            <Route path="ghost-demand" element={<GhostDemand />} />
            <Route path="activation" element={<Activation />} />
            <Route path="butterfly-effect" element={<ButterflyEffect />} />
            <Route path="community-health" element={<CommunityHealthView />} />
            <Route path="find-ride" element={<FindRide />} />
            <Route path="find-a-ride" element={<Navigate to="/app/find-ride" replace />} />
            <Route path="offer-ride" element={<OfferRide />} />
            <Route path="offer-a-ride" element={<Navigate to="/app/offer-ride" replace />} />
            <Route path="ride-confirmed" element={<RideConfirmed />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
