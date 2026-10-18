import {
  Search,
  Plus,
  Users,
  Building2,
  UserCheck,
  UserX,
  MoreHorizontal,
} from 'lucide-react';

import './Pages.css';

const colaboradores = [
  {
    id: 1,
    nome: 'Carlos Silva',
    cargo: 'Vendedor',
    departamento: 'Comercial',
    admissao: '14/01/2022',
    status: 'Ativo',
  },
  {
    id: 2,
    nome: 'Mariana Souza',
    cargo: 'Vendedora',
    departamento: 'Comercial',
    admissao: '15/03/2022',
    status: 'Ativo',
  },
  {
    id: 3,
    nome: 'João Pereira',
    cargo: 'Vendedor',
    departamento: 'Comercial',
    admissao: '20/06/2022',
    status: 'Ativo',
  },
  {
    id: 4,
    nome: 'Ana Lima',
    cargo: 'Vendedora',
    departamento: 'Comercial',
    admissao: '10/08/2023',
    status: 'Ativo',
  },
  {
    id: 5,
    nome: 'Ricardo Almeida',
    cargo: 'Analista',
    departamento: 'Financeiro',
    admissao: '05/02/2023',
    status: 'Ativo',
  },
];

function RH() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>RH - Recursos Humanos</h1>
          <p>
            Gestão de colaboradores e informações de RH.
          </p>
        </div>
      </div>

      {/* INDICADORES */}
      <div className="rh-summary-grid">
        <div className="rh-summary-card">
          <div className="rh-summary-icon blue">
            <Users size={20} />
          </div>

          <div>
            <span>Total de Colaboradores</span>
            <strong>32</strong>
          </div>
        </div>

        <div className="rh-summary-card">
          <div className="rh-summary-icon orange">
            <Building2 size={20} />
          </div>

          <div>
            <span>Departamentos</span>
            <strong>5</strong>
          </div>
        </div>

        <div className="rh-summary-card">
          <div className="rh-summary-icon green">
            <UserCheck size={20} />
          </div>

          <div>
            <span>Ativos</span>
            <strong>28</strong>
          </div>
        </div>

        <div className="rh-summary-card">
          <div className="rh-summary-icon red">
            <UserX size={20} />
          </div>

          <div>
            <span>Férias/Ausências</span>
            <strong>4</strong>
          </div>
        </div>
      </div>

      {/* TABELA */}
      <div className="page-card">
        <div className="rh-table-tabs">
          <button
            type="button"
            className="rh-tab active"
          >
            Colaboradores
          </button>

          <button
            type="button"
            className="rh-tab"
          >
            Departamentos
          </button>

          <button
            type="button"
            className="rh-tab"
          >
            Férias e Ausências
          </button>
        </div>

        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />

            <input
              type="text"
              placeholder="Buscar colaborador..."
            />
          </div>

          <div className="toolbar-filters">
            <select defaultValue="todos">
              <option value="todos">
                Todos os departamentos
              </option>

              <option value="comercial">
                Comercial
              </option>

              <option value="financeiro">
                Financeiro
              </option>

              <option value="administrativo">
                Administrativo
              </option>

              <option value="rh">
                Recursos Humanos
              </option>

              <option value="ti">
                Tecnologia
              </option>
            </select>

            <button
              type="button"
              className="primary-button"
            >
              <Plus size={16} />
              Novo Colaborador
            </button>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Departamento</th>
                <th>Admissão</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {colaboradores.map((colaborador) => (
                <tr key={colaborador.id}>
                  <td>
                    <strong>{colaborador.nome}</strong>
                  </td>

                  <td>{colaborador.cargo}</td>

                  <td>{colaborador.departamento}</td>

                  <td>{colaborador.admissao}</td>

                  <td>
                    <span className="status-badge success">
                      {colaborador.status}
                    </span>
                  </td>

                  <td>
                    <button
                      type="button"
                      className="action-button"
                      aria-label={`Ações de ${colaborador.nome}`}
                    >
                      <MoreHorizontal size={17} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RH;