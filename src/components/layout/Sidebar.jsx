import { NavLink, useLocation } from 'react-router-dom';

import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  UserRound,
  CirclePlus,
  ClipboardList,
  Package,
  BarChart3,
  Boxes,
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowLeftRight,
  ClipboardCheck,
  Truck,
  Settings,
  LayoutGrid,
  TrendingDown,
  TrendingUp,
  Landmark,
  ReceiptText,
} from 'lucide-react';

/* =========================
   COMERCIAL
========================= */

const comercialItems = [
  {
    label: 'Visão Geral',
    icon: LayoutDashboard,
    path: '/app/comercial',
    end: true,
  },
  {
    label: 'Vendas',
    icon: ShoppingCart,
    path: '/app/comercial/vendas',
  },
  {
    label: 'Nova Venda',
    icon: CirclePlus,
    path: '/app/comercial/nova-venda',
  },
  {
    label: 'Clientes',
    icon: Users,
    path: '/app/comercial/clientes',
  },
  {
    label: 'Vendedores',
    icon: UserRound,
    path: '/app/comercial/vendedores',
  },
  {
    label: 'Pedidos',
    icon: ClipboardList,
    path: '/app/comercial/pedidos',
  },
  {
    label: 'Produtos',
    icon: Package,
    path: '/app/comercial/produtos',
  },
  {
    label: 'Relatórios',
    icon: BarChart3,
    path: '/app/comercial/relatorios',
  },
];

/* =========================
   ESTOQUE
========================= */

const estoqueItems = [
  {
    label: 'Visão Geral',
    icon: LayoutDashboard,
    path: '/app/estoque',
    end: true,
  },
  {
    label: 'Produtos',
    icon: Package,
    path: '/app/estoque/produtos',
  },
  {
    label: 'Controle de Estoque',
    icon: Boxes,
    path: '/app/estoque/controle',
  },
  {
    label: 'Entradas',
    icon: ArrowDownToLine,
    path: '/app/estoque/entradas',
  },
  {
    label: 'Saídas',
    icon: ArrowUpFromLine,
    path: '/app/estoque/saidas',
  },
  {
    label: 'Movimentações',
    icon: ArrowLeftRight,
    path: '/app/estoque/movimentacoes',
  },
  {
    label: 'Inventário',
    icon: ClipboardCheck,
    path: '/app/estoque/inventario',
  },
  {
    label: 'Fornecedores',
    icon: Truck,
    path: '/app/estoque/fornecedores',
  },
];

/* =========================
   FINANCEIRO
========================= */

const financeiroItems = [
  {
    label: 'Visão Geral',
    icon: LayoutDashboard,
    path: '/app/financeiro',
    end: true,
  },
  {
    label: 'Contas a Pagar',
    icon: TrendingDown,
    path: '/app/financeiro/contas-pagar',
  },
  {
    label: 'Contas a Receber',
    icon: TrendingUp,
    path: '/app/financeiro/contas-receber',
  },
  {
    label: 'Fluxo de Caixa',
    icon: Landmark,
    path: '/app/financeiro/fluxo-caixa',
  },
  {
    label: 'Lançamentos',
    icon: ReceiptText,
    path: '/app/financeiro/lancamentos',
  },
  {
    label: 'Relatórios',
    icon: BarChart3,
    path: '/app/financeiro/relatorios',
  },
];

/* =========================
   SIDEBAR
========================= */

function Sidebar() {
  const location = useLocation();

  const isEstoque =
    location.pathname.startsWith('/app/estoque');

  const isFinanceiro =
    location.pathname.startsWith('/app/financeiro');

  let modulo;

  if (isFinanceiro) {
    modulo = {
      nome: 'FINANCEIRO',
      descricao: 'Gestão Financeira',
      items: financeiroItems,
    };
  } else if (isEstoque) {
    modulo = {
      nome: 'ESTOQUE',
      descricao: 'Gestão de Estoque',
      items: estoqueItems,
    };
  } else {
    modulo = {
      nome: 'COMERCIAL',
      descricao: 'Gestão Comercial',
      items: comercialItems,
    };
  }

  return (
    <aside className="sidebar">
      {/* LOGO */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-bars">
          <span />
          <span />
          <span />
          <span />
        </div>

        <span className="sidebar-logo-text">
          SAIPBI
        </span>
      </div>

      {/* MÓDULO ATUAL */}
      <div className="sidebar-module-info">
        <span className="sidebar-module-label">
          MÓDULO
        </span>

        <strong>{modulo.nome}</strong>

        <small>{modulo.descricao}</small>
      </div>

      {/* NAVEGAÇÃO */}
      <nav className="sidebar-nav">
        {modulo.items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `sidebar-link ${
                  isActive ? 'active' : ''
                }`
              }
            >
              <Icon
                size={18}
                strokeWidth={1.8}
              />

              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* RODAPÉ */}
      <div className="sidebar-footer">
        <NavLink
          to="/app"
          className="sidebar-link sidebar-module-switch"
        >
          <LayoutGrid
            size={18}
            strokeWidth={1.8}
          />

          <span>Trocar módulo</span>
        </NavLink>

        <NavLink
          to="/app/configuracoes"
          className={({ isActive }) =>
            `sidebar-link ${
              isActive ? 'active' : ''
            }`
          }
        >
          <Settings
            size={18}
            strokeWidth={1.8}
          />

          <span>Configurações</span>
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar; 