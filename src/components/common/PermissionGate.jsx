import usePermissions from "../../hooks/usePermissions";

export default function PermissionGate({
  permission,
  children,
  fallback = null,
}) {
  const { can } = usePermissions();
  return can(permission) ? children : fallback;
}
