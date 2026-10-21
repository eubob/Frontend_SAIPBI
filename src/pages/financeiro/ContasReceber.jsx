import {
  Plus,
  Search,
  MoreHorizontal,
} from 'lucide-react';

import '../Pages.css';

const contas = [
  {
    id: 'CR-00218',
    descricao: 'Pedido #1248',
    cliente: 'Mercado Central',
    vencimento: '24/10/2026',
    valor: 'R$ 3.280,00',
    status: 'Pendente',
    statusClass: 'warning',
  },
  {
    id: 'CR-00217',
    descricao: 'Pedido #1247',
    cliente: 'Supermercado União',
    vencimento: '25/10/2026',
    valor: 'R$ 2.750,00',
    status: 'Pendente',
    statusClass: 'warning',
  },
  {
    id: 'CR-00216',
    descricao: 'Pedido #1246',
    cliente: 'Comercial Brasil',
    vencimento: '20/10/2026',
    valor: 'R$ 1.940,00',
    status: 'Recebido',
    statusClass: 'success',
  },
  {
    id: 'CR-00215',
    descricao: 'Pedido #1245',
    cliente: 'Mercado Avenida',
    vencimento: '19/10/2026',
    valor: 'R$ 2.450,00',
    status: 'Recebido',
    statusClass: 'success',
  },
];

function ContasReceber() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Contas a Receber</h1>
          <p>
            Acompanhe valores pendentes e recebimentos de clientes.
          </p>
        </div>

        <button className="primary-button" type="button">
          <Plus size={17} />
          Nova Conta
        </button>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />
            <input
              type="text"
              placeholder="Buscar conta ou cliente..."
            />
          </div>

          <div className="toolbar-filters">
            <select defaultValue="todos">
              <option value="todos">Todos os status</option>
              <option value="pendente">Pendentes</option>
              <option value="recebido">Recebidas</option>
              <option value="atrasado">Atrasadas</option>
            </select>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Cliente</th>
                <th>Vencimento</th>
                <th>Valor</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {contas.map((conta) => (
                <tr key={conta.id}>
                  <td>
                    <strong>{conta.id}</strong>
                  </td>

                  <td>{conta.descricao}</td>
                  <td>{conta.cliente}</td>
                  <td>{conta.vencimento}</td>
                  <td>{conta.valor}</td>

                  <td>
                    <span
                      className={`status-badge ${conta.statusClass}`}
                    >
                      {conta.status}
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

export default ContasReceber; 