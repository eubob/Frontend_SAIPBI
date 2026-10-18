import {
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';

import Login from '../components/login';
import Dashboard from '../components/dashboard/Dashboard';
import Vendas from '../pages/Vendas';
import Vendedores from '../pages/Vendedores';
import Clientes from '../pages/Clientes';
import NovaVenda from '../pages/NovaVenda';
import Pedidos from '../pages/Pedidos';
import Produtos from '../pages/Produtos';
import Relatorios from '../pages/relatorios/Relatorios';
import VendasPeriodo from '../pages/relatorios/VendasPeriodo';
import DesempenhoVendedor from '../pages/relatorios/DesempenhoVendedor';
import RH from '../pages/RH';

import AppLayout from '../components/layout/AppLayout';
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
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: 'vendas',
            element: <Vendas />,
          },
          {
            path: 'clientes',
            element: <Clientes />,
          },
          {
            path: 'vendedores',
            element: <Vendedores />,
          },
          {
            path: 'nova-venda',
            element: <NovaVenda />,
          },
          {
            path: 'pedidos',
            element: <Pedidos />,
          },
          {
            path: 'produtos',
            element: <Produtos />,
          },
          {
            path: 'relatorios',
            element: <Relatorios />,
          },
          {
            path: 'vendas-periodo',
            element: <VendasPeriodo />,
          },
          {
            path: 'desempenho-vendedor',
            element: <DesempenhoVendedor />,
          },
          {
            path: 'rh',
            element: <RH />,
          },
        ],
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);

export default router; 