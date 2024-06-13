import { useExpensse } from "../hooks/useExpensse";
import { useMemo } from "react";
import { ExpenseCard } from "./ExpenseCard";
import { useExpenseData } from "../hooks/useExpenseData";

export const ExpensesList = () => {
  const { isEmpty, expenseList,expensses } = useExpenseData();

  return (
    <>
      <div className="flex items-center space-x-2 mt-6 ">
        <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Lista de Gastos
        </h3>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-tremor-full bg-tremor-background-subtle text-tremor-label font-medium text-tremor-content-strong dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-strong">
          {expensses.length}
        </span>
      </div>
      {/* <Divider className="my-4" /> */}
      {isEmpty ? (
        <span className=" mt-2 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          No hay Gastos para mostrar
        </span>
      ) : (
        <>
          <div className="mt-4 grid grid-cols-1 gap-4  sm:grid-cols-2 lg:grid-cols-3">
            {expenseList.map((member) => (
              <ExpenseCard key={member.id} expense={member} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
