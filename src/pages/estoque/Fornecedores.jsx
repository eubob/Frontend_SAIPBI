import MasterDataCrud from "../../components/common/MasterDataCrud";
export default function Fornecedores() {
  return (
    <MasterDataCrud
      title="Fornecedores"
      endpoint="/fornecedores"
      defaults={{ razao_social: "", documento: "", contato: "", ativo: true }}
      fields={[
        { name: "razao_social", label: "Razão social", required: true },
        { name: "documento", label: "CPF/CNPJ", required: true },
        { name: "contato", label: "Contato" },
        { name: "ativo", label: "Ativo", type: "boolean" },
      ]}
      columns={[
        { field: "razao_social", header: "Razão social" },
        { field: "documento", header: "Documento" },
        { field: "contato", header: "Contato" },
        { field: "ativo", header: "Status" },
      ]}
    />
  );
}
