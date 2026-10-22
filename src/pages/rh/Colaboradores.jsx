import {
  Plus,
  Search,
  MoreHorizontal,
} from 'lucide-react';

import '../Pages.css';

const colaboradores = [
  {
    id: 1,
    nome: 'Carlos Silva',
    email: 'carlos.silva@empresa.com',
    departamento: 'Comercial',
    cargo: 'Vendedor',
    admissao: '10/02/2024',
    status: 'Ativo',
  },
  {
    id: 2,
    nome: 'Mariana Souza',
    email: 'mariana.souza@empresa.com',
    departamento: 'Comercial',
    cargo: 'Supervisora Comercial',
    admissao: '15/04/2023',
    status: 'Ativo',
  },
  {
    id: 3,
    nome: 'João Pereira',
    email: 'joao.pereira@empresa.com',
    departamento: 'Estoque',
    cargo: 'Estoquista',
    admissao: '08/07/2024',
    status: 'Ativo',
  },
  {
    id: 4,
    nome: 'Ana Lima',
    email: 'ana.lima@empresa.com',
    departamento: 'Financeiro',
    cargo: 'Analista Financeiro',
    admissao: '20/01/2025',
    status: 'Ativo',
  },
  {
    id: 5,
    nome: 'Pedro Santos',
    email: 'pedro.santos@empresa.com',
    departamento: 'Comercial',
    cargo: 'Vendedor',
    admissao: '03/05/2023',
    status: 'Inativo',
  },
];

function Colaboradores() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Colaboradores</h1>
          <p>
            Gerencie os colaboradores vinculados à empresa.
          </p>
        </div>

        <button type="button" className="primary-button">
          <Plus size={17} />
          Novo Colaborador
        </button>
      </div>

      <div className="page-card">
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
              <option value="todos">Todos os status</option>
              <option value="ativo">Ativos</option>
              <option value="inativo">Inativos</option>
            </select>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Departamento</th>
                <th>Cargo</th>
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

                  <td>{colaborador.email}</td>
                  <td>{colaborador.departamento}</td>
                  <td>{colaborador.cargo}</td>
                  <td>{colaborador.admissao}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        colaborador.status === 'Ativo'
                          ? 'success'
                          : 'danger'
                      }`}
                    >
                      {colaborador.status}
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

export default Colaboradores; 