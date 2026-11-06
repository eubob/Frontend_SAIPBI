import { useEffect, useRef, useState } from "react";
import { FaUserShield } from "react-icons/fa6";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import api from "../services/AxiosInstance";
import "./Pages.css";
import "./Usuarios.css";

const vazio = { nome: "", email: "", senha: "", perfil_id: null, ativo: true };

export default function Usuarios() {
  const toast = useRef(null);
  const [usuarios, setUsuarios] = useState([]);
  const [perfis, setPerfis] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState(vazio);

  async function carregar() {
    setLoading(true);
    try {
      const [usuariosResponse, perfisResponse] = await Promise.all([
        api.get("/usuarios"),
        api.get("/perfis"),
      ]);
      setUsuarios(usuariosResponse.data);
      setPerfis(perfisResponse.data);
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: "Erro",
        detail:
          error.response?.data?.mensagem ||
          "Não foi possível carregar os usuários.",
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    carregar();
  }, []);

  function novo() {
    setEditando(null);
    setForm(vazio);
    setDialog(true);
  }
  function editar(usuario) {
    setEditando(usuario);
    setForm({
      nome: usuario.nome || "",
      email: usuario.email || "",
      senha: "",
      perfil_id: usuario.perfil_id || usuario.perfil?.id || null,
      ativo: usuario.ativo,
    });
    setDialog(true);
  }

  async function salvar(event) {
    event.preventDefault();
    setSalvando(true);
    try {
      const payload = {
        nome: form.nome.trim(),
        email: form.email.trim(),
        perfil_id: Number(form.perfil_id),
        ativo: form.ativo,
      };
      if (form.senha) payload.senha = form.senha;
      if (editando) await api.put(`/usuarios/${editando.id}`, payload);
      else {
        payload.senha = form.senha;
        await api.post("/usuarios", payload);
      }
      toast.current?.show({
        severity: "success",
        summary: "Sucesso",
        detail: editando ? "Usuário atualizado." : "Usuário cadastrado.",
      });
      setDialog(false);
      await carregar();
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: "Erro",
        detail:
          error.response?.data?.mensagem ||
          "Não foi possível salvar o usuário.",
      });
    } finally {
      setSalvando(false);
    }
  }

  function confirmarStatus(usuario) {
    const novoStatus = !usuario.ativo;
    confirmDialog({
      message: `Deseja ${novoStatus ? "ativar" : "inativar"} ${usuario.nome}?`,
      header: "Confirmar alteração",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Confirmar",
      rejectLabel: "Cancelar",
      accept: async () => {
        try {
          await api.put(`/usuarios/${usuario.id}/status`, {
            ativo: novoStatus,
          });
          await carregar();
          toast.current?.show({
            severity: "success",
            summary: "Status atualizado",
          });
        } catch (error) {
          toast.current?.show({
            severity: "error",
            summary: "Erro",
            detail:
              error.response?.data?.mensagem ||
              "Não foi possível alterar o status.",
          });
        }
      },
    });
  }

  const perfilTemplate = (row) => (
    <Tag value={row.perfil?.nome || "-"} severity="info" />
  );
  const statusTemplate = (row) => (
    <Tag
      value={row.ativo ? "Ativo" : "Inativo"}
      severity={row.ativo ? "success" : "danger"}
    />
  );
  const acoesTemplate = (row) => (
    <div className="users-actions">
      <Button
        icon="pi pi-pencil"
        rounded
        text
        aria-label={`Editar ${row.nome}`}
        onClick={() => editar(row)}
      />
      <Button
        icon={row.ativo ? "pi pi-user-minus" : "pi pi-user-plus"}
        rounded
        text
        severity={row.ativo ? "danger" : "success"}
        aria-label={`Alterar status de ${row.nome}`}
        onClick={() => confirmarStatus(row)}
      />
    </div>
  );

  return (
    <div className="system-page">
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="page-header">
        <div>
          <h1>Gestão de Usuários</h1>
          <p>Administração de contas e perfis da empresa atual.</p>
        </div>
        <Button label="Novo Usuário" icon="pi pi-plus" onClick={novo} />
      </div>
      <div className="users-summary">
        <div className="users-summary-card">
          <div className="users-summary-icon">
            <FaUserShield />
          </div>
          <div>
            <span>Total de usuários</span>
            <strong>{usuarios.length}</strong>
          </div>
        </div>
        <div className="users-summary-card">
          <div>
            <span>Ativos</span>
            <strong>{usuarios.filter((u) => u.ativo).length}</strong>
          </div>
        </div>
        <div className="users-summary-card">
          <div>
            <span>Inativos</span>
            <strong>{usuarios.filter((u) => !u.ativo).length}</strong>
          </div>
        </div>
      </div>
      <div className="page-card">
        <div className="table-toolbar">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar usuários"
            />
          </span>
        </div>
        <DataTable
          value={usuarios}
          loading={loading}
          paginator
          rows={10}
          globalFilter={busca}
          globalFilterFields={["nome", "email", "perfil.nome"]}
          emptyMessage="Nenhum usuário encontrado."
          stripedRows
        >
          <Column field="nome" header="Nome" sortable />
          <Column field="email" header="E-mail" sortable />
          <Column header="Perfil" body={perfilTemplate} />
          <Column header="Status" body={statusTemplate} />
          <Column
            header="Ações"
            body={acoesTemplate}
            style={{ width: "9rem" }}
          />
        </DataTable>
      </div>
      <Dialog
        header={editando ? "Editar usuário" : "Novo usuário"}
        visible={dialog}
        style={{ width: "min(520px, 92vw)" }}
        modal
        onHide={() => !salvando && setDialog(false)}
      >
        <form className="users-form" onSubmit={salvar}>
          <label>
            Nome
            <InputText
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              required
            />
          </label>
          <label>
            E-mail
            <InputText
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </label>
          <label>
            Perfil
            <Dropdown
              value={form.perfil_id}
              options={perfis}
              optionLabel="nome"
              optionValue="id"
              placeholder="Selecione"
              onChange={(e) => setForm({ ...form, perfil_id: e.value })}
              required
            />
          </label>
          <label>
            {editando ? "Nova senha (opcional)" : "Senha"}
            <Password
              value={form.senha}
              onChange={(e) => setForm({ ...form, senha: e.target.value })}
              feedback={false}
              toggleMask
              required={!editando}
            />
          </label>
          <div className="users-form-actions">
            <Button
              type="button"
              label="Cancelar"
              severity="secondary"
              text
              onClick={() => setDialog(false)}
            />
            <Button
              type="submit"
              label={salvando ? "Salvando..." : "Salvar"}
              icon="pi pi-check"
              loading={salvando}
            />
          </div>
        </form>
      </Dialog>
    </div>
  );
}
