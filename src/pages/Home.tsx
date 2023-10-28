import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthProvider';

const Home = () => {
  const { isAuthorized } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthorized ? navigate('/dashboard') : navigate('/login');
  }, [isAuthorized]);
  
  return null;
}

export default Home;