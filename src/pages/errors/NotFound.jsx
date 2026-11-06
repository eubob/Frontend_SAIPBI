import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <main className="route-error">
      <span>404</span>
      <h1>Página não encontrada</h1>
      <p>A rota informada não existe no SAIPBI.</p>
      <Link to="/app">Voltar aos módulos</Link>
    </main>
  );
}
