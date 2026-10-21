import {
  Search,
  MoreHorizontal,
  Boxes,
} from 'lucide-react';

import '../Pages.css';

const produtos = [
  {
    id: 1,
    produto: 'Coca-Cola Original 2L',
    categoria: 'Bebidas',
    atual: 85,
    minimo: 20,
    status: 'Normal',
    statusClass: 'success',
  },
  {
    id: 2,
    produto: 'Coca-Cola Zero 2L',
    categoria: 'Bebidas',
    atual: 12,
    minimo: 20,
    status: 'Estoque Baixo',
    statusClass: 'warning',
  },
  {
    id: 3,
    produto: 'Fanta Laranja 2L',
    categoria: 'Bebidas',
    atual: 46,
    minimo: 15,
    status: 'Normal',
    statusClass: 'success',
  },
  {
    id: 4,
    produto: 'Sprite 2L',
    categoria: 'Bebidas',
    atual: 0,
    minimo: 15,
    status: 'Sem Estoque',
    statusClass: 'danger',
  },
  {
    id: 5,
    produto: 'Del Valle Laranja 1L',
    categoria: 'Sucos',
    atual: 18,
    minimo: 10,
    status: 'Normal',
    statusClass: 'success',
  },
];

function ControleEstoque() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Controle de Estoque</h1>
          <p>Consulte saldos, níveis mínimos e disponibilidade dos produtos.</p>
        </div>

        <button className="primary-button" type="button">
          <Boxes size={17} />
          Ajustar Estoque
        </button>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />
            <input type="text" placeholder="Buscar produto..." />
          </div>

          <div className="toolbar-filters">
            <select defaultValue="todos">
              <option value="todos">Todos os status</option>
              <option value="normal">Estoque normal</option>
              <option value="baixo">Estoque baixo</option>
              <option value="zerado">Sem estoque</option>
            </select>

            <select defaultValue="todas">
              <option value="todas">Todas as categorias</option>
              <option value="bebidas">Bebidas</option>
              <option value="sucos">Sucos</option>
            </select>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Categoria</th>
                <th>Estoque Atual</th>
                <th>Estoque Mínimo</th>
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
                  <td>{produto.atual}</td>
                  <td>{produto.minimo}</td>
                  <td>
                    <span
                      className={`status-badge ${produto.statusClass}`}
                    >
                      {produto.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="action-button"
                      type="button"
                      aria-label={`Ações de ${produto.produto}`}
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

export default ControleEstoque; 