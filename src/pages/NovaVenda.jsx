import {
  Search,
  Plus,
  UserRound,
  Package,
  CreditCard,
  ClipboardCheck,
} from 'lucide-react';

import './Pages.css';

function NovaVenda() {
  return (
    <div className="system-page">
      <div className="page-header">
        <div>
          <h1>Nova Venda</h1>
          <p>Cadastre uma nova venda no sistema.</p>
        </div>
      </div>

      <div className="sale-form-card">

        {/* ETAPAS */}
        <div className="sale-steps">
          <div className="sale-step active">
            <div className="step-circle">
              <UserRound size={15} />
            </div>

            <span>Cliente</span>
          </div>

          <div className="step-line" />

          <div className="sale-step">
            <div className="step-circle">
              <Package size={15} />
            </div>

            <span>Produtos</span>
          </div>

          <div className="step-line" />

          <div className="sale-step">
            <div className="step-circle">
              <CreditCard size={15} />
            </div>

            <span>Pagamento</span>
          </div>

          <div className="step-line" />

          <div className="sale-step">
            <div className="step-circle">
              <ClipboardCheck size={15} />
            </div>

            <span>Revisão</span>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="sale-form-content">
          <div className="sale-section-header">
            <div>
              <h2>Dados do Cliente</h2>
              <p>
                Selecione um cliente cadastrado para continuar.
              </p>
            </div>

            <button
              className="primary-button"
              type="button"
            >
              <Plus size={16} />
              Novo Cliente
            </button>
          </div>

          {/* BUSCA */}
          <div className="sale-client-search">
            <Search size={17} />

            <input
              type="text"
              placeholder="Buscar cliente por nome, CNPJ ou telefone..."
            />
          </div>

          {/* CAMPOS */}
          <div className="sale-client-grid">
            <div className="form-group">
              <label htmlFor="cliente">
                Cliente
              </label>

              <select id="cliente" defaultValue="">
                <option value="" disabled>
                  Selecione um cliente
                </option>

                <option value="empresa-abc">
                  Empresa ABC Ltda
                </option>

                <option value="loja-povo">
                  Loja do Povo
                </option>

                <option value="comercial-silva">
                  Comercial Silva
                </option>

                <option value="tech-solutions">
                  Tech Solutions
                </option>

                <option value="mercado-central">
                  Mercado Central
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="tipo">
                Tipo
              </label>

              <input
                id="tipo"
                type="text"
                placeholder="Jurídica"
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="documento">
                CNPJ/CPF
              </label>

              <input
                id="documento"
                type="text"
                placeholder="00.000.000/0001-00"
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">
                Telefone
              </label>

              <input
                id="telefone"
                type="text"
                placeholder="(00) 00000-0000"
                disabled
              />
            </div>
          </div>
        </div>

        {/* RODAPÉ */}
        <div className="sale-form-footer">
          <button
            className="secondary-button"
            type="button"
          >
            Cancelar
          </button>

          <button
            className="primary-button"
            type="button"
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}

export default NovaVenda;