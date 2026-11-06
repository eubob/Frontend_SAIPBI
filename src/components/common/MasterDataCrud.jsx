import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import api from "../../services/AxiosInstance";
import useAuth from "../../hooks/useAuth";
import "./masterData.css";

export default function MasterDataCrud({
  title,
  endpoint,
  fields,
  columns,
  defaults = {},
  extraAction,
}) {
  const { isAdministrador, isGestor } = useAuth();
  const canEdit = isAdministrador || isGestor;
  const toast = useRef(null);
  const [rows, setRows] = useState([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [dialog, setDialog] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(defaults);
  const [saving, setSaving] = useState(false);
  const load = useCallback(async () => {
    setBusy(true);
    setError("");
    try {
      const { data } = await api.get(endpoint);
      setRows(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.response?.data?.mensagem || "Falha ao consultar os dados.");
    } finally {
      setBusy(false);
    }
  }, [endpoint]);
  useEffect(() => {
    load();
  }, [load]);
  const filtered = useMemo(
    () =>
      rows.filter((r) =>
        JSON.stringify(r).toLowerCase().includes(search.toLowerCase()),
      ),
    [rows, search],
  );
  function open(record) {
    setEditing(record?.id ?? null);
    setForm(record ? { ...record } : { ...defaults });
    setDialog(true);
  }
  async function save(e) {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = Object.fromEntries(
        fields.map((f) => [f.name, form[f.name] ?? null]),
      );
      if (editing) await api.put(`${endpoint}/${editing}`, payload);
      else await api.post(endpoint, payload);
      setDialog(false);
      toast.current?.show({
        severity: "success",
        summary: "Salvo",
        detail: "Registro salvo com sucesso.",
      });
      await load();
    } catch (e) {
      toast.current?.show({
        severity: "error",
        summary: "Erro",
        detail: e.response?.data?.mensagem || "Não foi possível salvar.",
      });
    } finally {
      setSaving(false);
    }
  }
  function deactivate(record) {
    confirmDialog({
      message: `Inativar ${record.nome || record.razao_social}?`,
      header: "Confirmar inativação",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Inativar",
      rejectLabel: "Cancelar",
      accept: async () => {
        try {
          await api.delete(`${endpoint}/${record.id}`);
          toast.current?.show({ severity: "success", summary: "Inativado" });
          await load();
        } catch (e) {
          toast.current?.show({
            severity: "error",
            summary: "Erro",
            detail: e.response?.data?.mensagem || "Falha na inativação.",
          });
        }
      },
    });
  }
  return (
    <div className="system-page master-data">
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="page-header">
        <div>
          <h1>{title}</h1>
          <p>Cadastros reais, isolados por empresa.</p>
        </div>
        {canEdit && (
          <Button
            label="Novo cadastro"
            icon="pi pi-plus"
            onClick={() => open(null)}
          />
        )}
      </div>
      <div className="page-card">
        <div className="master-toolbar">
          <InputText
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquisar..."
            aria-label="Pesquisar registros"
          />
          <Button
            label="Atualizar"
            icon="pi pi-refresh"
            outlined
            onClick={load}
            loading={busy}
          />
        </div>
        {error && (
          <div role="alert" className="master-error">
            {error} <Button label="Tentar novamente" text onClick={load} />
          </div>
        )}
        <DataTable
          value={filtered}
          loading={busy}
          paginator
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          emptyMessage="Nenhum registro encontrado."
          dataKey="id"
          responsiveLayout="scroll"
        >
          {columns.map((c) => (
            <Column
              key={c.field}
              field={c.field}
              header={c.header}
              body={
                c.field === "ativo"
                  ? (r) => (
                      <Tag
                        severity={r.ativo ? "success" : "secondary"}
                        value={r.ativo ? "Ativo" : "Inativo"}
                      />
                    )
                  : c.body
              }
            />
          ))}
          {canEdit && (
            <Column
              header="Ações"
              body={(r) => (
                <div className="master-actions">
                  <Button
                    icon="pi pi-pencil"
                    aria-label="Editar"
                    text
                    onClick={() => open(r)}
                  />
                  {r.ativo && (
                    <Button
                      icon="pi pi-ban"
                      aria-label="Inativar"
                      severity="danger"
                      text
                      onClick={() => deactivate(r)}
                    />
                  )}{" "}
                  {extraAction?.(r)}
                </div>
              )}
            />
          )}
        </DataTable>
      </div>
      <Dialog
        header={editing ? `Editar ${title}` : `Novo ${title}`}
        visible={dialog}
        onHide={() => setDialog(false)}
        modal
        style={{ width: "min(95vw, 580px)" }}
      >
        <form onSubmit={save} className="master-form">
          {fields.map((f) => (
            <label key={f.name}>
              <span>
                {f.label}
                {f.required ? " *" : ""}
              </span>
              {f.type === "select" ? (
                <Dropdown
                  value={form[f.name] ?? null}
                  options={f.options || []}
                  optionLabel="label"
                  optionValue="value"
                  onChange={(e) =>
                    setForm((v) => ({ ...v, [f.name]: e.value }))
                  }
                  placeholder="Selecione"
                  className="w-full"
                  required={f.required}
                />
              ) : f.type === "boolean" ? (
                <InputSwitch
                  checked={Boolean(form[f.name])}
                  onChange={(e) =>
                    setForm((v) => ({ ...v, [f.name]: e.value }))
                  }
                />
              ) : f.type === "number" ? (
                <InputNumber
                  value={form[f.name] == null ? null : Number(form[f.name])}
                  onValueChange={(e) =>
                    setForm((v) => ({ ...v, [f.name]: e.value }))
                  }
                  minFractionDigits={0}
                  maxFractionDigits={2}
                  useGrouping={false}
                  className="w-full"
                />
              ) : (
                <InputText
                  value={form[f.name] ?? ""}
                  onChange={(e) =>
                    setForm((v) => ({ ...v, [f.name]: e.target.value }))
                  }
                  required={f.required}
                  className="w-full"
                />
              )}
            </label>
          ))}
          <div className="master-actions">
            <Button
              label="Cancelar"
              type="button"
              outlined
              onClick={() => setDialog(false)}
            />
            <Button label="Salvar" type="submit" loading={saving} />
          </div>
        </form>
      </Dialog>
    </div>
  );
}
