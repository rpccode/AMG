import {
  DateRangePicker,
  Divider,
  NumberInput,
  SearchSelect,
  SearchSelectItem,
  TextInput,
} from "@tremor/react";
import { categories } from "../config/data/Categories";
import { ExpesseFormData } from "../config/types";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import useModal from "../hooks/useModal";
import { useExpensse } from "../hooks/useExpensse";
import { useBudget } from "../hooks/useBudget";
import { v4 as uuidv4 } from "uuid";

type ExpesseFormProps = {
  register: UseFormRegister<ExpesseFormData>;
  errors: FieldErrors<ExpesseFormData>;
  handleSubmit: UseFormHandleSubmit<ExpesseFormData>;
  watch: UseFormWatch<ExpesseFormData>;
  setValue: UseFormSetValue<ExpesseFormData>;
  reset: UseFormReset<ExpesseFormData>;
};

export const ExpensesForm = ({
  errors,
  register,
  handleSubmit,
  watch,
  setValue,
  reset
}: ExpesseFormProps) => {
  const { handleHideModal } = useModal();
  const { budget } = useBudget();
  const { addNewExpensse } = useExpensse();

  const handleAddExpensse = (data: ExpesseFormData) => {
    addNewExpensse({
      ...data,
      budgetId: budget.id || "",
      id: uuidv4(),
      expensesDate: data.expensesDate.toLocaleString(),
      date: new Date().toLocaleString(),
    });
    reset()
    handleHideModal("expensses")
  };

  const handleCategoryChange = (selectedValue: string) => {
    setValue("category", selectedValue);
  };

  return (
    <>
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Registro de Gastos
        </h3>
        <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
          Take a few moments to register for your company's workspace
        </p>
        <form
          action="#"
          method="post"
          className="mt-8"
          noValidate
          onSubmit={handleSubmit(handleAddExpensse)}
        >
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="name"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Nombre del Gasto
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="text"
                id="name"
                autoComplete="name"
                placeholder="Nombre del Gasto"
                className="mt-2"
                required
                {...register("expensesName", {
                  required: "El Nombre del gasto es obligatorio",
                })}
                error={errors?.expensesName}
                errorMessage={errors.expensesName?.message}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="amount"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Cantidad
                <span className="text-red-500">*</span>
              </label>

              <NumberInput
                id="amount"
                autoComplete="amount"
                placeholder="Cantidad gastado Ej: $300"
                className="mx-auto max-w-sm mt-2"
                required
                {...register("amount", {
                  required: "El Monto del gasto es obligatorio",
                })}
                error={errors?.amount}
                errorMessage={errors.amount?.message}
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="category"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Categoria
                <span className="text-red-500">*</span>
              </label>
              <SearchSelect
                id="category"
                placeholder="Seleccione una categoria"
                value={watch("category")}
                onValueChange={handleCategoryChange}
                error={errors?.category}
                errorMessage={errors.category?.message}
              >
                {categories.map((value) => (
                  <SearchSelectItem
                    key={value.id}
                    value={value.id}
                    icon={value.icon}
                  >
                    {value.name}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="expensesDate"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Fecha del Gasto
              </label>
              <DateRangePicker
                className="mx-auto max-w-sm"
                enableSelect={false}
                {...register("expensesDate", {
                  required: "La Fecha del gasto es obligatoria",
                })}
                error={errors?.expensesDate}
                errorMessage={errors.expensesDate?.message}
              />
            </div>
          </div>
          <Divider />
          <div className="flex items-center justify-end space-x-4">
            <button
              type="button"
              className="whitespace-nowrap rounded-tremor-small px-4 py-2.5 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              onClick={() => handleHideModal("expensses")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
