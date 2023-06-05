import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/hook';
import { setUser } from '../../redux/slices/auth/userSlice';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import Form from '../Auth/Form/Form';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/');
      })
      .catch(() => alert('Invalid user!'));
  };
  return <Form title="sign in" onSub={handleLogin} />;
};

export default Login;
