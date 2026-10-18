import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  UserRound,
  CirclePlus,
  ClipboardList,
  Package,
  BarChart3,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  BriefcaseBusiness,
  Settings,
} from 'lucide-react';

const menuItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/app',
    end: true,
  },
  {
    label: 'Vendas',
    icon: ShoppingCart,
    path: '/app/vendas',
  },
  {
    label: 'Clientes',
    icon: Users,
    path: '/app/clientes',
  },
  {
    label: 'Vendedores',
    icon: UserRound,
    path: '/app/vendedores',
  },
  {
    label: 'Nova Venda',
    icon: CirclePlus,
    path: '/app/nova-venda',
  },
  {
    label: 'Pedidos',
    icon: ClipboardList,
    path: '/app/pedidos',
  },
  {
    label: 'Produtos',
    icon: Package,
    path: '/app/produtos',
  },
  {
    label: 'Relatórios',
    icon: BarChart3,
    path: '/app/relatorios',
  },
  {
    label: 'Vendas por Período',
    icon: CalendarDays,
    path: '/app/vendas-periodo',
  },
  {
    label: 'Desempenho por Vendedor',
    icon: ChartNoAxesColumnIncreasing,
    path: '/app/desempenho-vendedor',
  },
  {
    label: 'RH',
    icon: BriefcaseBusiness,
    path: '/app/rh',
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-bars">
          <span />
          <span />
          <span />
          <span />
        </div>

        <span className="sidebar-logo-text">SAIPBI</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <NavLink
          to="/app/configuracoes"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <Settings size={18} strokeWidth={1.8} />
          <span>Configurações</span>
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
