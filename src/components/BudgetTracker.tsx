import { Button, Card } from "@tremor/react";
import { DonutChartComps } from "./ DonutChart";
import { ProgressCircleBar } from "./ProgressCircleBar";
import { AmountDisplay } from "./AmountDisplay";

export const BudgetTracker = () => {
  return (
    <Card
      className="mt-4 w-3/4 bg-tremor-background dark:bg-tremor-background-emphasis mb-4"
    >
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="flex justify-center">
          {/* <DonutChartComps /> */}
          <ProgressCircleBar />
        </div>
        <div className="flex flex-col justify-center items-center gap-8 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          <Button
          className="uppercase font-bold"
          >Resetear Presupuesto
          </Button>
          <AmountDisplay
            label="Presupuesto"
            amount={300}
          />
          <AmountDisplay
            label="Disponible"
            amount={200}
          />
          <AmountDisplay
            label="Gastado"
            amount={100}
          />
        </div>
      </div>
    </Card>
  );
};
