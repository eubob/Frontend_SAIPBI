import {
  CalendarDays,
  WalletCards,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from 'lucide-react';

import '../Pages.css';

const relatorios = [
  {
    id: 'fluxo',
    titulo: 'Fluxo de Caixa',
    descricao:
      'Analise entradas, saídas e resultado financeiro por período.',
    icon: WalletCards,
  },
  {
    id: 'receitas',
    titulo: 'Relatório de Receitas',
    descricao:
      'Consulte as receitas registradas e sua evolução.',
    icon: TrendingUp,
  },
  {
    id: 'despesas',
    titulo: 'Relatório de Despesas',
    descricao:
      'Acompanhe despesas e principais categorias de gastos.',
    icon: TrendingDown,
  },
  {
    id: 'periodo',
    titulo: 'Resultado por Período',
    descricao:
      'Compare o desempenho financeiro entre períodos.',
    icon: CalendarDays,
  },
];

function RelatoriosFinanceiros() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Relatórios Financeiros</h1>
          <p>
            Acesse relatórios e análises financeiras do negócio.
          </p>
        </div>
      </div>

      <div className="reports-grid">
        {relatorios.map((relatorio) => {
          const Icon = relatorio.icon;

          return (
            <article
              className="report-card"
              key={relatorio.id}
            >
              <div className="report-icon">
                <Icon size={22} />
              </div>

              <div className="report-info">
                <h2>{relatorio.titulo}</h2>

                <p>{relatorio.descricao}</p>

                <button
                  type="button"
                  className="report-link"
                >
                  Acessar
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default RelatoriosFinanceiros; 