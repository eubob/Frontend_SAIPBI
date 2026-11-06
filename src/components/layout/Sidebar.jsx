import { LayoutGrid, Settings, Users } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { getModuleFromPath } from "../../config/navigation";
import { PERMISSIONS } from "../../config/permissions";
import usePermissions from "../../hooks/usePermissions";

export default function Sidebar() {
  const location = useLocation();
  const { can } = usePermissions();
  const modulo = getModuleFromPath(location.pathname);
  const items = can(modulo.permission) ? modulo.items : [];

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
      <div className="sidebar-module-info">
        <span className="sidebar-module-label">MÓDULO</span>
        <strong>{modulo.nome}</strong>
        <small>{modulo.descricao}</small>
      </div>
      <nav
        className="sidebar-nav"
        aria-label={`Navegação do módulo ${modulo.nome}`}
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="sidebar-footer">
        <NavLink to="/app" className="sidebar-link sidebar-module-switch">
          <LayoutGrid size={18} />
          <span>Trocar módulo</span>
        </NavLink>
        {can(PERMISSIONS.MANAGE_USERS) && (
          <NavLink
            to="/app/usuarios"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <Users size={18} />
            <span>Usuários</span>
          </NavLink>
        )}
        {can(PERMISSIONS.MANAGE_SETTINGS) && (
          <NavLink
            to="/app/configuracoes"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <Settings size={18} />
            <span>Configurações</span>
          </NavLink>
        )}
      </div>
    </aside>
  );
}
