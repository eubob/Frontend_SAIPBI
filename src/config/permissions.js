export const PERFIS = Object.freeze({
  ADMINISTRADOR: "Administrador",
  GESTOR: "Gestor",
  OPERADOR: "Operador",
});

export const PERMISSIONS = Object.freeze({
  ACCESS_COMERCIAL: "access:comercial",
  ACCESS_ESTOQUE: "access:estoque",
  MANAGE_USERS: "manage:users",
  MANAGE_SETTINGS: "manage:settings",
  MANAGE_COMPANY: "manage:company",
  MANAGE_MASTER_DATA: "manage:master-data",
});

export const PROFILE_PERMISSIONS = Object.freeze({
  [PERFIS.ADMINISTRADOR]: Object.values(PERMISSIONS),
  [PERFIS.GESTOR]: [
    PERMISSIONS.ACCESS_COMERCIAL,
    PERMISSIONS.ACCESS_ESTOQUE,
    PERMISSIONS.MANAGE_MASTER_DATA,
  ],
  [PERFIS.OPERADOR]: [PERMISSIONS.ACCESS_COMERCIAL, PERMISSIONS.ACCESS_ESTOQUE],
});

export function hasPermission(profileName, permission) {
  return PROFILE_PERMISSIONS[profileName]?.includes(permission) ?? false;
}
