import { ROUTES } from "@constants/globalConsts";

export const MODULES_ROUTES = {
	ventas: ROUTES.SALES,
	inventario: ROUTES.INVENTORY,
	contactos: ROUTES.CONTACTS,
	domicilios: ROUTES.DELIVERY,
	reportes: ROUTES.REPORTS,
	turnos: ROUTES.SHIFTS,
	contabilidad: ROUTES.ACCOUNTING,
	configuración: ROUTES.SETTINGS,
} as const;
