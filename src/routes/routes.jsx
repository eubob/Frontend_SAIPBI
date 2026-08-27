import { createBrowserRouter, Navigate } from 'react-router-dom';

import Login from '../components/login';
import Dashboard from '../components/dashboard/Dashboard';
import PrivateRoute from './privateRoute';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },

  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/app',
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },

  // Qualquer rota inexistente
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);

export default router;
