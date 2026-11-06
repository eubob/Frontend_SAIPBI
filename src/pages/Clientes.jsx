import MasterDataCrud from "../components/common/MasterDataCrud";
export default function Clientes() {
  return (
    <MasterDataCrud
      title="Clientes"
      endpoint="/clientes"
      defaults={{ nome: "", documento: "", contato: "", ativo: true }}
      fields={[
        { name: "nome", label: "Nome", required: true },
        { name: "documento", label: "CPF/CNPJ" },
        { name: "contato", label: "Contato" },
        { name: "ativo", label: "Ativo", type: "boolean" },
      ]}
      columns={[
        { field: "nome", header: "Nome" },
        { field: "documento", header: "Documento" },
        { field: "contato", header: "Contato" },
        { field: "ativo", header: "Status" },
      ]}
    />
  );
}
