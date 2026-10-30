import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/AxiosInstance';
import useAuth from '../hooks/useAuth';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { carregarSessao } = useAuth();

const handleLogin = async (e) => {
  e.preventDefault();

  setError('');
  setLoading(true);

  try {
    const response = await api.post('/auth/login', {
      email,
      senha: password,
    });

    const { token } = response.data;

    localStorage.removeItem('token');
    sessionStorage.removeItem('token');

    const storage = remember ? localStorage : sessionStorage;
    storage.setItem('token', token);

    const sessaoValida = await carregarSessao();

    if (!sessaoValida) {
      throw new Error('Não foi possível carregar a sessão do usuário.');
    }

    navigate('/app', { replace: true });
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    setError(
      error.response?.data?.mensagem ||
        'Não foi possível realizar o login.'
    );
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="login-page">
      <div className="login-showcase">
        <div className="login-showcase__pattern" aria-hidden="true" />
        <div className="login-showcase__glow" aria-hidden="true" />

        <div className="login-showcase__content">
          <div className="brand">
            <span className="brand__mark">SB</span>
            <div className="brand__text">
              <span className="brand__name">SAIPBI</span>
              <span className="brand__sub">Gestão Comercial e Vendas</span>
            </div>
          </div>

          <div className="showcase-copy">
            <h1>
              Sua operação comercial,
              <br />
              em um único painel.
            </h1>
            <p>
              Acompanhe vendas, clientes e desempenho da equipe em tempo real
              — do primeiro pedido ao fechamento do mês.
            </p>
          </div>

          <div className="floating-cards" aria-hidden="true">
            <div className="stat-card stat-card--primary">
              <div className="stat-card__row">
                <span className="stat-card__label">Vendas no Período</span>
                <span className="stat-card__badge">$</span>
              </div>
              <span className="stat-card__value">R$ 284.650</span>
              <span className="stat-card__delta">+12,8% este mês</span>
            </div>

            <div className="stat-card stat-card--secondary">
              <div className="stat-card__row">
                <span className="stat-card__label">Pedidos Realizados</span>
                <span className="stat-card__badge stat-card__badge--alt">VD</span>
              </div>
              <span className="stat-card__value">486</span>
              <span className="stat-card__delta">+7,4% este mês</span>
            </div>
          </div>

          <ul className="showcase-highlights">
            <li>
              <span className="showcase-highlights__dot" />
              Painel de vendas e pedidos em tempo real
            </li>
            <li>
              <span className="showcase-highlights__dot" />
              Ranking de desempenho por vendedor
            </li>
            <li>
              <span className="showcase-highlights__dot" />
              Relatórios comerciais prontos para exportar
            </li>
          </ul>
        </div>
      </div>

      <div className="login-panel">
        <div className="login-panel__inner">
          <div className="login-panel__brand-mobile">
            <span className="brand__mark">SB</span>
            <span className="brand__name brand__name--dark">SAIPBI</span>
          </div>

          <header className="login-header">
            <h2>Acessar o SAIPBI</h2>
            <p>Entre com suas credenciais para continuar.</p>
          </header>

          {error && (
            <div className="login-alert" role="alert">
              {error}
            </div>
          )}

          <form className="login-form" onSubmit={handleLogin} noValidate>
            <label className="field" htmlFor="email">
              <span className="field__label">E-mail</span>
              <div className="field__control">
                <svg className="field__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M4 6.5L12 12.5L20 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="voce@empresa.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </label>

            <label className="field" htmlFor="password">
              <span className="field__label">Senha</span>
              <div className="field__control">
                <svg className="field__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="5" y="10.5" width="14" height="9.5" rx="1.6" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M8 10.5V7.5C8 5.29086 9.79086 3.5 12 3.5C14.2091 3.5 16 5.29086 16 7.5V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="field__toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M3 3L21 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                      <path d="M10.6 5.2C11.05 5.13 11.52 5.1 12 5.1C17 5.1 20.5 9 21.8 12C21.36 13.02 20.68 14.13 19.78 15.13M6.7 6.6C4.6 8 3.06 10 2.2 12C3.5 15 7 18.9 12 18.9C13.62 18.9 15.06 18.5 16.3 17.86" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.9 12.6C9.9 14.15 11.15 15.4 12.7 15.4C13.2 15.4 13.66 15.27 14.06 15.05M14.5 11.3C14.24 10.13 13.32 9.19 12.15 8.92" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M2.2 12C3.5 9 7 5.1 12 5.1C17 5.1 20.5 9 21.8 12C20.5 15 17 18.9 12 18.9C7 18.9 3.5 15 2.2 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.6"/>
                    </svg>
                  )}
                </button>
              </div>
            </label>

            <div className="login-form__row">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span>Lembrar de mim</span>
              </label>
              <a className="login-form__forgot" href="#recuperar-senha">
                Esqueceu a senha?
              </a>
            </div>

            <button className="login-submit" type="submit" disabled={loading}>
              {loading ? <span className="login-submit__spinner" aria-hidden="true" /> : null}
              {loading ? 'Entrando…' : 'Entrar'}
            </button>
          </form>

          <p className="login-footer">
            Precisa de acesso? <a href="#solicitar-acesso">Fale com o administrador</a>
          </p>
        </div>
      </div>
    </div>
  );
}