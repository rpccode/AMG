import BudgetTracker2 from "../components/BudgetTracker2";
import { ExpensesList } from "../components/ExpensesList";
import { ExpensesForm } from "../components/ExpensesForm";
import { ModalBase } from "../components/ModalBase";
import { useExpenseData } from "../hooks/useExpenseData";

export const ExpenssePage = () => {
  const {
    reset,
    watch,
    setValue,
    register,
    handleSubmit,
    errors,
    data,
  } = useExpenseData();

  return (
    <>
      <BudgetTracker2 title={"Total de gastos por categoria"} data={data} />
      <ExpensesList />
      <ModalBase name={"expensses"}>
        <ExpensesForm
          reset={reset}
          watch={watch}
          setValue={setValue}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </ModalBase>
    </>
  );
};
