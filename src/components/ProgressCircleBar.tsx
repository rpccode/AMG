import { ProgressCircle } from "@tremor/react";
import { useBudget } from "../hooks/useBudget";
import { valueFormatter } from "../helpers/valueFormatter";
import { getColorBar } from "../helpers/ColorSelected";
import { useMemo } from "react";

export const ProgressCircleBar = () => {
  const { budgetValue } = useBudget();
  const value = valueFormatter(budgetValue);
  const valueN = (budgetValue / 100) * 100;
  const color = useMemo(() => getColorBar(valueN), [valueN]);


  return (
    <>
      <ProgressCircle value={valueN} size="xl" color={color}>
        <span className={`flex h-12 w-12 items-center justify-center rounded-full  text-sm font-medium text-${color}-500`}>
          {value}
        </span>
      </ProgressCircle>
    </>
  );
};
