import { Navigate } from 'react-router';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LinearProgress } from '@mui/material';
import DashboardLayout from './DashboardLayout';

const ProtectedLayout = () => {
  const [user, loading] = useAuthState(getAuth());

  if (loading) {
    return (
      <LinearProgress />
    );
  }
  if (user) {
    return (
      <DashboardLayout />
    );
  }
  return <Navigate to="/signin" />;
};

export default ProtectedLayout;
