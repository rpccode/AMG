import { RiHomeOfficeLine, RiRestaurantLine, RiHome2Line, RiPieChartLine, RiTv2Line, RiHeartPulseLine, RiShoppingCartLine, RiGasStationLine, RiTaxiLine, RiPlaneLine } from "@remixicon/react";
import { Icategories } from "../interfaces/ICategories";

export const categories:Icategories[] = [
    { id: "1", name: "Ahorro", icon: RiHomeOfficeLine },
    { id: "2", name: "Comida", icon: RiRestaurantLine },
    { id: "3", name: "Casa", icon: RiHome2Line },
    { id: "4", name: "Gastos Varios", icon: RiPieChartLine },
    { id: "5", name: "Ocio", icon: RiTv2Line },
    { id: "6", name: "Salud", icon: RiHeartPulseLine },
    { id: "7", name: "Compra", icon: RiShoppingCartLine },
    { id: "8", name: "Combustible", icon: RiGasStationLine },
    { id: "9", name: "Trasporte", icon: RiTaxiLine },
    { id: "10", name: "Viaje", icon: RiPlaneLine },
  ];