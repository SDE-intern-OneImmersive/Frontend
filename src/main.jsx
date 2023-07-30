import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import SideLayout from './routes/sidebar';
import Dashboard from './routes/dashboard';
import Applications from './routes/applications';
import Versions from './routes/version';
import ErrorPage from './error-page';
import Billing from './routes/billing';
import Profile from './routes/profile';

import AppDataTable from './components/apptable';
import DashDataTable from './components/dashtable';
import VerDataTable from './components/vertable';
import AppCreate from './components/appcreate';
<<<<<<< HEAD
import NameDetailPage from './components/namedetailpage';
=======
import ApplicationDetails from './components/appdetails';
>>>>>>> 14d54f3b9a4d253291253a7170721f88d3a0c5e0

const router = createBrowserRouter([
  {
    element: <SideLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        children: [
          {
            path: "/",
            element: <DashDataTable />,
          }
        ]
      },
      {
        path: '/applications',
        element: <Applications />,
        children: [
          {
            path: "/applications",
            element: <AppDataTable />
          },
          {
            path: "/applications/:applicationId",
            element: <ApplicationDetails />
          },
          {
            path: "/applications/create",
            element: <AppCreate />
          },
        ]
      },
      {
        path: 'version',
        element: <Versions />,
        children: [
          {
            path: "/version",
            element: <VerDataTable />
          },
          {
            path: "version/create",
            element: <div>Create Version</div>
          }
        ]
      },
      {
        path: 'billing',
        element: <Billing />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: '/name/:name',
        element: <NameDetailPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router = {router} />
  </>
);

