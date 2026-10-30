import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import authService from '../services/authService';

export const AuthContext = createContext(null);

function getToken() {
  return localStorage.getItem('token') || sessionStorage.getItem('token');
}

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [perfil, setPerfil] = useState(null);
  const [empresa, setEmpresa] = useState(null);
  const [loading, setLoading] = useState(true);

  const limparSessao = useCallback(() => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    setUsuario(null);
    setPerfil(null);
    setEmpresa(null);
  }, []);

  const carregarSessao = useCallback(async () => {
    if (!getToken()) {
      setUsuario(null);
      setPerfil(null);
      setEmpresa(null);
      setLoading(false);
      return false;
    }

    setLoading(true);
    try {
      const dados = await authService.me();
      setUsuario(dados.usuario);
      setPerfil(dados.perfil);
      setEmpresa(dados.empresa);
      return true;
    } catch {
      limparSessao();
      return false;
    } finally {
      setLoading(false);
    }
  }, [limparSessao]);

  const logout = useCallback(() => {
    limparSessao();
  }, [limparSessao]);

  useEffect(() => {
    carregarSessao();
  }, [carregarSessao]);

  const value = useMemo(() => ({
    usuario,
    perfil,
    empresa,
    loading,
    authenticated: Boolean(usuario && perfil && empresa),
    isAdministrador: perfil?.nome === 'Administrador',
    isGestor: perfil?.nome === 'Gestor',
    isOperador: perfil?.nome === 'Operador',
    carregarSessao,
    logout,
  }), [usuario, perfil, empresa, loading, carregarSessao, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
