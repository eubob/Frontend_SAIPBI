import {
  DollarSign,
  ShoppingBag,
  Users,
  WalletCards,
  UserRound,
  PackageCheck,
  FileText,
  Package,
  CalendarDays,
} from 'lucide-react';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

import './Dashboard.css';

const faturamento = [
  { dia: '01/10', valor: 1200 },
  { dia: '03/10', valor: 1800 },
  { dia: '05/10', valor: 2800 },
  { dia: '07/10', valor: 2100 },
  { dia: '09/10', valor: 3500 },
  { dia: '11/10', valor: 6200 },
  { dia: '13/10', valor: 4300 },
  { dia: '15/10', valor: 7600 },
  { dia: '17/10', valor: 5700 },
  { dia: '19/10', valor: 6100 },
  { dia: '21/10', valor: 4700 },
  { dia: '23/10', valor: 4500 },
  { dia: '25/10', valor: 6800 },
  { dia: '27/10', valor: 7900 },
  { dia: '29/10', valor: 8400 },
  { dia: '31/10', valor: 8200 },
];

const statusPedidos = [
  { name: 'Entregues', value: 124, color: '#4fc36b' },
  { name: 'Em Processamento', value: 86, color: '#f5ad2d' },
  { name: 'Aguardando Pagamento', value: 54, color: '#4285f4' },
  { name: 'Cancelados', value: 28, color: '#ff6259' },
  { name: 'Outros', value: 30, color: '#8795a8' },
];

const vendedores = [
  {
    nome: 'Carlos Silva',
    vendas: 48,
    faturamento: 'R$ 28.540,00',
    meta: 'R$ 30.000,00',
    percentual: 95,
  },
  {
    nome: 'Mariana Souza',
    vendas: 42,
    faturamento: 'R$ 24.180,00',
    meta: 'R$ 25.000,00',
    percentual: 97,
  },
  {
    nome: 'João Pereira',
    vendas: 38,
    faturamento: 'R$ 18.760,00',
    meta: 'R$ 20.000,00',
    percentual: 94,
  },
  {
    nome: 'Ana Lima',
    vendas: 31,
    faturamento: 'R$ 14.320,00',
    meta: 'R$ 15.000,00',
    percentual: 95,
  },
  {
    nome: 'Pedro Santos',
    vendas: 26,
    faturamento: 'R$ 11.980,00',
    meta: 'R$ 15.000,00',
    percentual: 80,
  },
];

const atividades = [
  {
    icon: ShoppingBag,
    titulo: 'Nova venda realizada',
    descricao: 'Pedido #1245 - R$ 1.250,00',
    tempo: '2 min',
    tipo: 'blue',
  },
  {
    icon: UserRound,
    titulo: 'Cliente cadastrado',
    descricao: 'Empresa ABC Ltda',
    tempo: '15 min',
    tipo: 'purple',
  },
  {
    icon: PackageCheck,
    titulo: 'Pedido entregue',
    descricao: 'Pedido #1236',
    tempo: '1 hora',
    tipo: 'green',
  },
  {
    icon: Package,
    titulo: 'Produto atualizado',
    descricao: 'Notebook Dell Inspiron',
    tempo: '2 horas',
    tipo: 'red',
  },
  {
    icon: FileText,
    titulo: 'Relatório gerado',
    descricao: 'Vendas por Período - Outubro',
    tempo: '3 horas',
    tipo: 'blue',
  },
];

function MetricCard({ icon: Icon, type, title, value, growth }) {
  return (
    <article className="metric-card">
      <div className={`metric-icon ${type}`}>
        <Icon size={20} />
      </div>

      <div className="metric-content">
        <span>{title}</span>
        <strong>{value}</strong>
        <small>↑ {growth} em relação ao mês anterior</small>
      </div>
    </article>
  );
}

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Visão geral do desempenho comercial da sua empresa.</p>
        </div>

        <div className="dashboard-period">
          <CalendarDays size={15} />
          <span>01/10/2024 - 31/10/2024</span>
        </div>
      </div>

      <section className="metrics-grid">
        <MetricCard
          icon={DollarSign}
          type="green"
          title="Faturamento"
          value="R$ 125.430,00"
          growth="12,5%"
        />

        <MetricCard
          icon={ShoppingBag}
          type="blue"
          title="Vendas Realizadas"
          value="320"
          growth="8,1%"
        />

        <MetricCard
          icon={Users}
          type="orange"
          title="Clientes Ativos"
          value="152"
          growth="5,0%"
        />

        <MetricCard
          icon={WalletCards}
          type="purple"
          title="Ticket Médio"
          value="R$ 392,59"
          growth="4,2%"
        />
      </section>

      <section className="dashboard-middle-grid">
        <article className="dashboard-card revenue-card">
          <div className="card-heading">
            <h2>Faturamento por Dia</h2>

            <select defaultValue="faturamento">
              <option value="faturamento">Faturamento</option>
            </select>
          </div>

          <div className="revenue-chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={faturamento}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="revenueGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#2878f0"
                      stopOpacity={0.25}
                    />
                    <stop
                      offset="95%"
                      stopColor="#2878f0"
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#edf1f6"
                />

                <XAxis
                  dataKey="dia"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#8290a3' }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  width={55}
                  tick={{ fontSize: 10, fill: '#8290a3' }}
                  tickFormatter={(value) =>
                    value === 0 ? 'R$ 0' : `R$ ${value / 1000}.000`
                  }
                />

                <Tooltip
                  formatter={(value) => [
                    `R$ ${value.toLocaleString('pt-BR')}`,
                    'Faturamento',
                  ]}
                />

                <Area
                  type="monotone"
                  dataKey="valor"
                  stroke="#1769e8"
                  strokeWidth={2}
                  fill="url(#revenueGradient)"
                  dot={{
                    r: 3,
                    fill: '#1769e8',
                    strokeWidth: 0,
                  }}
                  activeDot={{ r: 5 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="dashboard-card orders-card">
          <div className="card-heading">
            <h2>Status dos Pedidos</h2>
          </div>

          <div className="orders-content">
            <div className="orders-chart">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusPedidos}
                    dataKey="value"
                    innerRadius={48}
                    outerRadius={70}
                    paddingAngle={1}
                    stroke="none"
                  >
                    {statusPedidos.map((item) => (
                      <Cell key={item.name} fill={item.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="orders-total">
                <strong>322</strong>
                <span>Pedidos</span>
              </div>
            </div>

            <div className="orders-legend">
              {statusPedidos.map((item) => (
                <div className="legend-item" key={item.name}>
                  <span
                    className="legend-dot"
                    style={{ background: item.color }}
                  />

                  <span className="legend-name">{item.name}</span>

                  <strong>
                    {item.value} (
                    {Math.round((item.value / 322) * 100)}%)
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="dashboard-bottom-grid">
        <article className="dashboard-card sellers-card">
          <div className="card-heading">
            <h2>Top 5 Vendedores</h2>
          </div>

          <div className="table-responsive">
            <table className="sellers-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Vendedor</th>
                  <th>Vendas</th>
                  <th>Faturamento</th>
                  <th>Meta</th>
                  <th>% Meta</th>
                </tr>
              </thead>

              <tbody>
                {vendedores.map((vendedor, index) => (
                  <tr key={vendedor.nome}>
                    <td>{index + 1}</td>
                    <td>{vendedor.nome}</td>
                    <td>{vendedor.vendas}</td>
                    <td>{vendedor.faturamento}</td>
                    <td>{vendedor.meta}</td>
                    <td>
                      <span
                        className={
                          vendedor.percentual >= 90
                            ? 'goal-badge success'
                            : 'goal-badge warning'
                        }
                      >
                        {vendedor.percentual}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="dashboard-card activities-card">
          <div className="card-heading activities-heading">
            <h2>Últimas atividades</h2>
            <button type="button">Ver todas</button>
          </div>

          <div className="activities-list">
            {atividades.map((atividade) => {
              const Icon = atividade.icon;

              return (
                <div
                  className="activity-item"
                  key={`${atividade.titulo}-${atividade.tempo}`}
                >
                  <div className={`activity-icon ${atividade.tipo}`}>
                    <Icon size={16} />
                  </div>

                  <div className="activity-info">
                    <strong>{atividade.titulo}</strong>
                    <span>{atividade.descricao}</span>
                  </div>

                  <time>{atividade.tempo}</time>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
}

export default Dashboard; 