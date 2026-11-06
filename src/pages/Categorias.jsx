import MasterDataCrud from "../components/common/MasterDataCrud";
export default function Categorias() {
  return (
    <MasterDataCrud
      title="Categorias"
      endpoint="/categorias"
      defaults={{ nome: "", ativo: true }}
      fields={[
        { name: "nome", label: "Nome", required: true },
        { name: "ativo", label: "Ativo", type: "boolean" },
      ]}
      columns={[
        { field: "nome", header: "Categoria" },
        { field: "ativo", header: "Status" },
      ]}
    />
  );
}
