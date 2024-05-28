import { Card, DonutChart } from "@tremor/react";
import { customTooltip } from "./customTooltip";
const sales = [
  { name: "New York", sales: 980 },
  { name: "London", sales: 456 },
  { name: "Hong Kong", sales: 390 },
  { name: "San Francisco", sales: 240 },
  { name: "Singapore", sales: 190 },
  { name: "Zurich", sales: 139 },
];
const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;
export const DonutChartComps = () => {
  return (
    <DonutChart
      data={sales}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      customTooltip={customTooltip}
    />
  );
};
