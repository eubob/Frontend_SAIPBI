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

const vendasPeriodo = [
  { data: '01/10', vendas: 3200 },
  { data: '03/10', vendas: 4800 },
  { data: '05/10', vendas: 3900 },
  { data: '07/10', vendas: 6200 },
  { data: '09/10', vendas: 5100 },
  { data: '11/10', vendas: 7400 },
  { data: '13/10', vendas: 5900 },
  { data: '15/10', vendas: 8200 },
  { data: '17/10', vendas: 6800 },
  { data: '19/10', vendas: 9100 },
  { data: '21/10', vendas: 7200 },
  { data: '23/10', vendas: 8500 },
  { data: '25/10', vendas: 7600 },
  { data: '27/10', vendas: 9400 },
  { data: '29/10', vendas: 8700 },
  { data: '31/10', vendas: 9900 },
];

function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(valor);
}

function VendasPeriodo() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Vendas por Período</h1>
          <p>
            Analise suas vendas em um período específico.
          </p>
        </div>
      </div>

      {/* FILTROS */}
      <div className="report-filter-card">
        <div className="report-date-field">
          <label htmlFor="data-inicial">
            Data Inicial
          </label>

          <div className="report-date-input">
            <input
              id="data-inicial"
              type="date"
              defaultValue="2024-10-01"
            />

            <CalendarDays size={15} />
          </div>
        </div>

        <div className="report-date-field">
          <label htmlFor="data-final">
            Data Final
          </label>

          <div className="report-date-input">
            <input
              id="data-final"
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
      <div className="report-summary-grid">
        <div className="report-summary-card">
          <span>Total de Vendas</span>
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

        <div className="report-summary-card">
          <span>Clientes</span>
          <strong>152</strong>
        </div>
      </div>

      {/* GRÁFICO */}
      <div className="report-chart-card">
        <div className="report-chart-header">
          <div>
            <h2>Vendas por Período</h2>
            <p>
              Faturamento registrado no período selecionado.
            </p>
          </div>
        </div>

        <div className="report-chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={vendasPeriodo}
              margin={{
                top: 10,
                right: 10,
                left: 5,
                bottom: 0,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#edf1f6"
              />

              <XAxis
                dataKey="data"
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
                width={65}
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
                labelFormatter={(label) =>
                  `Data: ${label}`
                }
              />

              <Bar
                dataKey="vendas"
                fill="#1769e8"
                radius={[4, 4, 0, 0]}
                maxBarSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default VendasPeriodo;