import {
  Search,
  Plus,
  MoreHorizontal,
} from 'lucide-react';

import '../Pages.css';

const saidas = [
  {
    id: 'SAI-00098',
    data: '21/10/2026',
    motivo: 'Venda',
    referencia: 'Pedido #1245',
    itens: 4,
    quantidade: 12,
    responsavel: 'Carlos Silva',
  },
  {
    id: 'SAI-00097',
    data: '20/10/2026',
    motivo: 'Venda',
    referencia: 'Pedido #1244',
    itens: 2,
    quantidade: 8,
    responsavel: 'Mariana Souza',
  },
  {
    id: 'SAI-00096',
    data: '20/10/2026',
    motivo: 'Ajuste',
    referencia: 'Avaria',
    itens: 1,
    quantidade: 3,
    responsavel: 'Administrador',
  },
];

function Saidas() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Saídas de Estoque</h1>
          <p>Acompanhe as retiradas e baixas realizadas no estoque.</p>
        </div>

        <button className="primary-button" type="button">
          <Plus size={17} />
          Nova Saída
        </button>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />
            <input type="text" placeholder="Buscar saídas..." />
          </div>

          <div className="toolbar-filters">
            <select defaultValue="todos">
              <option value="todos">Todos os motivos</option>
              <option value="venda">Venda</option>
              <option value="ajuste">Ajuste</option>
              <option value="avaria">Avaria</option>
            </select>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Referência</th>
                <th>Itens</th>
                <th>Quantidade</th>
                <th>Responsável</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {saidas.map((saida) => (
                <tr key={saida.id}>
                  <td>
                    <strong>{saida.id}</strong>
                  </td>
                  <td>{saida.data}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        saida.motivo === 'Venda' ? 'info' : 'warning'
                      }`}
                    >
                      {saida.motivo}
                    </span>
                  </td>
                  <td>{saida.referencia}</td>
                  <td>{saida.itens}</td>
                  <td>{saida.quantidade}</td>
                  <td>{saida.responsavel}</td>
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

export default Saidas; 