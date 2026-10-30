import { Bell, LogOut, Menu, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function criarIniciais(nome = '') {
  const partes = nome.trim().split(/\s+/).filter(Boolean);
  if (!partes.length) return 'US';
  if (partes.length === 1) return partes[0].slice(0, 2).toUpperCase();
  return `${partes[0][0]}${partes[partes.length - 1][0]}`.toUpperCase();
}

function Topbar() {
  const { usuario, perfil, empresa, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login', { replace: true });
  }

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button type="button" className="topbar-menu-button" aria-label="Abrir menu">
          <Menu size={21} />
        </button>

        <div className="topbar-search">
          <Search size={17} />
          <input type="text" placeholder="Buscar no sistema..." />
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-company">
          <strong>{empresa?.nome_fantasia || empresa?.razao_social || 'Empresa'}</strong>
          <span>Empresa atual</span>
        </div>

        <button type="button" className="notification-button" aria-label="Notificações">
          <Bell size={20} />
          <span className="notification-dot" />
        </button>

        <div className="user-avatar">{criarIniciais(usuario?.nome)}</div>

        <div className="user-info">
          <strong>{usuario?.nome || 'Usuário'}</strong>
          <span>{perfil?.nome || ''}</span>
        </div>

        <button
          type="button"
          className="topbar-menu-button topbar-logout"
          aria-label="Sair"
          title="Sair"
          onClick={handleLogout}
        >
          <LogOut size={19} />
        </button>
      </div>
    </header>
  );
}

export default Topbar;
