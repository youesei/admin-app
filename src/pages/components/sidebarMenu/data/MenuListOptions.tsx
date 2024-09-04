import { ROUTES } from "@constants/globalConsts";
import {
  AccountingIcon,
  CashRegisterIcon,
  ContactsIcon,
  DeliveryIcon,
  InventoryIcon,
  ModulesIcon,
  ReportsIcon,
  SettingsIcon,
  StoreIcon,
  TurnIcon,
} from "@icons/Icons";
import type { SVGProps } from "react";

export const MENU_LIST_OPTIONS = [
  {
    key: "business",
    label: "negocios",
    route: ROUTES.BUSINESS,
    icon: (props: SVGProps<SVGSVGElement>) => (
      <StoreIcon {...props} {...props} />
    ),
  },
  {
    key: "modules",
    label: "modulos",
    route: ROUTES.MODULES,
    icon: (props: SVGProps<SVGSVGElement>) => <ModulesIcon {...props} />,
  },
  {
    key: "sales",
    label: "ventas",
    route: ROUTES.SALES,
    icon: (props: SVGProps<SVGSVGElement>) => <CashRegisterIcon {...props} />,
  },
  {
    key: "inventory",
    label: "inventario",
    route: ROUTES.INVENTORY,
    icon: (props: SVGProps<SVGSVGElement>) => <InventoryIcon {...props} />,
  },
  {
    key: "reports",
    label: "reportes",
    route: ROUTES.REPORTS,
    icon: (props: SVGProps<SVGSVGElement>) => <ReportsIcon {...props} />,
  },
  {
    key: "accounting",
    label: "contabilidad",
    route: ROUTES.ACCOUNTING,
    icon: (props: SVGProps<SVGSVGElement>) => <AccountingIcon {...props} />,
  },
  {
    key: "shifts",
    label: "turnos",
    route: ROUTES.SHIFTS,
    icon: (props: SVGProps<SVGSVGElement>) => <TurnIcon {...props} />,
  },
  {
    key: "delivery",
    label: "domicilios",
    route: ROUTES.DELIVERY,
    icon: (props: SVGProps<SVGSVGElement>) => <DeliveryIcon {...props} />,
  },
  {
    key: "contacts",
    label: "contactos",
    route: ROUTES.CONTACTS,
    icon: (props: SVGProps<SVGSVGElement>) => <ContactsIcon {...props} />,
  },
  // { key:"profile",label:"perfil, icon:(props: SVGProps<SVGSVGElement>) => <UserIcon {...props}/> },
  {
    key: "settings",
    label: "configuración",
    route: ROUTES.SETTINGS,
    icon: (props: SVGProps<SVGSVGElement>) => <SettingsIcon {...props} />,
  },
] as const;
