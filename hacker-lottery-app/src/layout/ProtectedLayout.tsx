import { Navigate } from 'react-router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import LinearProgress from '@material-ui/core/LinearProgress';
import DashboardLayout from './DashboardLayout';

const ProtectedLayout = () => {
  const [user, loading] = useAuthState(firebase.auth());

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
