import {
  Search,
  MoreHorizontal,
} from 'lucide-react';

import './Pages.css';

const pedidos = [
  {
    id: 1245,
    data: '18/10/2024',
    cliente: 'Empresa ABC Ltda',
    valor: 'R$ 1.250,00',
    status: 'Entregue',
    statusClass: 'success',
  },
  {
    id: 1244,
    data: '17/10/2024',
    cliente: 'Loja do Povo',
    valor: 'R$ 890,00',
    status: 'Em Processamento',
    statusClass: 'info',
  },
  {
    id: 1243,
    data: '16/10/2024',
    cliente: 'Comercial Silva',
    valor: 'R$ 2.430,00',
    status: 'Aguardando Pagamento',
    statusClass: 'warning',
  },
  {
    id: 1242,
    data: '15/10/2024',
    cliente: 'Tech Solutions',
    valor: 'R$ 750,00',
    status: 'Cancelado',
    statusClass: 'danger',
  },
  {
    id: 1241,
    data: '14/10/2024',
    cliente: 'Mercado Central',
    valor: 'R$ 1.680,00',
    status: 'Entregue',
    statusClass: 'success',
  },
];

function Pedidos() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Pedidos</h1>
          <p>Acompanhe o status dos pedidos.</p>
        </div>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />

            <input
              type="text"
              placeholder="Buscar pedidos..."
            />
          </div>

          <div className="toolbar-filters">
            <select defaultValue="todos">
              <option value="todos">
                Todos os status
              </option>

              <option value="entregue">
                Entregue
              </option>

              <option value="processamento">
                Em Processamento
              </option>

              <option value="pagamento">
                Aguardando Pagamento
              </option>

              <option value="cancelado">
                Cancelado
              </option>
            </select>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Data</th>
                <th>Cliente</th>
                <th>Valor</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {pedidos.map((pedido) => (
                <tr key={pedido.id}>
                  <td>{pedido.id}</td>

                  <td>{pedido.data}</td>

                  <td>
                    <strong>{pedido.cliente}</strong>
                  </td>

                  <td>{pedido.valor}</td>

                  <td>
                    <span
                      className={`status-badge ${pedido.statusClass}`}
                    >
                      {pedido.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="action-button"
                      type="button"
                      aria-label={`Ações do pedido ${pedido.id}`}
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

export default Pedidos;