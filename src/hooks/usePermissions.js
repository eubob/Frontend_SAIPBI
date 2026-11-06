import { useCallback, useMemo } from "react";
import useAuth from "./useAuth";
import { hasPermission, PROFILE_PERMISSIONS } from "../config/permissions";

export default function usePermissions() {
  const { perfil } = useAuth();
  const profileName = perfil?.nome;
  const permissions = useMemo(
    () => PROFILE_PERMISSIONS[profileName] ?? [],
    [profileName],
  );
  const can = useCallback(
    (permission) => hasPermission(profileName, permission),
    [profileName],
  );
  return { profileName, permissions, can };
}
