import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/hook';
import { setUser } from '../../redux/slices/auth/userSlice';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import Form from './Form/Form';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };
  return <Form title="register" onSub={handleRegister} />;
};

export default SignUp;
