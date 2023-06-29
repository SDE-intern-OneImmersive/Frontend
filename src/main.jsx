import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './index.css'

import Root from './routes/Root'
import Dashboard from './routes/Dashboard'
import Applications from './routes/Applications'
import Versions from './routes/version'
import ErrorPage from '../error-page'
import Billing from './routes/billing'
import Profile from './routes/profile'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: 'applications',
        element: <Applications />
      },
      {
        path: 'version',
        element: <Versions />
      },
      {
        path: 'billing',
        element: <Billing />
      },
      {
        path: 'profile',
        element: <Profile />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
