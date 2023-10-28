import { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { firebaseSignOut } from '../firebase-utils/auth';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    firebaseSignOut().then(() => {
      navigate('/login');
    })
  }, []);

  return null;
}

export default Logout;