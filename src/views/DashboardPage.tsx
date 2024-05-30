import { Card, Icon } from "@tremor/react";
import { AmountDisplay } from "../components/AmountDisplay";
import { NavBard } from "../components/NavBard";

export const DashboardPage = () => {
  return (
    <>
      <NavBard />
      <div className="space-y-3 w-3/4 mt-2 ">
        <p className="text-center font-mono text-sm text-slate-500 uppercase">
          Productos registrados
        </p>

        <Card>
          <AmountDisplay label={"Presupuesto"} amount={100} size="lg" />
        </Card>
        <Card>
          <AmountDisplay label={"Gastos"} amount={300} size="lg" />
        </Card>
        <Card>
          <AmountDisplay label={"Metas"} amount={200} size="lg" />
        </Card>
   
      </div>
    </>
  );
};
