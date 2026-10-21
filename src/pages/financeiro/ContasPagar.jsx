import {
  Plus,
  Search,
  MoreHorizontal,
} from 'lucide-react';

import '../Pages.css';

const contas = [
  {
    id: 'CP-00125',
    descricao: 'Compra de mercadorias',
    favorecido: 'Coca-Cola FEMSA Brasil',
    vencimento: '25/10/2026',
    valor: 'R$ 4.850,00',
    status: 'Pendente',
    statusClass: 'warning',
  },
  {
    id: 'CP-00124',
    descricao: 'Energia elétrica',
    favorecido: 'Concessionária de Energia',
    vencimento: '28/10/2026',
    valor: 'R$ 1.280,00',
    status: 'Pendente',
    statusClass: 'warning',
  },
  {
    id: 'CP-00123',
    descricao: 'Fornecedor de mercadorias',
    favorecido: 'Distribuidora Central',
    vencimento: '20/10/2026',
    valor: 'R$ 2.450,00',
    status: 'Pago',
    statusClass: 'success',
  },
  {
    id: 'CP-00122',
    descricao: 'Serviço de manutenção',
    favorecido: 'Assistência Técnica',
    vencimento: '18/10/2026',
    valor: 'R$ 870,00',
    status: 'Pago',
    statusClass: 'success',
  },
];

function ContasPagar() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Contas a Pagar</h1>
          <p>
            Gerencie despesas e compromissos financeiros da empresa.
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
              placeholder="Buscar conta..."
            />
          </div>

          <div className="toolbar-filters">
            <select defaultValue="todos">
              <option value="todos">Todos os status</option>
              <option value="pendente">Pendentes</option>
              <option value="pago">Pagas</option>
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
                <th>Favorecido</th>
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
                  <td>{conta.favorecido}</td>
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

export default ContasPagar; 