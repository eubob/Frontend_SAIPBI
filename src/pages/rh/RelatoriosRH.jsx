import {
  Users,
  Building2,
  UserPlus,
  ArrowLeftRight,
  ArrowRight,
} from 'lucide-react';

import '../Pages.css';

const relatorios = [
  {
    id: 'quadro',
    titulo: 'Quadro de Colaboradores',
    descricao:
      'Visualize a composição atual do quadro funcional.',
    icon: Users,
  },
  {
    id: 'departamentos',
    titulo: 'Colaboradores por Departamento',
    descricao:
      'Analise a distribuição dos colaboradores entre as áreas.',
    icon: Building2,
  },
  {
    id: 'admissoes',
    titulo: 'Admissões e Desligamentos',
    descricao:
      'Acompanhe a evolução das entradas e saídas de colaboradores.',
    icon: UserPlus,
  },
  {
    id: 'movimentacoes',
    titulo: 'Movimentações de Pessoal',
    descricao:
      'Consulte transferências e alterações realizadas no período.',
    icon: ArrowLeftRight,
  },
];

function RelatoriosRH() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Relatórios de Recursos Humanos</h1>
          <p>
            Acesse relatórios e indicadores relacionados ao quadro funcional.
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

export default RelatoriosRH;  