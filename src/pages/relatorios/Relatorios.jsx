import {
  CalendarDays,
  Users,
  BarChart3,
  UserRound,
  ArrowRight,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

import '../Pages.css';

const relatorios = [
  {
    id: 'vendas-periodo',
    titulo: 'Vendas por Período',
    descricao: 'Analise suas vendas em um período específico.',
    icon: CalendarDays,
    rota: '/app/vendas-periodo',
  },
  {
    id: 'desempenho-vendedor',
    titulo: 'Desempenho por Vendedor',
    descricao: 'Compare o desempenho da sua equipe.',
    icon: Users,
    rota: '/app/desempenho-vendedor',
  },
  {
    id: 'produtos-vendidos',
    titulo: 'Produtos Mais Vendidos',
    descricao: 'Veja os produtos com maior saída.',
    icon: BarChart3,
    rota: null,
  },
  {
    id: 'clientes',
    titulo: 'Clientes',
    descricao: 'Analise o comportamento dos seus clientes.',
    icon: UserRound,
    rota: '/app/clientes',
  },
];

function Relatorios() {
  const navigate = useNavigate();

  function abrirRelatorio(relatorio) {
    if (relatorio.rota) {
      navigate(relatorio.rota);
    }
  }

  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Relatórios</h1>
          <p>
            Acesse relatórios e análises do seu negócio.
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
                  onClick={() => abrirRelatorio(relatorio)}
                  disabled={!relatorio.rota}
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

export default Relatorios;