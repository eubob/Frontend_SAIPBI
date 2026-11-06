import { Bell, Menu as MenuIcon, Search } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import UserMenu from "./UserMenu";

function criarIniciais(nome = "") {
  const partes = nome.trim().split(/\s+/).filter(Boolean);
  if (!partes.length) return "US";
  return (
    partes.length === 1
      ? partes[0].slice(0, 2)
      : `${partes[0][0]}${partes.at(-1)[0]}`
  ).toUpperCase();
}

export default function Topbar() {
  const { usuario, perfil, empresa } = useAuth();
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          type="button"
          className="topbar-menu-button"
          aria-label="Abrir menu"
        >
          <MenuIcon size={21} />
        </button>
        <div className="topbar-search">
          <Search size={17} />
          <input
            type="search"
            placeholder="Buscar no sistema..."
            aria-label="Buscar no sistema"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-company">
          <strong>
            {empresa?.nome_fantasia || empresa?.razao_social || "Empresa"}
          </strong>
          <span>Empresa atual</span>
        </div>
        <button
          type="button"
          className="notification-button"
          aria-label="Notificações"
          title="Notificações"
        >
          <Bell size={20} />
        </button>
        <div className="user-avatar">{criarIniciais(usuario?.nome)}</div>
        <div className="user-info">
          <strong>{usuario?.nome || "Usuário"}</strong>
          <span>{perfil?.nome || ""}</span>
        </div>
        <UserMenu />
      </div>
    </header>
  );
}
