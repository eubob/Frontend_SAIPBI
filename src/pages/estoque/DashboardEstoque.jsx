import {
  Boxes,
  TriangleAlert,
  PackageCheck,
  PackageX,
  ArrowDownToLine,
  ArrowUpFromLine,
} from 'lucide-react';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import '../Pages.css';

const dadosEstoque = [
  { categoria: 'Bebidas', quantidade: 480 },
  { categoria: 'Alimentos', quantidade: 360 },
  { categoria: 'Limpeza', quantidade: 290 },
  { categoria: 'Higiene', quantidade: 220 },
  { categoria: 'Outros', quantidade: 160 },
];

const movimentacoes = [
  {
    id: 1,
    tipo: 'Entrada',
    produto: 'Coca-Cola Original 2L',
    quantidade: '+50',
    data: '21/10/2026',
    usuario: 'Administrador',
  },
  {
    id: 2,
    tipo: 'Saída',
    produto: 'Coca-Cola Zero 2L',
    quantidade: '-12',
    data: '21/10/2026',
    usuario: 'Operador',
  },
  {
    id: 3,
    tipo: 'Entrada',
    produto: 'Fanta Laranja 2L',
    quantidade: '+30',
    data: '20/10/2026',
    usuario: 'Administrador',
  },
  {
    id: 4,
    tipo: 'Saída',
    produto: 'Sprite 2L',
    quantidade: '-8',
    data: '20/10/2026',
    usuario: 'Operador',
  },
];

function DashboardEstoque() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Dashboard de Estoque</h1>
          <p>Acompanhe a situação atual e as movimentações do estoque.</p>
        </div>
      </div>

      <div className="module-metrics-grid">
        <div className="module-metric-card">
          <div className="module-metric-icon blue">
            <Boxes size={21} />
          </div>

          <div>
            <span>Total em Estoque</span>
            <strong>1.510</strong>
            <small>unidades disponíveis</small>
          </div>
        </div>

        <div className="module-metric-card">
          <div className="module-metric-icon green">
            <PackageCheck size={21} />
          </div>

          <div>
            <span>Produtos Ativos</span>
            <strong>128</strong>
            <small>produtos cadastrados</small>
          </div>
        </div>

        <div className="module-metric-card">
          <div className="module-metric-icon orange">
            <TriangleAlert size={21} />
          </div>

          <div>
            <span>Estoque Baixo</span>
            <strong>18</strong>
            <small>requerem atenção</small>
          </div>
        </div>

        <div className="module-metric-card">
          <div className="module-metric-icon red">
            <PackageX size={21} />
          </div>

          <div>
            <span>Sem Estoque</span>
            <strong>5</strong>
            <small>produtos indisponíveis</small>
          </div>
        </div>
      </div>

      <div className="module-dashboard-grid">
        <div className="page-card module-chart-card">
          <div className="module-card-heading">
            <div>
              <h2>Estoque por Categoria</h2>
              <p>Quantidade atual de produtos por categoria.</p>
            </div>

            <select defaultValue="todos">
              <option value="todos">Todos os produtos</option>
              <option value="ativos">Produtos ativos</option>
            </select>
          </div>

          <div className="module-chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dadosEstoque}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#edf1f5"
                />

                <XAxis
                  dataKey="categoria"
                  tick={{ fontSize: 10, fill: '#718096' }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tick={{ fontSize: 10, fill: '#718096' }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Bar
                  dataKey="quantidade"
                  fill="#1769e8"
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="page-card stock-alert-card">
          <div className="module-card-heading">
            <div>
              <h2>Atenção do Estoque</h2>
              <p>Resumo dos itens que precisam de análise.</p>
            </div>
          </div>

          <div className="stock-alert-list">
            <div className="stock-alert-item">
              <div className="stock-alert-icon warning">
                <TriangleAlert size={18} />
              </div>

              <div>
                <strong>18 produtos</strong>
                <span>abaixo do estoque mínimo</span>
              </div>
            </div>

            <div className="stock-alert-item">
              <div className="stock-alert-icon danger">
                <PackageX size={18} />
              </div>

              <div>
                <strong>5 produtos</strong>
                <span>com estoque zerado</span>
              </div>
            </div>

            <div className="stock-alert-item">
              <div className="stock-alert-icon success">
                <ArrowDownToLine size={18} />
              </div>

              <div>
                <strong>320 unidades</strong>
                <span>recebidas neste mês</span>
              </div>
            </div>

            <div className="stock-alert-item">
              <div className="stock-alert-icon info">
                <ArrowUpFromLine size={18} />
              </div>

              <div>
                <strong>214 unidades</strong>
                <span>retiradas neste mês</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-card">
        <div className="module-card-heading">
          <div>
            <h2>Últimas Movimentações</h2>
            <p>Movimentações registradas recentemente.</p>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Data</th>
                <th>Responsável</th>
              </tr>
            </thead>

            <tbody>
              {movimentacoes.map((item) => (
                <tr key={item.id}>
                  <td>
                    <span
                      className={`status-badge ${
                        item.tipo === 'Entrada' ? 'success' : 'info'
                      }`}
                    >
                      {item.tipo}
                    </span>
                  </td>

                  <td>
                    <strong>{item.produto}</strong>
                  </td>

                  <td>{item.quantidade}</td>
                  <td>{item.data}</td>
                  <td>{item.usuario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardEstoque; 