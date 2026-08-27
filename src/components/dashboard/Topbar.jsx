import './Topbar.css';

export default function Topbar({ user, onMenuClick }) {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <button
          type="button"
          className="topbar__menu-btn"
          onClick={onMenuClick}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div>
          <h1 className="topbar__title">Dashboard</h1>
          <p className="topbar__subtitle">Gestão Comercial e Vendas</p>
        </div>
      </div>

      <div className="topbar__user">
        <div className="topbar__avatar">{user.initials}</div>

        <div className="topbar__user-info">
          <span className="topbar__user-name">{user.name}</span>
          <span className="topbar__user-role">{user.role}</span>
        </div>
      </div>
    </header>
  );
}
