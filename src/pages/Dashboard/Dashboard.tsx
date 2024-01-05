import { useContext } from 'react';
import { AppContext } from '../../contexts/app.context.tsx';

import UserDashboard from '../UserDashboard';
import AdminDashboard from '../AdminDashboard';
import HrDashboard from '../HrDashboard';

export default function Dashboard() {
  const { isRole } = useContext(AppContext);
  let dashboardComponent;
  if (isRole === 'ROLE_ADMIN') dashboardComponent = <AdminDashboard />;
  if (isRole === 'ROLE_HR') dashboardComponent = <HrDashboard />;
  if (isRole === 'ROLE_USER') dashboardComponent = <UserDashboard />;
  return <div>{dashboardComponent}</div>;
}
