import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import PrivateRoute from 'routes/Rrivate';
import PublicRoute from 'routes/Public';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles';
import Footer from './Footer/Footer';
import { Box } from '@mui/system';
import background from '../components/images/bg-img3.jpg';

const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const PhonebookPage = lazy(() => import('pages/PhonebookPage'));

export default function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Suspense fallback={<Loader />}>
        <Box
          style={{
            backgroundImage: `url(${background})`,
            width: '100vw',
            height: '100vh',
            backgroundSize: 'cover',
          }}
        >
          {/* <Image style={{ backgroundImage: `url(${background})` }}> */}
          <Header />
          <Routes>
            <Route
              path="/registration"
              element={
                <PublicRoute>
                  <RegistrationPage />
                </PublicRoute>
              }
            />
            <Route
              path="/authorization"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <PhonebookPage />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={
                <PublicRoute>
                  <RegistrationPage />
                </PublicRoute>
              }
            />
          </Routes>
          <Footer />
          {/* </Image> */}
        </Box>
      </Suspense>
    </>
  );
}
