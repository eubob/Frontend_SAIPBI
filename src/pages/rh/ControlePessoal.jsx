import {
  Search,
  UserPlus,
  UserMinus,
  ArrowLeftRight,
} from 'lucide-react';

import '../Pages.css';

const movimentacoes = [
  {
    id: 1,
    colaborador: 'Mariana Souza',
    tipo: 'Admissão',
    descricao: 'Admissão no departamento Comercial',
    data: '21/10/2026',
  },
  {
    id: 2,
    colaborador: 'Carlos Oliveira',
    tipo: 'Alteração',
    descricao: 'Alteração de cargo para Supervisor de Estoque',
    data: '20/10/2026',
  },
  {
    id: 3,
    colaborador: 'Ana Lima',
    tipo: 'Transferência',
    descricao: 'Transferência para o departamento Financeiro',
    data: '19/10/2026',
  },
  {
    id: 4,
    colaborador: 'Pedro Santos',
    tipo: 'Desligamento',
    descricao: 'Desligamento do quadro de colaboradores',
    data: '18/10/2026',
  },
];

function ControlePessoal() {
  function obterIcone(tipo) {
    if (tipo === 'Admissão') {
      return <UserPlus size={15} />;
    }

    if (tipo === 'Desligamento') {
      return <UserMinus size={15} />;
    }

    return <ArrowLeftRight size={15} />;
  }

  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Controle de Pessoal</h1>
          <p>
            Acompanhe admissões, desligamentos e alterações do quadro funcional.
          </p>
        </div>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />

            <input
              type="text"
              placeholder="Buscar movimentação..."
            />
          </div>

          <div className="toolbar-filters">
            <select defaultValue="todos">
              <option value="todos">Todas as movimentações</option>
              <option value="admissao">Admissões</option>
              <option value="desligamento">Desligamentos</option>
              <option value="transferencia">Transferências</option>
            </select>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Colaborador</th>
                <th>Tipo</th>
                <th>Descrição</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {movimentacoes.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong>{item.colaborador}</strong>
                  </td>

                  <td>
                    <span className="movement-type entry">
                      {obterIcone(item.tipo)}
                      {item.tipo}
                    </span>
                  </td>

                  <td>{item.descricao}</td>
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

export default ControlePessoal;  