import {
  Plus,
  Search,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

import '../Pages.css';

const lancamentos = [
  {
    id: 'LAN-00451',
    data: '21/10/2026',
    descricao: 'Venda Pedido #1245',
    categoria: 'Vendas',
    tipo: 'Receita',
    valor: 'R$ 2.450,00',
  },
  {
    id: 'LAN-00450',
    data: '21/10/2026',
    descricao: 'Pagamento fornecedor',
    categoria: 'Fornecedores',
    tipo: 'Despesa',
    valor: 'R$ 1.840,00',
  },
  {
    id: 'LAN-00449',
    data: '20/10/2026',
    descricao: 'Venda Pedido #1244',
    categoria: 'Vendas',
    tipo: 'Receita',
    valor: 'R$ 1.280,00',
  },
  {
    id: 'LAN-00448',
    data: '20/10/2026',
    descricao: 'Manutenção de equipamento',
    categoria: 'Operacional',
    tipo: 'Despesa',
    valor: 'R$ 650,00',
  },
];

function Lancamentos() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Lançamentos Financeiros</h1>
          <p>
            Consulte e registre movimentações financeiras da empresa.
          </p>
        </div>

        <button className="primary-button" type="button">
          <Plus size={17} />
          Novo Lançamento
        </button>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />

            <input
              type="text"
              placeholder="Buscar lançamento..."
            />
          </div>

          <div className="toolbar-filters">
            <select defaultValue="todos">
              <option value="todos">Todos os tipos</option>
              <option value="receita">Receitas</option>
              <option value="despesa">Despesas</option>
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
                <th>Categoria</th>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {lancamentos.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong>{item.id}</strong>
                  </td>

                  <td>{item.data}</td>
                  <td>{item.descricao}</td>
                  <td>{item.categoria}</td>

                  <td>
                    <span
                      className={`movement-type ${
                        item.tipo === 'Receita'
                          ? 'entry'
                          : 'exit'
                      }`}
                    >
                      {item.tipo === 'Receita' ? (
                        <ArrowUpRight size={14} />
                      ) : (
                        <ArrowDownRight size={14} />
                      )}

                      {item.tipo}
                    </span>
                  </td>

                  <td>{item.valor}</td>

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

export default Lancamentos; 