import { useRoutes } from 'react-router-dom';
import RegisterLayout from 'src/layouts/RegisterLayout';
import HomePage from 'src/pages/HomePage';
import Login from 'src/pages/Login';
import Register from 'src/pages/Register';

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <HomePage />
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
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />{' '}
        </RegisterLayout>
      )
    }
  ]);
  return routeElement;
}
