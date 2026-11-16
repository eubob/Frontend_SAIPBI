import { useState } from 'react';
import api from '../../services/AxiosInstance';
import './RelatorioIA.css';

function mesAtual() {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const dia = String(new Date(ano, hoje.getMonth() + 1, 0).getDate()).padStart(2, '0');
  return { inicio: `${ano}-${mes}-01`, fim: `${ano}-${mes}-${dia}` };
}
const moeda = valor => Number(valor || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function RelatorioIA() {
  const [periodo, setPeriodo] = useState(mesAtual);
  const [resultado, setResultado] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  async function gerar() {
    setCarregando(true);
    setErro('');
    setResultado(null);
    try {
      const { data } = await api.post('/ia/comercial/relatorio', periodo);
      setResultado(data);
    } catch (e) {
      setErro(e.response?.data?.mensagem || e.response?.data?.message || 'Não foi possível gerar o relatório.');
    } finally { setCarregando(false); }
  }

  return (
    <section className="relatorio-ia dashboard-card" aria-labelledby="titulo-relatorio-ia">
      <div className="relatorio-ia-header">
        <div>
          <h2 id="titulo-relatorio-ia">Relatório Inteligente Comercial</h2>
          <p>Interpretação dos indicadores com OpenRouter. Geração manual para evitar custos desnecessários.</p>
        </div>
      </div>
      <div className="relatorio-ia-controls">
        <label>Início <input type="date" value={periodo.inicio} onChange={e => setPeriodo(p => ({ ...p, inicio: e.target.value }))} /></label>
        <label>Fim <input type="date" value={periodo.fim} onChange={e => setPeriodo(p => ({ ...p, fim: e.target.value }))} /></label>
        <button type="button" disabled={carregando || !periodo.inicio || !periodo.fim || periodo.fim < periodo.inicio} onClick={gerar}>
          {carregando ? 'Gerando análise...' : 'Gerar relatório com IA'}
        </button>
      </div>
      {erro && <p className="relatorio-ia-error" role="alert">{erro}</p>}
      {resultado && <div className="relatorio-ia-result">
        {resultado.dados?.origem === 'DEMONSTRACAO' && <p role="status"><strong>Modo demonstração:</strong> os indicadores abaixo são sintéticos, não representam vendas reais.</p>}
        <p><strong>Vendas:</strong> {resultado.dados.indicadores.quantidadeVendas} · <strong>Faturamento:</strong> {moeda(resultado.dados.indicadores.faturamento)} · <strong>Ticket médio:</strong> {moeda(resultado.dados.indicadores.ticketMedio)}</p>
        {resultado.relatorio ? <>
          <h3>Resumo executivo</h3><p>{resultado.relatorio.resumoExecutivo}</p>
          <h3>Pontos de atenção</h3>{resultado.relatorio.pontosDeAtencao.length ? <ul>{resultado.relatorio.pontosDeAtencao.map((p, i) => <li key={i}>{p}</li>)}</ul> : <p>Nenhum ponto identificado.</p>}
          <h3>Recomendações</h3>{resultado.relatorio.recomendacoes.length ? <ul>{resultado.relatorio.recomendacoes.map((r, i) => <li key={i}><strong>{r.titulo} ({r.prioridade})</strong>: {r.justificativa}</li>)}</ul> : <p>Sem recomendações disponíveis.</p>}
          {resultado.relatorio.limitacoes.length > 0 && <><h3>Limitações</h3><ul>{resultado.relatorio.limitacoes.map((l, i) => <li key={i}>{l}</li>)}</ul></>}
          <small>Gerado em {new Date(resultado.geradoEm).toLocaleString('pt-BR')} · Modelo: {resultado.modelo}</small>
        </> : <p>{resultado.mensagem}</p>}
      </div>}
    </section>
  );
}
