import './Sidebar.css';

// Apenas "Dashboard" possui rota implementada (/app) até o momento; os
// demais itens são preparação visual para as próximas telas do módulo
// Comercial e ainda não navegam para lugar nenhum.
const navSections = [
  {
    label: 'Principal',
    items: [
      { label: 'Dashboard', active: true },
      { label: 'Vendas' },
      { label: 'Clientes' },
      { label: 'Vendedores' },
    ],
  },
  {
    label: 'Comercial',
    items: [{ label: 'Nova Venda' }, { label: 'Pedidos' }, { label: 'Produtos' }],
  },
  {
    label: 'Relatórios',
    items: [
      { label: 'Relatórios' },
      { label: 'Vendas por Período' },
      { label: 'Desempenho por Vendedor' },
    ],
  },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <button
        type="button"
        className="sidebar__close"
        onClick={onClose}
        aria-label="Fechar menu"
      >
        ×
      </button>

      <div className="sidebar__brand">
        <span className="sidebar__brand-line">Portal</span>
        <span className="sidebar__brand-line sidebar__brand-line--accent">
          COMERCIAL
        </span>
      </div>

      <nav className="sidebar__nav">
        {navSections.map((section) => (
          <div className="sidebar__section" key={section.label}>
            <span className="sidebar__section-label">{section.label}</span>

            {section.items.map((item) => (
              <button
                type="button"
                key={item.label}
                className={`sidebar__item ${
                  item.active ? 'sidebar__item--active' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
