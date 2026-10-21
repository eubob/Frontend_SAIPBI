import {
  Search,
  ArrowDownToLine,
  ArrowUpFromLine,
} from 'lucide-react';

import '../Pages.css';

const movimentacoes = [
  {
    id: 1,
    data: '21/10/2026 14:32',
    tipo: 'Entrada',
    produto: 'Coca-Cola Original 2L',
    quantidade: 50,
    anterior: 35,
    atual: 85,
    responsavel: 'Administrador',
  },
  {
    id: 2,
    data: '21/10/2026 13:10',
    tipo: 'Saída',
    produto: 'Coca-Cola Zero 2L',
    quantidade: 12,
    anterior: 24,
    atual: 12,
    responsavel: 'Carlos Silva',
  },
  {
    id: 3,
    data: '20/10/2026 17:45',
    tipo: 'Entrada',
    produto: 'Fanta Laranja 2L',
    quantidade: 30,
    anterior: 16,
    atual: 46,
    responsavel: 'Administrador',
  },
];

function Movimentacoes() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Movimentações de Estoque</h1>
          <p>Consulte o histórico completo de entradas e saídas.</p>
        </div>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />
            <input type="text" placeholder="Buscar movimentação..." />
          </div>

          <div className="toolbar-filters">
            <select defaultValue="todos">
              <option value="todos">Todas as movimentações</option>
              <option value="entrada">Entradas</option>
              <option value="saida">Saídas</option>
            </select>

            <input className="date-filter" type="date" />
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Data / Hora</th>
                <th>Tipo</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Saldo Anterior</th>
                <th>Saldo Atual</th>
                <th>Responsável</th>
              </tr>
            </thead>

            <tbody>
              {movimentacoes.map((item) => (
                <tr key={item.id}>
                  <td>{item.data}</td>

                  <td>
                    <span
                      className={`movement-type ${
                        item.tipo === 'Entrada' ? 'entry' : 'exit'
                      }`}
                    >
                      {item.tipo === 'Entrada' ? (
                        <ArrowDownToLine size={14} />
                      ) : (
                        <ArrowUpFromLine size={14} />
                      )}

                      {item.tipo}
                    </span>
                  </td>

                  <td>
                    <strong>{item.produto}</strong>
                  </td>

                  <td>{item.quantidade}</td>
                  <td>{item.anterior}</td>
                  <td>{item.atual}</td>
                  <td>{item.responsavel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Movimentacoes; 