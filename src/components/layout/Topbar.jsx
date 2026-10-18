import {
  Menu,
  Search,
  Bell,
} from 'lucide-react';

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          type="button"
          className="topbar-menu-button"
          aria-label="Abrir menu"
        >
          <Menu size={21} />
        </button>

        <div className="topbar-search">
          <Search size={17} />

          <input
            type="text"
            placeholder="Buscar no sistema..."
          />
        </div>
      </div>

      <div className="topbar-right">
        <button
          type="button"
          className="notification-button"
          aria-label="Notificações"
        >
          <Bell size={20} />
          <span className="notification-dot" />
        </button>

        <div className="user-avatar">
          HC
        </div>

        <div className="user-info">
          <strong>Hygor Custodio</strong>
          <span>Administrador</span>
        </div>
      </div>
    </header>
  );
}

export default Topbar; 