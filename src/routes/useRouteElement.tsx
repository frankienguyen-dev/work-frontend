import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import RegisterLayout from 'src/layouts/RegisterLayout';
import HomePage from 'src/pages/HomePage';
import SignIn from 'src/pages/SignIn';
import Register from 'src/pages/Register';
import Profile from '../pages/Profile';
import { useContext } from 'react';
import { AppContext } from '../contexts/app.context.tsx';
import Dashboard from '../pages/Dashboard';
import Company from '../pages/Dashboard/Company';

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext);
  return isAuthenticated ? <Outlet /> : <Navigate to='/signin' />;
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext);
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />;
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        },
        {
          path: '/dashboard',
          element: <Dashboard />,
          children: [
            {
              path: 'company',
              element: <Company />
            }
          ]
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        },

        {
          path: '/signin',
          element: (
            <RegisterLayout>
              <SignIn />{' '}
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      )
    }
  ]);
  return routeElement;
}
