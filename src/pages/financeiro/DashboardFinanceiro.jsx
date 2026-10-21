import {
  WalletCards,
  TrendingUp,
  TrendingDown,
  CircleDollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import '../Pages.css';

const fluxoMensal = [
  { mes: 'Mai', receitas: 48500, despesas: 32100 },
  { mes: 'Jun', receitas: 52600, despesas: 34800 },
  { mes: 'Jul', receitas: 49700, despesas: 36200 },
  { mes: 'Ago', receitas: 58100, despesas: 38500 },
  { mes: 'Set', receitas: 62400, despesas: 41100 },
  { mes: 'Out', receitas: 68400, despesas: 43200 },
];

const movimentacoes = [
  {
    id: 1,
    descricao: 'Recebimento Pedido #1245',
    categoria: 'Vendas',
    tipo: 'Receita',
    valor: 'R$ 2.450,00',
    data: '21/10/2026',
  },
  {
    id: 2,
    descricao: 'Pagamento fornecedor',
    categoria: 'Fornecedores',
    tipo: 'Despesa',
    valor: 'R$ 1.840,00',
    data: '21/10/2026',
  },
  {
    id: 3,
    descricao: 'Recebimento Pedido #1244',
    categoria: 'Vendas',
    tipo: 'Receita',
    valor: 'R$ 1.280,00',
    data: '20/10/2026',
  },
  {
    id: 4,
    descricao: 'Despesa operacional',
    categoria: 'Operacional',
    tipo: 'Despesa',
    valor: 'R$ 650,00',
    data: '20/10/2026',
  },
];

function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(valor);
}

function DashboardFinanceiro() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Dashboard Financeiro</h1>
          <p>
            Acompanhe receitas, despesas, saldo e compromissos financeiros.
          </p>
        </div>
      </div>

      <div className="module-metrics-grid">
        <div className="module-metric-card">
          <div className="module-metric-icon blue">
            <WalletCards size={21} />
          </div>

          <div>
            <span>Saldo Atual</span>
            <strong>R$ 48.750</strong>
            <small>saldo disponível</small>
          </div>
        </div>

        <div className="module-metric-card">
          <div className="module-metric-icon green">
            <TrendingUp size={21} />
          </div>

          <div>
            <span>Receitas do Mês</span>
            <strong>R$ 68.400</strong>
            <small>+8,4% no período</small>
          </div>
        </div>

        <div className="module-metric-card">
          <div className="module-metric-icon red">
            <TrendingDown size={21} />
          </div>

          <div>
            <span>Despesas do Mês</span>
            <strong>R$ 43.200</strong>
            <small>63,2% das receitas</small>
          </div>
        </div>

        <div className="module-metric-card">
          <div className="module-metric-icon orange">
            <CircleDollarSign size={21} />
          </div>

          <div>
            <span>A Receber</span>
            <strong>R$ 18.950</strong>
            <small>12 contas pendentes</small>
          </div>
        </div>
      </div>

      <div className="module-dashboard-grid">
        <div className="page-card module-chart-card">
          <div className="module-card-heading">
            <div>
              <h2>Fluxo Financeiro</h2>
              <p>Receitas e despesas dos últimos meses.</p>
            </div>

            <select defaultValue="6">
              <option value="6">Últimos 6 meses</option>
              <option value="12">Últimos 12 meses</option>
            </select>
          </div>

          <div className="module-chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={fluxoMensal}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#edf1f5"
                />

                <XAxis
                  dataKey="mes"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#718096' }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#718096' }}
                  tickFormatter={(value) => `R$ ${value / 1000}k`}
                />

                <Tooltip
                  formatter={(value) => formatarMoeda(value)}
                />

                <Area
                  type="monotone"
                  dataKey="receitas"
                  stroke="#2da34a"
                  fill="#2da34a"
                  fillOpacity={0.08}
                  strokeWidth={2}
                  name="Receitas"
                />

                <Area
                  type="monotone"
                  dataKey="despesas"
                  stroke="#e24b4b"
                  fill="#e24b4b"
                  fillOpacity={0.06}
                  strokeWidth={2}
                  name="Despesas"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="page-card stock-alert-card">
          <div className="module-card-heading">
            <div>
              <h2>Resumo Financeiro</h2>
              <p>Situação atual das movimentações.</p>
            </div>
          </div>

          <div className="stock-alert-list">
            <div className="stock-alert-item">
              <div className="stock-alert-icon success">
                <ArrowUpRight size={18} />
              </div>

              <div>
                <strong>R$ 68.400</strong>
                <span>receitas neste mês</span>
              </div>
            </div>

            <div className="stock-alert-item">
              <div className="stock-alert-icon danger">
                <ArrowDownRight size={18} />
              </div>

              <div>
                <strong>R$ 43.200</strong>
                <span>despesas neste mês</span>
              </div>
            </div>

            <div className="stock-alert-item">
              <div className="stock-alert-icon warning">
                <CircleDollarSign size={18} />
              </div>

              <div>
                <strong>R$ 9.450</strong>
                <span>contas a pagar</span>
              </div>
            </div>

            <div className="stock-alert-item">
              <div className="stock-alert-icon info">
                <WalletCards size={18} />
              </div>

              <div>
                <strong>R$ 18.950</strong>
                <span>contas a receber</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-card">
        <div className="module-card-heading">
          <div>
            <h2>Últimas Movimentações</h2>
            <p>Movimentações financeiras registradas recentemente.</p>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {movimentacoes.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong>{item.descricao}</strong>
                  </td>

                  <td>{item.categoria}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        item.tipo === 'Receita'
                          ? 'success'
                          : 'danger'
                      }`}
                    >
                      {item.tipo}
                    </span>
                  </td>

                  <td>{item.valor}</td>
                  <td>{item.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardFinanceiro; 