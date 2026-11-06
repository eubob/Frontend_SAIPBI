import { Link } from "react-router-dom";
export default function Forbidden() {
  return (
    <main className="route-error">
      <span>403</span>
      <h1>Acesso não autorizado</h1>
      <p>Seu perfil não possui permissão para acessar esta área.</p>
      <Link to="/app">Voltar aos módulos</Link>
    </main>
  );
}
