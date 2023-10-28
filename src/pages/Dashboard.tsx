import { useAuth } from '../contexts/AuthProvider';

const Dashboard = () => {
  const { isAuthorized } = useAuth();
  return (
    <div>
      <p>Dashboard</p>
      {isAuthorized ? 'Authorized' : 'Not authorized'}
    </div>
  )
}

export default Dashboard;