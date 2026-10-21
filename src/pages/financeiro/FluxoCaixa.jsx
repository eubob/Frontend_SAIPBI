import {
  CalendarDays,
  TrendingUp,
  TrendingDown,
  WalletCards,
} from 'lucide-react';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import '../Pages.css';

const dados = [
  { periodo: '01/10', receitas: 5200, despesas: 3100 },
  { periodo: '05/10', receitas: 7800, despesas: 4300 },
  { periodo: '10/10', receitas: 6400, despesas: 3900 },
  { periodo: '15/10', receitas: 9100, despesas: 5800 },
  { periodo: '20/10', receitas: 8400, despesas: 5100 },
  { periodo: '25/10', receitas: 10200, despesas: 6200 },
  { periodo: '30/10', receitas: 11300, despesas: 6900 },
];

function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

function FluxoCaixa() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Fluxo de Caixa</h1>
          <p>
            Analise as entradas, saídas e o resultado financeiro do período.
          </p>
        </div>
      </div>

      <div className="report-filter-card">
        <div className="report-date-field">
          <label htmlFor="fluxo-inicial">Data Inicial</label>

          <div className="report-date-input">
            <input
              id="fluxo-inicial"
              type="date"
              defaultValue="2026-10-01"
            />
            <CalendarDays size={15} />
          </div>
        </div>

        <div className="report-date-field">
          <label htmlFor="fluxo-final">Data Final</label>

          <div className="report-date-input">
            <input
              id="fluxo-final"
              type="date"
              defaultValue="2026-10-31"
            />
            <CalendarDays size={15} />
          </div>
        </div>

        <button
          type="button"
          className="primary-button report-generate-button"
        >
          Aplicar Período
        </button>
      </div>

      <div className="seller-summary-grid">
        <div className="report-summary-card">
          <span>Entradas</span>
          <strong>R$ 68.400,00</strong>
          <TrendingUp size={16} />
        </div>

        <div className="report-summary-card">
          <span>Saídas</span>
          <strong>R$ 43.200,00</strong>
          <TrendingDown size={16} />
        </div>

        <div className="report-summary-card">
          <span>Resultado</span>
          <strong>R$ 25.200,00</strong>
          <WalletCards size={16} />
        </div>
      </div>

      <div className="report-chart-card">
        <div className="report-chart-header">
          <div>
            <h2>Movimentação do Caixa</h2>
            <p>
              Comparativo entre receitas e despesas no período.
            </p>
          </div>
        </div>

        <div className="report-chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dados}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#edf1f6"
              />

              <XAxis
                dataKey="periodo"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#8190a5' }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#8190a5' }}
                tickFormatter={(value) => `R$ ${value / 1000}k`}
              />

              <Tooltip formatter={(value) => formatarMoeda(value)} />
              <Legend />

              <Bar
                dataKey="receitas"
                name="Receitas"
                fill="#2da34a"
                radius={[4, 4, 0, 0]}
              />

              <Bar
                dataKey="despesas"
                name="Despesas"
                fill="#e24b4b"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default FluxoCaixa; 