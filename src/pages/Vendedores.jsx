import {
  Search,
  Plus,
  MoreHorizontal,
} from 'lucide-react';

import './Pages.css';

const vendedores = [
  {
    id: 1,
    nome: 'Carlos Silva',
    cargo: 'Vendedor',
    telefone: '(11) 99999-1234',
    status: 'Ativo',
  },
  {
    id: 2,
    nome: 'Mariana Souza',
    cargo: 'Vendedora',
    telefone: '(11) 98888-5678',
    status: 'Ativo',
  },
  {
    id: 3,
    nome: 'João Pereira',
    cargo: 'Vendedor',
    telefone: '(11) 97777-9012',
    status: 'Ativo',
  },
  {
    id: 4,
    nome: 'Ana Lima',
    cargo: 'Vendedora',
    telefone: '(11) 96666-3456',
    status: 'Ativo',
  },
  {
    id: 5,
    nome: 'Pedro Santos',
    cargo: 'Vendedor',
    telefone: '(11) 95555-7890',
    status: 'Inativo',
  },
];

function Vendedores() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Vendedores</h1>
          <p>Gerencie a equipe de vendas.</p>
        </div>

        <button className="primary-button" type="button">
          <Plus size={17} />
          Novo Vendedor
        </button>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />

            <input
              type="text"
              placeholder="Buscar vendedores..."
            />
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Telefone</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {vendedores.map((vendedor) => (
                <tr key={vendedor.id}>
                  <td>
                    <strong>{vendedor.nome}</strong>
                  </td>

                  <td>{vendedor.cargo}</td>

                  <td>{vendedor.telefone}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        vendedor.status === 'Ativo'
                          ? 'success'
                          : 'danger'
                      }`}
                    >
                      {vendedor.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="action-button"
                      type="button"
                      aria-label={`Ações do vendedor ${vendedor.nome}`}
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

export default Vendedores;