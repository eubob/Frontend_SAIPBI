import {
  Search,
  Plus,
  MoreHorizontal,
} from 'lucide-react';

import './Pages.css';

const vendas = [
  {
    id: 1245,
    data: '18/10/2024',
    cliente: 'Empresa ABC Ltda',
    vendedor: 'Carlos Silva',
    valor: 'R$ 1.250,00',
    status: 'Entregue',
    statusClass: 'success',
  },
  {
    id: 1244,
    data: '17/10/2024',
    cliente: 'Loja do Povo',
    vendedor: 'Mariana Souza',
    valor: 'R$ 890,00',
    status: 'Em Processamento',
    statusClass: 'info',
  },
  {
    id: 1243,
    data: '16/10/2024',
    cliente: 'Comercial Silva',
    vendedor: 'João Pereira',
    valor: 'R$ 2.430,00',
    status: 'Aguardando Pagamento',
    statusClass: 'warning',
  },
  {
    id: 1242,
    data: '15/10/2024',
    cliente: 'Tech Solutions',
    vendedor: 'Ana Lima',
    valor: 'R$ 750,00',
    status: 'Cancelado',
    statusClass: 'danger',
  },
  {
    id: 1241,
    data: '14/10/2024',
    cliente: 'Mercado Central',
    vendedor: 'Pedro Santos',
    valor: 'R$ 1.680,00',
    status: 'Entregue',
    statusClass: 'success',
  },
];

function Vendas() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Vendas</h1>
          <p>Analise suas vendas realizadas.</p>
        </div>

        <button className="primary-button" type="button">
          <Plus size={17} />
          Nova Venda
        </button>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />

            <input
              type="text"
              placeholder="Buscar vendas..."
            />
          </div>

          <div className="toolbar-filters">
            <select defaultValue="todos">
              <option value="todos">Todos os status</option>
              <option value="entregue">Entregue</option>
              <option value="processamento">
                Em Processamento
              </option>
              <option value="pagamento">
                Aguardando Pagamento
              </option>
              <option value="cancelado">Cancelado</option>
            </select>

            <input
              className="date-filter"
              type="date"
              defaultValue="2024-10-18"
            />
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Data</th>
                <th>Cliente</th>
                <th>Vendedor</th>
                <th>Valor</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {vendas.map((venda) => (
                <tr key={venda.id}>
                  <td>{venda.id}</td>
                  <td>{venda.data}</td>
                  <td>{venda.cliente}</td>
                  <td>{venda.vendedor}</td>
                  <td>{venda.valor}</td>

                  <td>
                    <span
                      className={`status-badge ${venda.statusClass}`}
                    >
                      {venda.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="action-button"
                      type="button"
                      aria-label={`Ações da venda ${venda.id}`}
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

export default Vendas;  