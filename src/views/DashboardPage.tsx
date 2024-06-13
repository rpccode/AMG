import { Card, Icon } from "@tremor/react";
import { AmountDisplay } from "../components/AmountDisplay";
import { NavBard } from "../components/NavBard";
import { useExpenseData } from "../hooks/useExpenseData";

export const DashboardPage = () => {
  const {totalAmount,totalBudget} = useExpenseData()
  return (
    <>
      <NavBard />
      <div className="space-y-3 w-3/4 mt-2 ">
        <p className="text-center font-mono text-sm text-slate-500 uppercase">
          Productos registrados
        </p>

        <Card>
          <AmountDisplay label={"Presupuesto"} amount={totalBudget} size="lg" />
        </Card>
        <Card>
          <AmountDisplay label={"Gastos"} amount={totalAmount} size="lg" />
        </Card>
        <Card>
          <AmountDisplay label={"Metas"} amount={200} size="lg" />
        </Card>
   
      </div>
    </>
  );
};
