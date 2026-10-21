import {
  Search,
  Plus,
  MoreHorizontal,
} from 'lucide-react';

import '../Pages.css';

const entradas = [
  {
    id: 'ENT-00125',
    data: '21/10/2026',
    fornecedor: 'Coca-Cola FEMSA Brasil',
    itens: 5,
    quantidade: 120,
    valor: 'R$ 1.840,00',
    status: 'Concluída',
  },
  {
    id: 'ENT-00124',
    data: '20/10/2026',
    fornecedor: 'Distribuidora Central',
    itens: 3,
    quantidade: 75,
    valor: 'R$ 980,00',
    status: 'Concluída',
  },
  {
    id: 'ENT-00123',
    data: '19/10/2026',
    fornecedor: 'Bebidas Norte',
    itens: 8,
    quantidade: 210,
    valor: 'R$ 3.250,00',
    status: 'Concluída',
  },
];

function Entradas() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Entradas de Estoque</h1>
          <p>Gerencie o recebimento e a entrada de mercadorias.</p>
        </div>

        <button className="primary-button" type="button">
          <Plus size={17} />
          Nova Entrada
        </button>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />
            <input type="text" placeholder="Buscar entradas..." />
          </div>

          <div className="toolbar-filters">
            <input className="date-filter" type="date" />
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Data</th>
                <th>Fornecedor</th>
                <th>Itens</th>
                <th>Quantidade</th>
                <th>Valor</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {entradas.map((entrada) => (
                <tr key={entrada.id}>
                  <td>
                    <strong>{entrada.id}</strong>
                  </td>
                  <td>{entrada.data}</td>
                  <td>{entrada.fornecedor}</td>
                  <td>{entrada.itens}</td>
                  <td>{entrada.quantidade}</td>
                  <td>{entrada.valor}</td>
                  <td>
                    <span className="status-badge success">
                      {entrada.status}
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

export default Entradas; 