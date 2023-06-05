import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { useAppDispatch } from './hooks/hook';
import { removeUser, setUser } from './redux/slices/auth/userSlice';

import { useAuth } from '../src/hooks/use-auth';
import { getAuth, signOut } from 'firebase/auth';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Basket from './pages/Basket/Basket';
import Delivery from './components/Delivery/Delivery';
import NotFound from './pages/NotFound/NotFound';
import ShopProducts from './components/ShopProducts/ShopProducts';
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct';
import Posts from './components/Posts/Posts';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import Profile from './components/Profile/Profile';

const App: React.FC = () => {
  const { isAuth } = useAuth();
  const auth = getAuth();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
      } else {
        dispatch(removeUser());
      }
    });
    return unsub;
  }, [auth]);

  const handleSignOut = async () => {
    try {
      if (window.confirm('Are you sure you want to log out?')) {
        await signOut(auth);
        dispatch(removeUser());
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isAuth ? <Header /> : null}
      <Routes>
        {isAuth ? (
          <React.Fragment>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<Delivery />} />
            <Route path="/shop" element={<ShopProducts />} />
            <Route path="/discounts" element={<FeaturedProduct />} />
            <Route path="/reviews" element={<Posts />} />
            <Route
              path="/profile"
              element={<Profile onSignOut={handleSignOut} />}
            />
            <Route path="/basket" element={<Basket />} />
            <Route path="*" element={<NotFound />} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFound />} />
          </React.Fragment>
        )}
      </Routes>
    </>
  );
};

export default App;
