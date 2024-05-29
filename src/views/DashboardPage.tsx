import { Card, Icon } from "@tremor/react";
import { ProgressBard } from "../components";
import { AmountDisplay } from "../components/AmountDisplay";
import { BudgetTracker } from "../components/BudgetTracker";
import { ProgressCircleCard } from "../components/ProgressCircleCard";
import { RiShapesFill } from "@remixicon/react";

export const DashboardPage = () => {
  return (
    <>
      <div className="space-y-3 w-3/4 mt-2 ">
        <p className="text-center font-mono text-sm text-slate-500">
          Productos registrados
        </p>
        <Card>
          <AmountDisplay label={"Presupuesto"} amount={100} size="lg" />
        </Card>
        <p className="text-center font-mono text-sm text-slate-500">
          Productos registrados
        </p>
      <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-12 mt-4">
      <Icon icon={RiShapesFill} variant="outlined" tooltip="outlined" size="md" />
      <Icon icon={RiShapesFill} variant="outlined" tooltip="outlined" size="md" />
      <Icon icon={RiShapesFill} variant="outlined" tooltip="outlined" size="md" />
      <Icon icon={RiShapesFill} variant="outlined" tooltip="outlined" size="md" />
      </div>
      </div>
    </>
  );
};
