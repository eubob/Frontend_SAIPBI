import {
  ArrowDownToLine,
  ArrowLeftRight,
  ArrowUpFromLine,
  BarChart3,
  Boxes,
  CirclePlus,
  ClipboardCheck,
  ClipboardList,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Truck,
  UserRound,
  Users,
} from "lucide-react";
import { PERMISSIONS } from "./permissions";

export const MODULES = [
  {
    id: "comercial",
    titulo: "Comercial",
    descricao: "Vendas, clientes, pedidos e resultados comerciais.",
    path: "/app/comercial",
    permission: PERMISSIONS.ACCESS_COMERCIAL,
    icon: ShoppingCart,
    status: "Disponível",
  },
  {
    id: "estoque",
    titulo: "Estoque",
    descricao: "Produtos, fornecedores e operações de estoque.",
    path: "/app/estoque",
    permission: PERMISSIONS.ACCESS_ESTOQUE,
    icon: Boxes,
    status: "Disponível",
  },
];

export const NAVIGATION = {
  comercial: {
    nome: "COMERCIAL",
    descricao: "Gestão Comercial",
    permission: PERMISSIONS.ACCESS_COMERCIAL,
    items: [
      {
        label: "Visão Geral",
        icon: LayoutDashboard,
        path: "/app/comercial",
        end: true,
      },
      { label: "Vendas", icon: ShoppingCart, path: "/app/comercial/vendas" },
      {
        label: "Nova Venda",
        icon: CirclePlus,
        path: "/app/comercial/nova-venda",
      },
      { label: "Clientes", icon: Users, path: "/app/comercial/clientes" },
      {
        label: "Vendedores",
        icon: UserRound,
        path: "/app/comercial/vendedores",
      },
      { label: "Pedidos", icon: ClipboardList, path: "/app/comercial/pedidos" },
      { label: "Produtos", icon: Package, path: "/app/comercial/produtos" },
      {
        label: "Categorias",
        icon: ClipboardList,
        path: "/app/comercial/categorias",
      },
      {
        label: "Relatórios",
        icon: BarChart3,
        path: "/app/comercial/relatorios",
      },
    ],
  },
  estoque: {
    nome: "ESTOQUE",
    descricao: "Gestão de Estoque",
    permission: PERMISSIONS.ACCESS_ESTOQUE,
    items: [
      {
        label: "Visão Geral",
        icon: LayoutDashboard,
        path: "/app/estoque",
        end: true,
      },
      { label: "Produtos", icon: Package, path: "/app/estoque/produtos" },
      {
        label: "Controle de Estoque",
        icon: Boxes,
        path: "/app/estoque/controle",
      },
      {
        label: "Entradas",
        icon: ArrowDownToLine,
        path: "/app/estoque/entradas",
      },
      { label: "Saídas", icon: ArrowUpFromLine, path: "/app/estoque/saidas" },
      {
        label: "Movimentações",
        icon: ArrowLeftRight,
        path: "/app/estoque/movimentacoes",
      },
      {
        label: "Inventário",
        icon: ClipboardCheck,
        path: "/app/estoque/inventario",
      },
      { label: "Fornecedores", icon: Truck, path: "/app/estoque/fornecedores" },
    ],
  },
};

export function getModuleFromPath(pathname) {
  if (pathname.startsWith("/app/estoque")) return NAVIGATION.estoque;
  return NAVIGATION.comercial;
}
