import {
  Plus,
  Search,
  MoreHorizontal,
  Building2,
} from 'lucide-react';

import '../Pages.css';

const departamentos = [
  {
    id: 1,
    nome: 'Comercial',
    responsavel: 'Mariana Souza',
    colaboradores: 18,
    status: 'Ativo',
  },
  {
    id: 2,
    nome: 'Estoque',
    responsavel: 'Roberto Alves',
    colaboradores: 12,
    status: 'Ativo',
  },
  {
    id: 3,
    nome: 'Financeiro',
    responsavel: 'Fernanda Costa',
    colaboradores: 8,
    status: 'Ativo',
  },
  {
    id: 4,
    nome: 'Recursos Humanos',
    responsavel: 'Juliana Martins',
    colaboradores: 5,
    status: 'Ativo',
  },
  {
    id: 5,
    nome: 'Administrativo',
    responsavel: 'Ricardo Mendes',
    colaboradores: 7,
    status: 'Ativo',
  },
];

function Departamentos() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Departamentos</h1>
          <p>
            Gerencie a estrutura organizacional da empresa.
          </p>
        </div>

        <button type="button" className="primary-button">
          <Plus size={17} />
          Novo Departamento
        </button>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />

            <input
              type="text"
              placeholder="Buscar departamento..."
            />
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Departamento</th>
                <th>Responsável</th>
                <th>Colaboradores</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {departamentos.map((departamento) => (
                <tr key={departamento.id}>
                  <td>
                    <strong>
                      <Building2
                        size={15}
                        style={{ marginRight: 7 }}
                      />
                      {departamento.nome}
                    </strong>
                  </td>

                  <td>{departamento.responsavel}</td>
                  <td>{departamento.colaboradores}</td>

                  <td>
                    <span className="status-badge success">
                      {departamento.status}
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

export default Departamentos;  