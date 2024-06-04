import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import RegisterLayout from 'src/layouts/RegisterLayout';
import HomePage from 'src/pages/HomePage';
import SignIn from 'src/pages/SignIn';
import Register from 'src/pages/Register';
import { useContext } from 'react';
import { AppContext } from '../contexts/app.context.tsx';
import Dashboard from '../pages/Dashboard';
import AppliedJob from '../pages/Dashboard/AppliedJob';
import FavoriteJob from '../pages/Dashboard/FavoriteJob';
import MyAccountSetting from '../pages/Dashboard/MyAccountSetting';
import PostAJob from '../pages/Dashboard/PostAJob';
import MyJobs from '../pages/Dashboard/MyJobs';
import SearchPage from '../pages/SearchPage';
import JobDetails from '../pages/JobDetails';
import CompanyDetails from '../pages/CompanyDetails';
import AllJobs from '../pages/AllJobs';
import MyCompanyInfo from '../pages/Dashboard/MyCompanyInfo';
import Admin from '../pages/Admin';
import CompanyAdmin from '../pages/Admin/CompanyAdmin';
import UserAdmin from '../pages/Admin/UserAdmin';
import JobAdmin from '../pages/Admin/JobAdmin';
import PermissionAdmin from '../pages/Admin/PermissionAdmin';
import RolesAdmin from '../pages/Admin/RolesAdmin';
import SubscriberAdmin from '../pages/Admin/SubscriberAdmin';
import CategoryAdmin from '../pages/Admin/CategoryAdmin';
import ResumeAdmin from '../pages/Admin/ResumeAdmin';
import InvitationAdmin from '../pages/Admin/InvitationAdmin';
import JobApplication from '../pages/Dashboard/JobApplication';
import OpenViewPosition from '../pages/OpenViewPosition';

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
          path: '/dashboard/*',
          element: <Dashboard />,
          children: [
            {
              path: 'applied-job',
              element: <AppliedJob />
            },
            {
              path: 'favorite-job',
              element: <FavoriteJob />
            },
            {
              path: 'post-job',
              element: <PostAJob />
            },
            {
              path: 'my-jobs',
              element: <MyJobs />
            },
            {
              path: 'my-account-setting',
              element: <MyAccountSetting />
            },
            {
              path: 'my-company',
              element: <MyCompanyInfo />
            },
            {
              path: ':id/application',
              element: <JobApplication />
            }
          ]
        },
        {
          path: '/admin/*',
          element: <Admin />,
          children: [
            {
              path: 'company',
              element: <CompanyAdmin />
            },
            {
              path: 'user',
              element: <UserAdmin />
            },
            {
              path: 'job',
              element: <JobAdmin />
            },
            {
              path: 'permission',
              element: <PermissionAdmin />
            },
            {
              path: 'role',
              element: <RolesAdmin />
            },
            {
              path: 'subscriber',
              element: <SubscriberAdmin />
            },
            {
              path: 'category',
              element: <CategoryAdmin />
            },
            {
              path: 'resume',
              element: <ResumeAdmin />
            },
            {
              path: 'invitation',
              element: <InvitationAdmin />
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
    },
    {
      path: '/job/search',
      element: (
        <MainLayout>
          <SearchPage />
        </MainLayout>
      )
    },
    {
      path: '/job/:id',
      element: (
        <MainLayout>
          <JobDetails />
        </MainLayout>
      )
    },
    {
      path: '/company/:id',
      element: (
        <MainLayout>
          <CompanyDetails />
        </MainLayout>
      )
    },
    {
      path: '/company/viewposition/:id',
      element: (
        <MainLayout>
          <OpenViewPosition />
        </MainLayout>
      )
    },
    {
      path: '/jobs',
      element: (
        <MainLayout>
          <AllJobs />
        </MainLayout>
      )
    }
  ]);

  return routeElement;
}
