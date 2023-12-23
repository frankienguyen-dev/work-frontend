import { useRoutes } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import RegisterLayout from 'src/layouts/RegisterLayout';
import HomePage from 'src/pages/HomePage';
import SignIn from 'src/pages/SignIn';
import Register from 'src/pages/Register';

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      )
    },

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
  ]);
  return routeElement;
}
