import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './Dashboard.css';

// Usuário fixo por enquanto — trocar por dados reais (ex.: decodificando o
// token com jwt-decode, já presente nas dependências) quando o backend
// expuser essa informação.
const currentUser = {
  initials: 'CO',
  name: 'Usuario',
  role: 'Departamento',
};

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-shell">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {isSidebarOpen && (
        <div
          className="dashboard-overlay"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="dashboard-main">
        <Topbar user={currentUser} onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="dashboard-content">
          {/* Área de conteúdo vazia, pronta para receber os cards, tabelas
              e demais seções do Dashboard Comercial. */}
          <div className="dashboard-empty">
            <p>Conteúdo do Dashboard</p>
          </div>
        </main>
      </div>
    </div>
  );
}
