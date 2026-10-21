import { useNavigate } from 'react-router-dom';
import {
  ShoppingCart,
  Boxes,
  WalletCards,
  UsersRound,
  ArrowRight,
  Settings,
} from 'lucide-react';

import './Modulos.css';

const modulos = [
  {
    id: 'comercial',
    titulo: 'Comercial',
    descricao:
      'Gerencie vendas, clientes, vendedores, pedidos e acompanhe os resultados comerciais.',
    icon: ShoppingCart,
    path: '/app/comercial',
    status: 'Disponível',
  },
  {
    id: 'estoque',
    titulo: 'Estoque',
    descricao:
      'Controle produtos, entradas, saídas, inventários, fornecedores e movimentações.',
    icon: Boxes,
    path: '/app/estoque',
    status: 'Disponível',
  },
 {
  id: 'financeiro',
  titulo: 'Financeiro',
  descricao:
    'Acompanhe contas, fluxo de caixa, lançamentos e indicadores financeiros.',
  icon: WalletCards,
  path: '/app/financeiro',
  status: 'Disponível',
},
  {
    id: 'rh',
    titulo: 'Recursos Humanos',
    descricao:
      'Gerencie colaboradores, departamentos, cargos e indicadores de RH.',
    icon: UsersRound,
    path: '/app/rh',
    status: 'Em desenvolvimento',
    disabled: true,
  },
];

function Modulos() {
  const navigate = useNavigate();

  function acessarModulo(modulo) {
    if (modulo.disabled) return;

    navigate(modulo.path);
  }

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
            <div className="modules-avatar">HC</div>

            <div>
              <strong>Hygor Custodio</strong>
              <span>Administrador</span>
            </div>
          </div>

          <button
            className="modules-settings-button"
            type="button"
            title="Configurações"
          >
            <Settings size={19} />
          </button>
        </div>
      </header>

      <main className="modules-content">
        <div className="modules-intro">
          <span className="modules-eyebrow">PAINEL ADMINISTRATIVO</span>

          <h1>Selecione um módulo</h1>

          <p>
            Escolha uma área do SAIPBI para acessar suas funcionalidades,
            indicadores e operações.
          </p>
        </div>

        <div className="modules-grid">
          {modulos.map((modulo) => {
            const Icon = modulo.icon;

            return (
              <button
                key={modulo.id}
                className={`module-selection-card module-${modulo.id} ${
                  modulo.disabled ? 'disabled' : ''
                }`}
                type="button"
                onClick={() => acessarModulo(modulo)}
                disabled={modulo.disabled}
              >
                <div className="module-selection-top">
                  <div className="module-selection-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span
                    className={`module-status ${
                      modulo.disabled ? 'development' : 'available'
                    }`}
                  >
                    {modulo.status}
                  </span>
                </div>

                <div className="module-selection-body">
                  <h2>{modulo.titulo}</h2>
                  <p>{modulo.descricao}</p>
                </div>

                <div className="module-selection-footer">
                  <span>
                    {modulo.disabled ? 'Em breve' : 'Acessar módulo'}
                  </span>

                  {!modulo.disabled && <ArrowRight size={17} />}
                </div>
              </button>
            );
          })}
        </div>

        <div className="modules-footer-info">
          <span>SAIPBI</span>
          <span className="modules-dot" />
          <span>Sistema Administrativo Integrado com Power BI</span>
        </div>
      </main>
    </div>
  );
}

export default Modulos; 