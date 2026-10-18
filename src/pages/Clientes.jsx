import {
  Search,
  Plus,
  MoreHorizontal,
} from 'lucide-react';

import './Pages.css';

const clientes = [
  {
    id: 1,
    nome: 'Empresa ABC Ltda',
    tipo: 'Jurídica',
    telefone: '(11) 99999-1234',
    email: 'contato@abc.com.br',
  },
  {
    id: 2,
    nome: 'Loja do Povo',
    tipo: 'Jurídica',
    telefone: '(11) 98888-5678',
    email: 'comercial@lojadopovo.com.br',
  },
  {
    id: 3,
    nome: 'Comercial Silva',
    tipo: 'Jurídica',
    telefone: '(11) 97777-9012',
    email: 'contato@comsilva.com.br',
  },
  {
    id: 4,
    nome: 'Tech Solutions',
    tipo: 'Jurídica',
    telefone: '(11) 96666-3456',
    email: 'contato@tech.com.br',
  },
  {
    id: 5,
    nome: 'Mercado Central',
    tipo: 'Jurídica',
    telefone: '(11) 95555-7890',
    email: 'compras@mercadocentral.com.br',
  },
];

function Clientes() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Clientes</h1>
          <p>Gerencie seu cadastro de clientes.</p>
        </div>

        <button className="primary-button" type="button">
          <Plus size={17} />
          Novo Cliente
        </button>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />

            <input
              type="text"
              placeholder="Buscar clientes..."
            />
          </div>

          <div className="toolbar-filters">
            <select defaultValue="todos">
              <option value="todos">Todos os tipos</option>
              <option value="juridica">Pessoa Jurídica</option>
              <option value="fisica">Pessoa Física</option>
            </select>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Telefone</th>
                <th>E-mail</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>
                    <strong>{cliente.nome}</strong>
                  </td>

                  <td>
                    <span className="client-type-badge">
                      {cliente.tipo}
                    </span>
                  </td>

                  <td>{cliente.telefone}</td>
                  <td>{cliente.email}</td>

                  <td>
                    <button
                      className="action-button"
                      type="button"
                      aria-label={`Ações do cliente ${cliente.nome}`}
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

export default Clientes;