import { ModalBase } from "./ModalBase";
import { ExpensesForm } from "./ExpensesForm";
import { BudgetTrackerDash } from "./BudgetTrackerDash";
import { ExpesseFormData } from "../config/types";
import { useForm } from "react-hook-form";

export const BudgetTracker = () => {
  const initialValue: ExpesseFormData = {
    amount: 0,
    expensesName: "",
    expensesDate: new Date(),
    category: "",
  };

  const {
    reset,
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });

  return (
    <>
      <BudgetTrackerDash />
      {/* <BudgetTracker2/> */}
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
