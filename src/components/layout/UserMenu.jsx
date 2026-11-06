import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import useAuth from "../../hooks/useAuth";

export default function UserMenu() {
  const menu = useRef(null);
  const navigate = useNavigate();
  const { usuario, perfil, logout } = useAuth();
  const items = [
    { label: usuario?.nome || "Usuário", disabled: true },
    { label: perfil?.nome || "Perfil", disabled: true },
    { separator: true },
    {
      label: "Sair",
      icon: "pi pi-sign-out",
      command: () => {
        logout();
        navigate("/login", { replace: true });
      },
    },
  ];
  return (
    <>
      <Menu model={items} popup ref={menu} />
      <Button
        type="button"
        icon="pi pi-user"
        rounded
        text
        aria-label="Abrir menu do usuário"
        onClick={(event) => menu.current.toggle(event)}
      />
    </>
  );
}
