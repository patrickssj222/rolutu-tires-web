import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Card from '../components/Card';
import Page from '../components/Page';
import { useAuth } from '../contexts/AuthProvider';
import { firebaseSignIn } from '../firebase-utils/auth';

const Login = () => {
  const { isAuthorized } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthorized) navigate('/dashboard');
  }, [isAuthorized]);

  return (
    <Page>
      <Card>
        <form
          className='flex flex-col child:mt-2'
          onSubmit={(event) => {
            event.preventDefault();
            if (email && password) {
              firebaseSignIn(email, password).then((user) => {
                if (user) navigate('/dashboard');
              });
            }
          }}
        >
          <p>Login</p>
          <input
            type="email"
            value={email}
            className="text-gray-900"
            placeholder="Email address"
            onChange={(event) => {
              console.log(event.target.value);
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            className="text-gray-900"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value?.trim());
            }}
          />
          <button
            type="submit"
            className='bg-sky-500'
          >
            Log in
          </button>
          <a
            href="javascript:void(0)"
            onClick={() => navigate('/register')}
          >
            Register
          </a>
        </form>
      </Card>
    </Page>
  )
}

export default Login;