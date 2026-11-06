import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MODULES } from "../config/navigation";
import { PERMISSIONS } from "../config/permissions";
import useAuth from "../hooks/useAuth";
import usePermissions from "../hooks/usePermissions";
import "./Modulos.css";

function iniciais(nome = "") {
  return (
    nome
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0])
      .join("")
      .toUpperCase() || "US"
  );
}
export default function Modulos() {
  const navigate = useNavigate();
  const { usuario, perfil } = useAuth();
  const { can } = usePermissions();
  const modulos = MODULES.filter((modulo) => can(modulo.permission));
  return (
    <div className="modules-page">
      <header className="modules-header">
        <div className="modules-brand">
          <div className="modules-logo-bars">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div>
            <strong>SAIPBI</strong>
            <span>Sistema Administrativo Integrado</span>
          </div>
        </div>
        <div className="modules-user-area">
          <div className="modules-user">
            <div className="modules-avatar">{iniciais(usuario?.nome)}</div>
            <div>
              <strong>{usuario?.nome || "Usuário"}</strong>
              <span>{perfil?.nome || ""}</span>
            </div>
          </div>
          {can(PERMISSIONS.MANAGE_SETTINGS) && (
            <button
              className="modules-settings-button"
              type="button"
              title="Configurações"
              onClick={() => navigate("/app/configuracoes")}
            >
              <Settings size={19} />
            </button>
          )}
        </div>
      </header>
      <main className="modules-content">
        <div className="modules-intro">
          <span className="modules-eyebrow">PAINEL ADMINISTRATIVO</span>
          <h1>Selecione um módulo</h1>
          <p>Escolha uma área disponível para o seu perfil.</p>
        </div>
        <div className="modules-grid">
          {modulos.map((modulo) => {
            const Icon = modulo.icon;
            return (
              <button
                key={modulo.id}
                className={`module-selection-card module-${modulo.id}`}
                type="button"
                onClick={() => navigate(modulo.path)}
              >
                <div className="module-selection-top">
                  <div className="module-selection-icon">
                    <Icon size={25} />
                  </div>
                  <span className="module-status available">
                    {modulo.status}
                  </span>
                </div>
                <div className="module-selection-body">
                  <h2>{modulo.titulo}</h2>
                  <p>{modulo.descricao}</p>
                </div>
                <div className="module-selection-footer">
                  <span>Acessar módulo</span>
                  <i className="pi pi-arrow-right" />
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
