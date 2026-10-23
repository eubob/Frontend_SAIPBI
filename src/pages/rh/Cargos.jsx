import {
  Plus,
  Search,
  MoreHorizontal,
} from 'lucide-react';

import '../Pages.css';

const cargos = [
  {
    id: 1,
    nome: 'Vendedor',
    departamento: 'Comercial',
    colaboradores: 14,
    status: 'Ativo',
  },
  {
    id: 2,
    nome: 'Supervisor Comercial',
    departamento: 'Comercial',
    colaboradores: 2,
    status: 'Ativo',
  },
  {
    id: 3,
    nome: 'Estoquista',
    departamento: 'Estoque',
    colaboradores: 8,
    status: 'Ativo',
  },
  {
    id: 4,
    nome: 'Analista Financeiro',
    departamento: 'Financeiro',
    colaboradores: 4,
    status: 'Ativo',
  },
  {
    id: 5,
    nome: 'Analista de RH',
    departamento: 'Recursos Humanos',
    colaboradores: 3,
    status: 'Ativo',
  },
];

function Cargos() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Cargos</h1>
          <p>
            Gerencie os cargos e funções existentes na empresa.
          </p>
        </div>

        <button type="button" className="primary-button">
          <Plus size={17} />
          Novo Cargo
        </button>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />

            <input
              type="text"
              placeholder="Buscar cargo..."
            />
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Cargo</th>
                <th>Departamento</th>
                <th>Colaboradores</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {cargos.map((cargo) => (
                <tr key={cargo.id}>
                  <td>
                    <strong>{cargo.nome}</strong>
                  </td>

                  <td>{cargo.departamento}</td>
                  <td>{cargo.colaboradores}</td>

                  <td>
                    <span className="status-badge success">
                      {cargo.status}
                    </span>
                  </td>

                  <td>
                    <button
                      type="button"
                      className="action-button"
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

export default Cargos;  