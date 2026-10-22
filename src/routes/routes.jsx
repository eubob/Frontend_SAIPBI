import {
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';

import Login from '../components/login';
import Modulos from '../pages/Modulos';

import Dashboard from '../components/dashboard/Dashboard';

// =========================
// COMERCIAL
// =========================

import Vendas from '../pages/Vendas';
import Vendedores from '../pages/Vendedores';
import Clientes from '../pages/Clientes';
import NovaVenda from '../pages/NovaVenda';
import Pedidos from '../pages/Pedidos';
import Produtos from '../pages/Produtos';

import Relatorios from '../pages/relatorios/Relatorios';
import VendasPeriodo from '../pages/relatorios/VendasPeriodo';
import DesempenhoVendedor from '../pages/relatorios/DesempenhoVendedor';

// =========================
// ESTOQUE
// =========================

import DashboardEstoque from '../pages/estoque/DashboardEstoque';
import ControleEstoque from '../pages/estoque/ControleEstoque';
import Entradas from '../pages/estoque/Entradas';
import Saidas from '../pages/estoque/Saidas';
import Movimentacoes from '../pages/estoque/Movimentacoes';
import Inventario from '../pages/estoque/Inventario';
import Fornecedores from '../pages/estoque/Fornecedores';

// =========================
// FINANCEIRO
// =========================

import DashboardFinanceiro from '../pages/financeiro/DashboardFinanceiro';
import ContasPagar from '../pages/financeiro/ContasPagar';
import ContasReceber from '../pages/financeiro/ContasReceber';
import FluxoCaixa from '../pages/financeiro/FluxoCaixa';
import Lancamentos from '../pages/financeiro/Lancamentos';
import RelatoriosFinanceiros from '../pages/financeiro/RelatoriosFinanceiros';

// =========================
// RECURSOS HUMANOS
// =========================

import DashboardRH from '../pages/rh/DashboardRH';
import Colaboradores from '../pages/rh/Colaboradores';
import Departamentos from '../pages/rh/Departamentos';
import Cargos from '../pages/rh/Cargos';
import ControlePessoal from '../pages/rh/ControlePessoal';
import RelatoriosRH from '../pages/rh/RelatoriosRH';

// =========================
// LAYOUT / SEGURANÇA
// =========================

import AppLayout from '../components/layout/AppLayout';
import PrivateRoute from './privateRoute';

const router = createBrowserRouter([
  // =========================
  // LOGIN
  // =========================

  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },

  {
    path: '/login',
    element: <Login />,
  },

  // =========================
  // ÁREA AUTENTICADA
  // =========================

  {
    path: '/app',
    element: <PrivateRoute />,

    children: [
      // =========================
      // PORTAL DE MÓDULOS
      // =========================

      {
        index: true,
        element: <Modulos />,
      },

      // =========================
      // ÁREA COM SIDEBAR
      // =========================

      {
        element: <AppLayout />,

        children: [
          // =========================
          // COMERCIAL
          // =========================

          {
            path: 'comercial',
            element: <Dashboard />,
          },

          {
            path: 'comercial/vendas',
            element: <Vendas />,
          },

          {
            path: 'comercial/nova-venda',
            element: <NovaVenda />,
          },

          {
            path: 'comercial/clientes',
            element: <Clientes />,
          },

          {
            path: 'comercial/vendedores',
            element: <Vendedores />,
          },

          {
            path: 'comercial/pedidos',
            element: <Pedidos />,
          },

          {
            path: 'comercial/produtos',
            element: <Produtos />,
          },

          {
            path: 'comercial/relatorios',
            element: <Relatorios />,
          },

          {
            path: 'comercial/relatorios/vendas-periodo',
            element: <VendasPeriodo />,
          },

          {
            path: 'comercial/relatorios/desempenho-vendedor',
            element: <DesempenhoVendedor />,
          },

          // =========================
          // ESTOQUE
          // =========================

          {
            path: 'estoque',
            element: <DashboardEstoque />,
          },

          {
            path: 'estoque/produtos',
            element: <Produtos />,
          },

          {
            path: 'estoque/controle',
            element: <ControleEstoque />,
          },

          {
            path: 'estoque/entradas',
            element: <Entradas />,
          },

          {
            path: 'estoque/saidas',
            element: <Saidas />,
          },

          {
            path: 'estoque/movimentacoes',
            element: <Movimentacoes />,
          },

          {
            path: 'estoque/inventario',
            element: <Inventario />,
          },

          {
            path: 'estoque/fornecedores',
            element: <Fornecedores />,
          },

          // =========================
          // FINANCEIRO
          // =========================

          {
            path: 'financeiro',
            element: <DashboardFinanceiro />,
          },

          {
            path: 'financeiro/contas-pagar',
            element: <ContasPagar />,
          },

          {
            path: 'financeiro/contas-receber',
            element: <ContasReceber />,
          },

          {
            path: 'financeiro/fluxo-caixa',
            element: <FluxoCaixa />,
          },

          {
            path: 'financeiro/lancamentos',
            element: <Lancamentos />,
          },

          {
            path: 'financeiro/relatorios',
            element: <RelatoriosFinanceiros />,
          },

          // =========================
          // RECURSOS HUMANOS
          // =========================

          {
            path: 'rh',
            element: <DashboardRH />,
          },

          {
            path: 'rh/colaboradores',
            element: <Colaboradores />,
          },

          {
            path: 'rh/departamentos',
            element: <Departamentos />,
          },

          {
            path: 'rh/cargos',
            element: <Cargos />,
          },

          {
            path: 'rh/controle-pessoal',
            element: <ControlePessoal />,
          },

          {
            path: 'rh/relatorios',
            element: <RelatoriosRH />,
          },

          // =========================
          // ROTAS ANTIGAS
          // COMERCIAL
          // =========================

          {
            path: 'vendas',
            element: (
              <Navigate
                to="/app/comercial/vendas"
                replace
              />
            ),
          },

          {
            path: 'clientes',
            element: (
              <Navigate
                to="/app/comercial/clientes"
                replace
              />
            ),
          },

          {
            path: 'vendedores',
            element: (
              <Navigate
                to="/app/comercial/vendedores"
                replace
              />
            ),
          },

          {
            path: 'nova-venda',
            element: (
              <Navigate
                to="/app/comercial/nova-venda"
                replace
              />
            ),
          },

          {
            path: 'pedidos',
            element: (
              <Navigate
                to="/app/comercial/pedidos"
                replace
              />
            ),
          },

          {
            path: 'produtos',
            element: (
              <Navigate
                to="/app/comercial/produtos"
                replace
              />
            ),
          },

          {
            path: 'relatorios',
            element: (
              <Navigate
                to="/app/comercial/relatorios"
                replace
              />
            ),
          },

          {
            path: 'vendas-periodo',
            element: (
              <Navigate
                to="/app/comercial/relatorios/vendas-periodo"
                replace
              />
            ),
          },

          {
            path: 'desempenho-vendedor',
            element: (
              <Navigate
                to="/app/comercial/relatorios/desempenho-vendedor"
                replace
              />
            ),
          },

          // =========================
          // ROTAS ANTIGAS
          // ESTOQUE
          // =========================

          {
            path: 'controle-estoque',
            element: (
              <Navigate
                to="/app/estoque/controle"
                replace
              />
            ),
          },

          {
            path: 'entradas',
            element: (
              <Navigate
                to="/app/estoque/entradas"
                replace
              />
            ),
          },

          {
            path: 'saidas',
            element: (
              <Navigate
                to="/app/estoque/saidas"
                replace
              />
            ),
          },

          {
            path: 'movimentacoes',
            element: (
              <Navigate
                to="/app/estoque/movimentacoes"
                replace
              />
            ),
          },

          {
            path: 'inventario',
            element: (
              <Navigate
                to="/app/estoque/inventario"
                replace
              />
            ),
          },

          {
            path: 'fornecedores',
            element: (
              <Navigate
                to="/app/estoque/fornecedores"
                replace
              />
            ),
          },
        ],
      },
    ],
  },

  // =========================
  // ROTA NÃO ENCONTRADA
  // =========================

  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);

export default router;  