import {
  Users,
  UserCheck,
  Building2,
  BriefcaseBusiness,
  UserPlus,
  UserMinus,
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

const colaboradoresPorDepartamento = [
  { departamento: 'Comercial', colaboradores: 18 },
  { departamento: 'Estoque', colaboradores: 12 },
  { departamento: 'Financeiro', colaboradores: 8 },
  { departamento: 'RH', colaboradores: 5 },
  { departamento: 'Administrativo', colaboradores: 7 },
];

const movimentacoes = [
  {
    id: 1,
    colaborador: 'Mariana Souza',
    descricao: 'Admissão registrada',
    departamento: 'Comercial',
    data: '21/10/2026',
    tipo: 'Admissão',
  },
  {
    id: 2,
    colaborador: 'Carlos Oliveira',
    descricao: 'Alteração de cargo',
    departamento: 'Estoque',
    data: '20/10/2026',
    tipo: 'Alteração',
  },
  {
    id: 3,
    colaborador: 'Ana Lima',
    descricao: 'Transferência de departamento',
    departamento: 'Financeiro',
    data: '19/10/2026',
    tipo: 'Transferência',
  },
  {
    id: 4,
    colaborador: 'Pedro Santos',
    descricao: 'Desligamento registrado',
    departamento: 'Comercial',
    data: '18/10/2026',
    tipo: 'Desligamento',
  },
];

function DashboardRH() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Dashboard de Recursos Humanos</h1>
          <p>
            Acompanhe colaboradores, departamentos, cargos e movimentações de pessoal.
          </p>
        </div>
      </div>

      <div className="module-metrics-grid">
        <div className="module-metric-card">
          <div className="module-metric-icon blue">
            <Users size={21} />
          </div>

          <div>
            <span>Colaboradores</span>
            <strong>50</strong>
            <small>total cadastrado</small>
          </div>
        </div>

        <div className="module-metric-card">
          <div className="module-metric-icon green">
            <UserCheck size={21} />
          </div>

          <div>
            <span>Ativos</span>
            <strong>47</strong>
            <small>94% do quadro</small>
          </div>
        </div>

        <div className="module-metric-card">
          <div className="module-metric-icon orange">
            <Building2 size={21} />
          </div>

          <div>
            <span>Departamentos</span>
            <strong>5</strong>
            <small>áreas cadastradas</small>
          </div>
        </div>

        <div className="module-metric-card">
          <div className="module-metric-icon blue">
            <BriefcaseBusiness size={21} />
          </div>

          <div>
            <span>Cargos</span>
            <strong>12</strong>
            <small>funções cadastradas</small>
          </div>
        </div>
      </div>

      <div className="module-dashboard-grid">
        <div className="page-card module-chart-card">
          <div className="module-card-heading">
            <div>
              <h2>Colaboradores por Departamento</h2>
              <p>Distribuição atual do quadro de colaboradores.</p>
            </div>
          </div>

          <div className="module-chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={colaboradoresPorDepartamento}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#edf1f5"
                />

                <XAxis
                  dataKey="departamento"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 10,
                    fill: '#718096',
                  }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  allowDecimals={false}
                  tick={{
                    fontSize: 10,
                    fill: '#718096',
                  }}
                />

                <Tooltip />

                <Bar
                  dataKey="colaboradores"
                  name="Colaboradores"
                  fill="#1769e8"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={45}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="page-card stock-alert-card">
          <div className="module-card-heading">
            <div>
              <h2>Resumo do Quadro</h2>
              <p>Movimentações de pessoal no período.</p>
            </div>
          </div>

          <div className="stock-alert-list">
            <div className="stock-alert-item">
              <div className="stock-alert-icon success">
                <UserPlus size={18} />
              </div>

              <div>
                <strong>4 admissões</strong>
                <span>registradas neste mês</span>
              </div>
            </div>

            <div className="stock-alert-item">
              <div className="stock-alert-icon danger">
                <UserMinus size={18} />
              </div>

              <div>
                <strong>2 desligamentos</strong>
                <span>registrados neste mês</span>
              </div>
            </div>

            <div className="stock-alert-item">
              <div className="stock-alert-icon info">
                <Users size={18} />
              </div>

              <div>
                <strong>47 ativos</strong>
                <span>no quadro atual</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-card">
        <div className="module-card-heading">
          <div>
            <h2>Últimas Movimentações</h2>
            <p>Alterações recentes relacionadas aos colaboradores.</p>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Colaborador</th>
                <th>Movimentação</th>
                <th>Departamento</th>
                <th>Tipo</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {movimentacoes.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong>{item.colaborador}</strong>
                  </td>

                  <td>{item.descricao}</td>
                  <td>{item.departamento}</td>
                  <td>{item.tipo}</td>
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

export default DashboardRH; 