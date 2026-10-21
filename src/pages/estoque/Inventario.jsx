import {
  Search,
  Plus,
  MoreHorizontal,
} from 'lucide-react';

import '../Pages.css';

const inventarios = [
  {
    id: 'INV-2026-004',
    data: '18/10/2026',
    descricao: 'Inventário Geral - Outubro',
    produtos: 128,
    divergencias: 4,
    responsavel: 'Administrador',
    status: 'Concluído',
    statusClass: 'success',
  },
  {
    id: 'INV-2026-003',
    data: '15/09/2026',
    descricao: 'Inventário Geral - Setembro',
    produtos: 124,
    divergencias: 7,
    responsavel: 'Gestor',
    status: 'Concluído',
    statusClass: 'success',
  },
  {
    id: 'INV-2026-005',
    data: '21/10/2026',
    descricao: 'Conferência Bebidas',
    produtos: 35,
    divergencias: 0,
    responsavel: 'Operador',
    status: 'Em andamento',
    statusClass: 'info',
  },
];

function Inventario() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Inventário</h1>
          <p>Realize conferências e acompanhe divergências do estoque.</p>
        </div>

        <button className="primary-button" type="button">
          <Plus size={17} />
          Novo Inventário
        </button>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />
            <input type="text" placeholder="Buscar inventário..." />
          </div>

          <div className="toolbar-filters">
            <select defaultValue="todos">
              <option value="todos">Todos os status</option>
              <option value="andamento">Em andamento</option>
              <option value="concluido">Concluído</option>
            </select>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Data</th>
                <th>Descrição</th>
                <th>Produtos</th>
                <th>Divergências</th>
                <th>Responsável</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {inventarios.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong>{item.id}</strong>
                  </td>
                  <td>{item.data}</td>
                  <td>{item.descricao}</td>
                  <td>{item.produtos}</td>
                  <td>{item.divergencias}</td>
                  <td>{item.responsavel}</td>
                  <td>
                    <span
                      className={`status-badge ${item.statusClass}`}
                    >
                      {item.status}
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

export default Inventario; 