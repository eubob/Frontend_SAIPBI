import {
  CalendarDays,
  FileText,
} from 'lucide-react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import '../Pages.css';

const desempenhoVendedores = [
  {
    vendedor: 'Carlos Silva',
    faturamento: 28540,
  },
  {
    vendedor: 'Mariana Souza',
    faturamento: 24180,
  },
  {
    vendedor: 'João Pereira',
    faturamento: 18760,
  },
  {
    vendedor: 'Ana Lima',
    faturamento: 14320,
  },
  {
    vendedor: 'Pedro Santos',
    faturamento: 11980,
  },
];

function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

function DesempenhoVendedor() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Desempenho por Vendedor</h1>
          <p>
            Analise o desempenho da sua equipe de vendas.
          </p>
        </div>
      </div>

      {/* FILTROS */}
      <div className="report-filter-card">
        <div className="report-date-field">
          <label htmlFor="desempenho-data-inicial">
            Data Inicial
          </label>

          <div className="report-date-input">
            <input
              id="desempenho-data-inicial"
              type="date"
              defaultValue="2024-10-01"
            />

            <CalendarDays size={15} />
          </div>
        </div>

        <div className="report-date-field">
          <label htmlFor="desempenho-data-final">
            Data Final
          </label>

          <div className="report-date-input">
            <input
              id="desempenho-data-final"
              type="date"
              defaultValue="2024-10-31"
            />

            <CalendarDays size={15} />
          </div>
        </div>

        <button
          type="button"
          className="primary-button report-generate-button"
        >
          <FileText size={16} />
          Gerar Relatório
        </button>
      </div>

      {/* INDICADORES */}
      <div className="seller-summary-grid">
        <div className="report-summary-card">
          <span>Vendas</span>
          <strong>320</strong>
        </div>

        <div className="report-summary-card">
          <span>Faturamento</span>
          <strong>R$ 125.430,00</strong>
        </div>

        <div className="report-summary-card">
          <span>Ticket Médio</span>
          <strong>R$ 392,59</strong>
        </div>
      </div>

      {/* GRÁFICO */}
      <div className="report-chart-card">
        <div className="report-chart-header">
          <div>
            <h2>Faturamento por Vendedor</h2>

            <p>
              Comparativo de faturamento da equipe no período selecionado.
            </p>
          </div>
        </div>

        <div className="seller-chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={desempenhoVendedores}
              margin={{
                top: 10,
                right: 15,
                left: 10,
                bottom: 10,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#edf1f6"
              />

              <XAxis
                dataKey="vendedor"
                tickLine={false}
                axisLine={false}
                tick={{
                  fontSize: 10,
                  fill: '#8190a5',
                }}
              />

              <YAxis
                tickFormatter={(value) =>
                  `R$ ${value / 1000} mil`
                }
                tickLine={false}
                axisLine={false}
                width={70}
                tick={{
                  fontSize: 10,
                  fill: '#8190a5',
                }}
              />

              <Tooltip
                formatter={(value) => [
                  formatarMoeda(value),
                  'Faturamento',
                ]}
              />

              <Bar
                dataKey="faturamento"
                fill="#1769e8"
                radius={[4, 4, 0, 0]}
                maxBarSize={55}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DesempenhoVendedor;