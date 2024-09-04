import { ROUTES } from "@constants/globalConsts";
import type { RoutesTypes } from "@pages/types/types";
import { GoBackButton } from "../../GoBackButton";
import { SearchBar } from "../../SearchBar";
import { SidebarMenu } from "../../sidebarMenu/components/SidebarMenu";

export const NAV_BAR_OPTIONS: Partial<Record<RoutesTypes, () => JSX.Element>> =
{
  [ROUTES.SALES]: () => (
    <div className="flex items-center gap-x-8">
      <SidebarMenu />
      <SearchBar />
    </div>
  ),
  [ROUTES.CHECKOUT]: () => (
    <div className="flex justify-between w-full">
      <GoBackButton route={ROUTES.SALES} />
      <select>
        <option>Seleccionar tipo de consumo</option>
        <option>Factura</option>
        <option>Domicilio</option>
        <option>Cotizacion</option>
      </select>
    </div>
  ),
  [ROUTES.PAYMENTSUMMARY]: () => <GoBackButton route={ROUTES.SALES} />,
};
