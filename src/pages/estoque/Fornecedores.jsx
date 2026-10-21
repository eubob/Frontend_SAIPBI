import {
  Search,
  Plus,
  MoreHorizontal,
} from 'lucide-react';

import '../Pages.css';

const fornecedores = [
  {
    id: 1,
    razaoSocial: 'Coca-Cola FEMSA Brasil',
    documento: '00.000.000/0001-00',
    contato: '(63) 99999-1001',
    email: 'comercial@fornecedor.com',
    status: 'Ativo',
  },
  {
    id: 2,
    razaoSocial: 'Distribuidora Central Ltda',
    documento: '11.111.111/0001-11',
    contato: '(63) 99999-1002',
    email: 'vendas@distribuidoracentral.com',
    status: 'Ativo',
  },
  {
    id: 3,
    razaoSocial: 'Bebidas Norte Distribuição',
    documento: '22.222.222/0001-22',
    contato: '(63) 99999-1003',
    email: 'contato@bebidasnorte.com',
    status: 'Ativo',
  },
];

function Fornecedores() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Fornecedores</h1>
          <p>Gerencie os fornecedores utilizados nas operações de estoque.</p>
        </div>

        <button className="primary-button" type="button">
          <Plus size={17} />
          Novo Fornecedor
        </button>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />
            <input type="text" placeholder="Buscar fornecedores..." />
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
                <th>Razão Social</th>
                <th>Documento</th>
                <th>Contato</th>
                <th>E-mail</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {fornecedores.map((fornecedor) => (
                <tr key={fornecedor.id}>
                  <td>
                    <strong>{fornecedor.razaoSocial}</strong>
                  </td>
                  <td>{fornecedor.documento}</td>
                  <td>{fornecedor.contato}</td>
                  <td>{fornecedor.email}</td>
                  <td>
                    <span className="status-badge success">
                      {fornecedor.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-button" type="button">
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

export default Fornecedores;