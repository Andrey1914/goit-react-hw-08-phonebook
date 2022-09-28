import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import PrivateRoute from 'routes/Rrivate';
import PublicRoute from 'routes/Public';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const RegistrationPage = lazy(() => import('pages/RegistrationPage'));

const LoginPage = lazy(() => import('pages/LoginPage'));
const PhonebookPage = lazy(() => import('pages/PhonebookPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  );
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
