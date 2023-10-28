import { useState } from 'react'
import Card from '../components/Card';
import Page from '../components/Page';
import { firebaseSignUp } from '../firebase-utils/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  return (
    <Page>
      <Card>

        <form
          className='flex flex-col child:mt-2'
          onSubmit={(event) => {
            event.preventDefault();
            if (email && password && rePassword && password === rePassword) {
              firebaseSignUp(email, password);
            }
          }}
        >
          <p>Register</p>
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
          <input
            type="password"
            value={rePassword}
            className="text-gray-900"
            placeholder="Re-type password"
            onChange={(event) => {
              setRePassword(event.target.value?.trim());
            }}
          />
          <button
            type="submit"
            className='bg-sky-500'
          >
            Submit
          </button>
        </form>
      </Card>
    </Page>
  )
}

export default Register;