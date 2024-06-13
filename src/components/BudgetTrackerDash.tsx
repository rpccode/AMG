import { Card, Button } from "@tremor/react";

import { AmountDisplay } from "./AmountDisplay";
import { ProgressCircleBar } from "./ProgressCircleBar";
import { useExpenseData } from "../hooks/useExpenseData";

export const BudgetTrackerDash = () => {
  const {totalBudget, totalAmount} = useExpenseData()
  return (
    <Card className="mt-4 w-3/4 bg-tremor-background dark:bg-tremor-background-emphasis mb-4">
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="flex justify-center">
          {/* <DonutChartComps /> */}
          <ProgressCircleBar />
        </div>
        <div className="flex flex-col justify-center items-center gap-8 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          <Button className="uppercase font-bold">Resetear Presupuesto</Button>
          <AmountDisplay label="Disponible" amount={totalBudget} />
          <AmountDisplay label="Gastado" amount={totalAmount} />
        </div>
      </div>
    </Card>
  );
};
