import { useCallback, useEffect, useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { Checkbox } from "primereact/checkbox";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import api from "../../services/AxiosInstance";
const initial = {
  fornecedor_id: null,
  prazo_padrao_dias: 1,
  lote_minimo: 1,
  custo: 1,
  principal: false,
};
export default function ProductSuppliers({ product, onClose }) {
  const [rows, setRows] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [form, setForm] = useState(initial);
  const [editing, setEditing] = useState(null);
  const [busy, setBusy] = useState(false);
  const toast = useRef(null);
  const load = useCallback(async () => {
    if (!product) return;
    try {
      const [a, b] = await Promise.all([
        api.get(`/produtos/${product.id}/fornecedores`),
        api.get("/fornecedores"),
      ]);
      setRows(a.data);
      setSuppliers(
        b.data
          .filter((x) => x.ativo)
          .map((x) => ({ label: x.razao_social, value: x.id })),
      );
    } catch (e) {
      toast.current?.show({
        severity: "error",
        summary: "Erro",
        detail: e.response?.data?.mensagem || "Erro ao carregar vínculos",
      });
    }
  }, [product]);
  useEffect(() => {
    load();
  }, [load]);
  async function save(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const url = `/produtos/${product.id}/fornecedores`;
      if (editing) await api.put(`${url}/${editing}`, form);
      else await api.post(url, form);
      setEditing(null);
      setForm(initial);
      await load();
      toast.current?.show({ severity: "success", summary: "Vínculo salvo" });
    } catch (e) {
      toast.current?.show({
        severity: "error",
        summary: "Erro",
        detail: e.response?.data?.mensagem || "Falha ao salvar",
      });
    } finally {
      setBusy(false);
    }
  }
  function remove(row) {
    confirmDialog({
      message: "Desvincular fornecedor?",
      header: "Confirmar",
      acceptLabel: "Desvincular",
      rejectLabel: "Cancelar",
      accept: async () => {
        try {
          await api.delete(`/produtos/${product.id}/fornecedores/${row.id}`);
          await load();
        } catch (e) {
          toast.current?.show({
            severity: "error",
            summary: "Erro",
            detail: e.response?.data?.mensagem || "Falha ao desvincular",
          });
        }
      },
    });
  }
  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog />
      <Dialog
        visible={Boolean(product)}
        onHide={onClose}
        header={`Fornecedores — ${product?.nome || ""}`}
        modal
        style={{ width: "min(95vw,850px)" }}
      >
        <DataTable value={rows} emptyMessage="Nenhum fornecedor vinculado.">
          <Column
            header="Fornecedor"
            body={(r) => r.fornecedor?.razao_social}
          />
          <Column field="prazo_padrao_dias" header="Prazo (dias)" />
          <Column field="lote_minimo" header="Lote mínimo" />
          <Column field="custo" header="Custo" />
          <Column
            header="Principal"
            body={(r) => (r.principal ? "Sim" : "Não")}
          />
          <Column
            header="Ações"
            body={(r) => (
              <>
                <Button
                  icon="pi pi-pencil"
                  text
                  onClick={() => {
                    setEditing(r.id);
                    setForm({ ...r });
                  }}
                />
                <Button
                  icon="pi pi-trash"
                  text
                  severity="danger"
                  onClick={() => remove(r)}
                />
              </>
            )}
          />
        </DataTable>
        <form className="master-form" onSubmit={save}>
          <h3>{editing ? "Editar vínculo" : "Adicionar fornecedor"}</h3>
          <label>
            Fornecedor
            <Dropdown
              value={form.fornecedor_id}
              options={suppliers}
              onChange={(e) =>
                setForm((v) => ({ ...v, fornecedor_id: e.value }))
              }
              disabled={Boolean(editing)}
              placeholder="Selecione"
              required
            />
          </label>
          {[
            ["prazo_padrao_dias", "Prazo (dias)"],
            ["lote_minimo", "Lote mínimo"],
            ["custo", "Custo"],
          ].map(([key, label]) => (
            <label key={key}>
              {label}
              <InputNumber
                value={Number(form[key])}
                min={0}
                onValueChange={(e) =>
                  setForm((v) => ({ ...v, [key]: e.value }))
                }
              />
            </label>
          ))}
          <label>
            Principal{" "}
            <Checkbox
              checked={Boolean(form.principal)}
              onChange={(e) => setForm((v) => ({ ...v, principal: e.checked }))}
            />
          </label>
          <div className="master-actions">
            <Button
              type="button"
              outlined
              label="Limpar"
              onClick={() => {
                setEditing(null);
                setForm(initial);
              }}
            />
            <Button label="Salvar vínculo" loading={busy} type="submit" />
          </div>
        </form>
      </Dialog>
    </>
  );
}
