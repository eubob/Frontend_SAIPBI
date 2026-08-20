import React, { useState } from 'react';

function EmptyState({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50 text-center">
      <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 text-xl">
        ▱
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        {title}
      </h3>

      <p className="text-sm text-gray-500 max-w-sm mb-6">
        {description}
      </p>

      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
        <span>+</span>
        Criar Novo Registro
      </button>
    </div>
  );
}

export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard BI', icon: '▦' },
    { id: 'reports', label: 'Relatórios', icon: '▥' },
    { id: 'datasources', label: 'Fontes de Dados', icon: '▤' },
    { id: 'datasets', label: 'Conjuntos de Dados', icon: '▧' },
    { id: 'users', label: 'Usuários', icon: '♙' },
    { id: 'settings', label: 'Configurações', icon: '⚙' },
  ];

  const metrics = [
    {
      title: 'Total de Dashboards',
      val: '12',
      change: '+2 este mês',
    },
    {
      title: 'Conexões Ativas',
      val: '5',
      change: 'Estável',
    },
    {
      title: 'Relatórios Atualizados',
      val: '98%',
      change: '+1.2%',
    },
    {
      title: 'Erros de Carga',
      val: '0',
      change: 'Sem falhas',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar / Menu Lateral */}
      <aside
        className={`bg-slate-900 text-slate-300 w-64 flex-shrink-0 transition-all duration-300 ${
          isSidebarOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              PBI
            </div>

            <span className="font-semibold text-white tracking-wide">
              SAI PBI System
            </span>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <span className="w-5 h-5 flex items-center justify-center text-base">
                  {item.icon}
                </span>

                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Header Superior */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">

          <div className="flex items-center gap-4">

            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden text-gray-500 hover:text-gray-700 text-xl"
              aria-label="Abrir ou fechar menu"
            >
              {isSidebarOpen ? '×' : '☰'}
            </button>

            <div className="relative">
              <span className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 text-sm">
                🔍
              </span>

              <input
                type="text"
                placeholder="Buscar relatórios..."
                className="pl-9 pr-4 py-1.5 bg-gray-100 border border-transparent rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white w-64 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">

            <button
              className="text-gray-500 hover:text-gray-700 relative text-lg"
              aria-label="Notificações"
            >
              🔔

              <span className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0"></span>
            </button>

            <div className="flex items-center gap-3 border-l pl-4 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                US
              </div>

              <span className="text-sm font-medium text-gray-700">
                Administrador
              </span>
            </div>
          </div>
        </header>

        {/* Área de Conteúdo da Tela */}
        <main className="p-8 flex-1 overflow-y-auto">

          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">

              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Dashboard Indicadores
                  </h1>

                  <p className="text-sm text-gray-500">
                    Visão geral das integrações e dados do PowerBI
                  </p>
                </div>

                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                  <span>↗</span>
                  Sincronizar PowerBI
                </button>
              </div>

              {/* Cards Informativos / Métricas */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {metrics.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
                  >
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {card.title}
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-2">
                      {card.val}
                    </h3>

                    <span className="text-xs text-emerald-600 font-medium mt-1 inline-block">
                      {card.change}
                    </span>
                  </div>
                ))}
              </div>

              {/* Área do Embed / Power BI Vazio / Placeholder */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Visualização Integrada
                </h2>

                <EmptyState
                  title="Nenhum relatório selecionado para o Dashboard"
                  description="Selecione ou configure a URL da API do PowerBI no seu arquivo .env (VITE_API_URL) para carregar o quadro principal."
                />
              </div>
            </div>
          )}

          {/* Relatórios */}
          {activeTab === 'reports' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Relatórios
              </h1>

              <EmptyState
                title="Nenhum relatório cadastrado"
                description="Crie ou importe os relatórios BI para exibi-los nesta listagem."
              />
            </div>
          )}

          {/* Fontes de Dados */}
          {activeTab === 'datasources' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Fontes de Dados
              </h1>

              <EmptyState
                title="Nenhuma fonte de dados conectada"
                description="Adicione bancos de dados PostgreSQL, SQL Server ou APIs."
              />
            </div>
          )}

          {/* Conjuntos de Dados */}
          {activeTab === 'datasets' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Conjuntos de Dados
              </h1>

              <EmptyState
                title="Nenhum dataset encontrado"
                description="Configure os conjuntos de dados para processamento."
              />
            </div>
          )}

          {/* Usuários */}
          {activeTab === 'users' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Gestão de Usuários
              </h1>

              <EmptyState
                title="Sem outros usuários cadastrados"
                description="Gerencie as permissões de acesso ao sistema BI."
              />
            </div>
          )}

          {/* Configurações */}
          {activeTab === 'settings' && (
            <div className="bg-white p-6 rounded-xl border border-gray-200 max-w-2xl">
              <h1 className="text-xl font-bold text-gray-900 mb-4">
                Configurações de Conexão
              </h1>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    API URL (Vite Environment)
                  </label>

                  <input
                    type="text"
                    disabled
                    value={
                      import.meta.env.VITE_API_URL ||
                      'http://localhost:8080'
                    }
                    className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-sm font-mono text-gray-600"
                  />
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default App;

