import {
  Search,
  Plus,
  MoreHorizontal,
} from 'lucide-react';

import './Pages.css';

const produtos = [
  {
    id: 1,
    produto: 'Notebook Dell Inspiron',
    categoria: 'Informática',
    preco: 'R$ 3.250,00',
    estoque: 15,
    status: 'Ativo',
  },
  {
    id: 2,
    produto: 'Monitor LG 24"',
    categoria: 'Informática',
    preco: 'R$ 950,00',
    estoque: 28,
    status: 'Ativo',
  },
  {
    id: 3,
    produto: 'Teclado Logitech',
    categoria: 'Acessórios',
    preco: 'R$ 280,00',
    estoque: 50,
    status: 'Ativo',
  },
  {
    id: 4,
    produto: 'Mouse Logitech',
    categoria: 'Acessórios',
    preco: 'R$ 180,00',
    estoque: 45,
    status: 'Ativo',
  },
  {
    id: 5,
    produto: 'Cadeira Office',
    categoria: 'Móveis',
    preco: 'R$ 860,00',
    estoque: 12,
    status: 'Ativo',
  },
];

function Produtos() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Produtos</h1>
          <p>Gerencie seu catálogo de produtos.</p>
        </div>

        <button className="primary-button" type="button">
          <Plus size={17} />
          Novo Produto
        </button>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />

            <input
              type="text"
              placeholder="Buscar produtos..."
            />
          </div>

          <div className="toolbar-filters">
            <select defaultValue="todos">
              <option value="todos">
                Todas as categorias
              </option>

              <option value="informatica">
                Informática
              </option>

              <option value="acessorios">
                Acessórios
              </option>

              <option value="moveis">
                Móveis
              </option>
            </select>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Categoria</th>
                <th>Preço</th>
                <th>Estoque</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td>
                    <strong>{produto.produto}</strong>
                  </td>

                  <td>{produto.categoria}</td>

                  <td>{produto.preco}</td>

                  <td>{produto.estoque}</td>

                  <td>
                    <span className="status-badge success">
                      {produto.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="action-button"
                      type="button"
                      aria-label={`Ações do produto ${produto.produto}`}
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

export default Produtos;