import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import MasterDataCrud from "../components/common/MasterDataCrud";
import ProductSuppliers from "../components/common/ProductSuppliers";
import api from "../services/AxiosInstance";
export default function Produtos() {
  const [cats, setCats] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    api
      .get("/categorias")
      .then((r) =>
        setCats(
          r.data
            .filter((c) => c.ativo)
            .map((c) => ({ label: c.nome, value: c.id })),
        ),
      )
      .catch(() => setError("Não foi possível carregar categorias."));
  }, []);
  return (
    <>
      {error && <p role="alert">{error}</p>}
      <MasterDataCrud
        title="Produtos"
        endpoint="/produtos"
        defaults={{
          nome: "",
          sku: "",
          categoria_id: null,
          unidade: "un",
          preco_venda: 1,
          custo: 1,
          estoque_minimo: 0,
          ativo: true,
        }}
        fields={[
          { name: "nome", label: "Nome", required: true },
          { name: "sku", label: "SKU", required: true },
          {
            name: "categoria_id",
            label: "Categoria",
            type: "select",
            options: cats,
            required: true,
          },
          { name: "unidade", label: "Unidade", required: true },
          {
            name: "preco_venda",
            label: "Preço de venda",
            type: "number",
            required: true,
          },
          { name: "custo", label: "Custo", type: "number", required: true },
          { name: "estoque_minimo", label: "Estoque mínimo", type: "number" },
          { name: "ativo", label: "Ativo", type: "boolean" },
        ]}
        columns={[
          { field: "nome", header: "Produto" },
          { field: "sku", header: "SKU" },
          { field: "categoria.nome", header: "Categoria" },
          { field: "preco_venda", header: "Preço" },
          { field: "estoque_atual", header: "Saldo" },
          { field: "ativo", header: "Status" },
        ]}
        extraAction={(r) => (
          <Button
            icon="pi pi-truck"
            text
            tooltip="Fornecedores do produto"
            aria-label="Fornecedores do produto"
            onClick={() => setSelected(r)}
          />
        )}
      />
      <ProductSuppliers product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
