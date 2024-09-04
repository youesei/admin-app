import type { ChildrenTypes } from "@types/types.d";

export type ModulesRoutesTypes =
	| "ventas"
	| "inventario"
	| "contactos"
	| "domicilios"
	| "reportes"
	| "turnos"
	| "contabilidad"
	| "configuración";

export interface ModuleLayoutTypes extends ChildrenTypes {
	title: ModulesRoutesTypes;
}
