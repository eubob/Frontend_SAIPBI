import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  UserCheck,
  UserX,
  X,
  Save,
  Users,
} from "lucide-react";

import api from "../services/AxiosInstance";
import "./Pages.css";
import "./Usuarios.css";

const formularioInicial = {
  nome: "",
  email: "",
  senha: "",
  perfil_id: "",
  ativo: true,
};

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [perfis, setPerfis] = useState([]);

  const [busca, setBusca] = useState("");
  const [filtroPerfil, setFiltroPerfil] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");

  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const [modalAberto, setModalAberto] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  const [formulario, setFormulario] = useState(formularioInicial);

  const carregarUsuarios = async () => {
    try {
      setCarregando(true);
      setErro("");

      const response = await api.get("/usuarios");

      setUsuarios(response.data);
    } catch (error) {
      setErro(
        error.response?.data?.mensagem ||
          "Não foi possível carregar os usuários.",
      );
    } finally {
      setCarregando(false);
    }
  };

  const carregarPerfis = async () => {
    try {
      const response = await api.get("/perfis");

      setPerfis(response.data);
    } catch (error) {
      console.error("Erro ao carregar perfis:", error);
    }
  };

  useEffect(() => {
    carregarUsuarios();
    carregarPerfis();
  }, []);

  const usuariosFiltrados = useMemo(() => {
    return usuarios.filter((usuario) => {
      const termo = busca.toLowerCase();

      const correspondeBusca =
        !termo ||
        usuario.nome?.toLowerCase().includes(termo) ||
        usuario.email?.toLowerCase().includes(termo);

      const correspondePerfil =
        !filtroPerfil || String(usuario.perfil_id) === String(filtroPerfil);

      const correspondeStatus =
        !filtroStatus || String(usuario.ativo) === filtroStatus;

      return correspondeBusca && correspondePerfil && correspondeStatus;
    });
  }, [usuarios, busca, filtroPerfil, filtroStatus]);

  const abrirNovoUsuario = () => {
    setUsuarioEditando(null);
    setFormulario(formularioInicial);
    setErro("");
    setSucesso("");
    setModalAberto(true);
  };

  const abrirEdicao = (usuario) => {
    setUsuarioEditando(usuario);

    setFormulario({
      nome: usuario.nome || "",
      email: usuario.email || "",
      senha: "",
      perfil_id: usuario.perfil_id || usuario.perfil?.id || "",
      ativo: usuario.ativo,
    });

    setErro("");
    setSucesso("");
    setModalAberto(true);
  };

  const fecharModal = () => {
    if (salvando) return;

    setModalAberto(false);
    setUsuarioEditando(null);
    setFormulario(formularioInicial);
  };

  const alterarCampo = (event) => {
    const { name, value } = event.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  const salvarUsuario = async (event) => {
    event.preventDefault();

    try {
      setSalvando(true);
      setErro("");
      setSucesso("");

      const dados = {
        nome: formulario.nome.trim(),
        email: formulario.email.trim(),
        perfil_id: Number(formulario.perfil_id),
        ativo: formulario.ativo,
      };

      if (formulario.senha) {
        dados.senha = formulario.senha;
      }

      if (!usuarioEditando) {
        dados.senha = formulario.senha;

        await api.post("/usuarios", dados);

        setSucesso("Usuário cadastrado com sucesso.");
      } else {
        await api.put(`/usuarios/${usuarioEditando.id}`, dados);

        setSucesso("Usuário atualizado com sucesso.");
      }

      await carregarUsuarios();

      setModalAberto(false);
      setUsuarioEditando(null);
      setFormulario(formularioInicial);
    } catch (error) {
      setErro(
        error.response?.data?.mensagem || "Não foi possível salvar o usuário.",
      );
    } finally {
      setSalvando(false);
    }
  };

  const alterarStatus = async (usuario) => {
    const novoStatus = !usuario.ativo;

    const acao = novoStatus ? "ativar" : "inativar";

    const confirmar = window.confirm(
      `Deseja realmente ${acao} o usuário "${usuario.nome}"?`,
    );

    if (!confirmar) return;

    try {
      setErro("");
      setSucesso("");

      await api.put(`/usuarios/${usuario.id}/status`, {
        ativo: novoStatus,
      });

      setSucesso(
        novoStatus
          ? "Usuário ativado com sucesso."
          : "Usuário inativado com sucesso.",
      );

      await carregarUsuarios();
    } catch (error) {
      setErro(
        error.response?.data?.mensagem ||
          "Não foi possível alterar o status do usuário.",
      );
    }
  };

  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Gestão de Usuários</h1>
          <p>
            Cadastre usuários, defina perfis de acesso e controle o status das
            contas.
          </p>
        </div>

        <button
          className="primary-button"
          type="button"
          onClick={abrirNovoUsuario}
        >
          <Plus size={17} />
          Novo Usuário
        </button>
      </div>

      {erro && <div className="users-message error">{erro}</div>}

      {sucesso && <div className="users-message success">{sucesso}</div>}

      <div className="users-summary">
        <div className="users-summary-card">
          <div className="users-summary-icon">
            <Users size={20} />
          </div>

          <div>
            <span>Total de usuários</span>
            <strong>{usuarios.length}</strong>
          </div>
        </div>

        <div className="users-summary-card">
          <div>
            <span>Usuários ativos</span>
            <strong>
              {usuarios.filter((usuario) => usuario.ativo).length}
            </strong>
          </div>
        </div>

        <div className="users-summary-card">
          <div>
            <span>Usuários inativos</span>
            <strong>
              {usuarios.filter((usuario) => !usuario.ativo).length}
            </strong>
          </div>
        </div>
      </div>

      <div className="page-card">
        <div className="table-toolbar">
          <div className="page-search">
            <Search size={16} />

            <input
              type="text"
              placeholder="Buscar por nome ou e-mail..."
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
            />
          </div>

          <div className="toolbar-filters">
            <select
              value={filtroPerfil}
              onChange={(event) => setFiltroPerfil(event.target.value)}
            >
              <option value="">Todos os perfis</option>

              {perfis.map((perfil) => (
                <option key={perfil.id} value={perfil.id}>
                  {perfil.nome}
                </option>
              ))}
            </select>

            <select
              value={filtroStatus}
              onChange={(event) => setFiltroStatus(event.target.value)}
            >
              <option value="">Todos os status</option>
              <option value="true">Ativos</option>
              <option value="false">Inativos</option>
            </select>
          </div>
        </div>

        <div className="page-table-wrapper">
          <table className="page-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Perfil</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {carregando ? (
                <tr>
                  <td colSpan="5" className="users-empty">
                    Carregando usuários...
                  </td>
                </tr>
              ) : usuariosFiltrados.length === 0 ? (
                <tr>
                  <td colSpan="5" className="users-empty">
                    Nenhum usuário encontrado.
                  </td>
                </tr>
              ) : (
                usuariosFiltrados.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>
                      <strong>{usuario.nome}</strong>
                    </td>

                    <td>{usuario.email}</td>

                    <td>
                      <span className="profile-badge">
                        {usuario.perfil?.nome || "-"}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`status-badge ${
                          usuario.ativo ? "success" : "danger"
                        }`}
                      >
                        {usuario.ativo ? "Ativo" : "Inativo"}
                      </span>
                    </td>

                    <td>
                      <div className="users-actions">
                        <button
                          className="users-icon-button"
                          type="button"
                          title="Editar usuário"
                          onClick={() => abrirEdicao(usuario)}
                        >
                          <Pencil size={15} />
                        </button>

                        <button
                          className={`users-icon-button ${
                            usuario.ativo ? "danger" : "success"
                          }`}
                          type="button"
                          title={
                            usuario.ativo
                              ? "Inativar usuário"
                              : "Ativar usuário"
                          }
                          onClick={() => alterarStatus(usuario)}
                        >
                          {usuario.ativo ? (
                            <UserX size={15} />
                          ) : (
                            <UserCheck size={15} />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {modalAberto && (
        <div
          className="users-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              fecharModal();
            }
          }}
        >
          <div className="users-modal">
            <div className="users-modal-header">
              <div>
                <h2>{usuarioEditando ? "Editar Usuário" : "Novo Usuário"}</h2>

                <p>
                  {usuarioEditando
                    ? "Atualize os dados e permissões do usuário."
                    : "Preencha os dados para cadastrar um novo usuário."}
                </p>
              </div>

              <button
                type="button"
                className="users-modal-close"
                onClick={fecharModal}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={salvarUsuario}>
              <div className="users-modal-content">
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>

                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Nome completo"
                    value={formulario.nome}
                    onChange={alterarCampo}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="usuario@saipbi.com"
                    value={formulario.email}
                    onChange={alterarCampo}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="perfil_id">Perfil de acesso</label>

                  <select
                    id="perfil_id"
                    name="perfil_id"
                    value={formulario.perfil_id}
                    onChange={alterarCampo}
                    required
                  >
                    <option value="">Selecione um perfil</option>

                    {perfis.map((perfil) => (
                      <option key={perfil.id} value={perfil.id}>
                        {perfil.nome}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="senha">
                    {usuarioEditando ? "Nova senha" : "Senha"}
                  </label>

                  <input
                    id="senha"
                    name="senha"
                    type="password"
                    placeholder={
                      usuarioEditando
                        ? "Deixe vazio para manter"
                        : "Digite a senha"
                    }
                    value={formulario.senha}
                    onChange={alterarCampo}
                    required={!usuarioEditando}
                    minLength={4}
                  />

                  {usuarioEditando && (
                    <small className="users-field-help">
                      Deixe vazio para manter a senha atual.
                    </small>
                  )}
                </div>

                <div className="users-status-field">
                  <div>
                    <strong>Usuário ativo</strong>
                    <span>Permite acesso ao sistema.</span>
                  </div>

                  <label className="users-switch">
                    <input
                      type="checkbox"
                      checked={formulario.ativo}
                      onChange={(event) =>
                        setFormulario((anterior) => ({
                          ...anterior,
                          ativo: event.target.checked,
                        }))
                      }
                    />

                    <span />
                  </label>
                </div>
              </div>

              <div className="users-modal-footer">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={fecharModal}
                  disabled={salvando}
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="primary-button"
                  disabled={salvando}
                >
                  <Save size={16} />

                  {salvando
                    ? "Salvando..."
                    : usuarioEditando
                      ? "Salvar alterações"
                      : "Cadastrar usuário"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Usuarios;
