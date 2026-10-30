import { useEffect, useMemo, useState } from "react";
import { Save, Settings, SlidersHorizontal } from "lucide-react";
import parametroService from "../../services/parametroService";
import useAuth from "../../hooks/useAuth";
import "./Parametros.css";

function Parametros() {
  const { empresa } = useAuth();
  const [parametros, setParametros] = useState([]);
  const [valores, setValores] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  async function carregarParametros() {
    setLoading(true);
    setErro("");
    try {
      const dados = await parametroService.listar();
      setParametros(dados);
      setValores(
        Object.fromEntries(
          dados.map((p) => [p.chave, p.valor_convertido ?? p.valor]),
        ),
      );
    } catch (error) {
      setErro(
        error.response?.data?.mensagem ||
          "Não foi possível carregar os parâmetros.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarParametros();
  }, []);

  const grupos = useMemo(
    () =>
      parametros.reduce((acc, parametro) => {
        (acc[parametro.grupo] ||= []).push(parametro);
        return acc;
      }, {}),
    [parametros],
  );

  function alterarValor(parametro, valor) {
    const novoValor = parametro.tipo === "BOOLEANO" ? valor === "true" : valor;
    setValores((atual) => ({ ...atual, [parametro.chave]: novoValor }));
  }

  async function salvar() {
    setSaving(true);
    setErro("");
    setSucesso("");
    try {
      await parametroService.atualizarVarios(
        parametros.map((p) => ({ chave: p.chave, valor: valores[p.chave] })),
      );
      setSucesso("Parâmetros atualizados com sucesso.");
      await carregarParametros();
    } catch (error) {
      setErro(
        error.response?.data?.mensagem ||
          "Não foi possível salvar os parâmetros.",
      );
    } finally {
      setSaving(false);
    }
  }

  function renderCampo(parametro) {
    const valor = valores[parametro.chave] ?? "";

    if (parametro.tipo === "BOOLEANO") {
      return (
        <select
          value={String(valor)}
          onChange={(e) => alterarValor(parametro, e.target.value)}
        >
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      );
    }

    if (parametro.tipo === "INTEIRO" || parametro.tipo === "DECIMAL") {
      return (
        <input
          type="number"
          step={parametro.tipo === "DECIMAL" ? "0.01" : "1"}
          value={valor}
          onChange={(e) => alterarValor(parametro, e.target.value)}
        />
      );
    }

    if (parametro.tipo === "HORA") {
      return (
        <input
          type="time"
          value={valor}
          onChange={(e) => alterarValor(parametro, e.target.value)}
        />
      );
    }

    return (
      <input
        type="text"
        value={valor}
        onChange={(e) => alterarValor(parametro, e.target.value)}
      />
    );
  }

  if (loading) {
    return (
      <div className="parametros-page">
        <div className="parametros-loading">Carregando parâmetros...</div>
      </div>
    );
  }

  return (
    <div className="parametros-page">
      <div className="parametros-header">
        <div>
          <span className="parametros-eyebrow">
            <Settings size={16} /> Configurações
          </span>
          <h1>Parâmetros do Sistema</h1>
          <p>
            Configure as regras operacionais da{" "}
            <strong>{empresa?.nome_fantasia || empresa?.razao_social}</strong>.
          </p>
        </div>

        <button
          type="button"
          className="parametros-save"
          onClick={salvar}
          disabled={saving}
        >
          <Save size={18} /> {saving ? "Salvando..." : "Salvar alterações"}
        </button>
      </div>

      {erro && (
        <div className="parametros-alert parametros-alert--error">{erro}</div>
      )}
      {sucesso && (
        <div className="parametros-alert parametros-alert--success">
          {sucesso}
        </div>
      )}

      <div className="parametros-groups">
        {Object.entries(grupos).map(([grupo, itens]) => (
          <section className="parametros-card" key={grupo}>
            <div className="parametros-card-header">
              <div className="parametros-card-icon">
                <SlidersHorizontal size={19} />
              </div>
              <div>
                <h2>{grupo}</h2>
                <span>
                  {itens.length}{" "}
                  {itens.length === 1 ? "parâmetro" : "parâmetros"}
                </span>
              </div>
            </div>

            <div className="parametros-list">
              {itens.map((parametro) => (
                <div
                  className="parametro-row"
                  key={parametro.id ?? parametro.chave}
                >
                  <div className="parametro-info">
                    <strong>
                      {parametro.chave.split(".").pop().replaceAll("_", " ")}
                    </strong>
                    <p>{parametro.descricao}</p>
                    <small>{parametro.chave}</small>
                  </div>
                  <div className="parametro-control">
                    {renderCampo(parametro)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Parametros;
