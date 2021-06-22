import { Navigate } from 'react-router-dom';
import ProtectedLayout from '../layout/ProtectedLayout';
import MainLayout from '../layout/MainLayout';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import Lobby from '../pages/Lobby';
import AddLobby from '../pages/AddLobby';
import Settings from '../pages/Settings';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Winner from '../pages/Winner';

const routes = [
  {
    path: 'app',
    element: <ProtectedLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'lobby', element: <Lobby /> },
      { path: 'add', element: <AddLobby /> },
      { path: 'winner', element: <Winner /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'signin', element: <SignIn /> },
      { path: 'signup', element: <SignUp /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
