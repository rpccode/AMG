import { Button, Card, NumberInput } from "@tremor/react";
import Swal from "sweetalert2";
import { RiCashLine } from "@remixicon/react";
import { useMemo, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useBudget } from "../hooks/useBudget";
import { Budget } from "../config/interfaces/budget";
import { v4 as uuidv4 } from "uuid";

export const BudgeForm = () => {
  const navigate = useNavigate();
  const { AddBudget, AddAllBudget } = useBudget();
  const [budget, setBudget] = useState<Budget>({ budget: 0 });

  const handleBudget = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBudgetValue = parseInt(e.target.value);
    // console.log(newBudgetValue)
    setBudget({ budget: newBudgetValue });
  };

  const isValid = useMemo(() => {
    return !budget || isNaN(budget.budget) || budget?.budget <= 0;
  }, [budget]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (budget?.budget <= 0) {
      return Swal.fire({
        title: "Presupuesto no valido!",
        text: "Por favor, digte un presupuesto valido",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
    const newBudget: Budget = {
      id: uuidv4(),
      name: "",
      budget: budget.budget,
      spent: 0,
      percentage: 0,
      start_date: new Date().toLocaleString(),
      end_date: "",
      category: "",
      type: "",
      description: "",
      status: true,
      icon: "",
    };
    AddAllBudget(newBudget);

    navigate("/admin/");
  };

  return (
    <>
      {/* {error && <Callout title="Sales Performance" color="red">{error}</Callout>} */}
      <Card className=" max-w-sm md:max-w-3xl bg-tremor-background dark:bg-tremor-background-emphasis mx-auto mt-10 shadow-lg ">
        <form action="" className="space-y-5" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-5">
            <label
              htmlFor="budget"
              className="text-xl md:text-4xl  text-blue-600 dark:text-dark-tremor-content-emphasis font-bold text-center"
            >
              Define tu presupuesto
            </label>
            <NumberInput
              icon={RiCashLine}
              id="budget"
              name="budget"
              placeholder="Define tu presupuest"
              className="text-tremor-content dark:text-dark-tremor-content dark:bg-tremor-background bg-tremor-background-emphasis"
              value={budget.budget}
              onChange={(E) => handleBudget(E)}
            />
          </div>
          <Button
            type="submit"
            className="w-full dark:text-tremor-brand-inverted font-bold cursor-pointer uppercase text-xl md:text-4xl "
            disabled={isValid}
          >
            Registrar
          </Button>
        </form>
      </Card>
    </>
  );
};
