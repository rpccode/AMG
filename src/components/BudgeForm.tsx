import {
  Button,
  Card,
  NumberInput,
} from "@tremor/react";
import Swal from 'sweetalert2'
import { RiCashLine } from "@remixicon/react";
import { useMemo, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const BudgeForm = () => {
  const navigate = useNavigate()
  const [budget, setBudget] = useState(0);

  const handleBudget = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(parseInt(e.target.value));
  };

  const isValid = useMemo(()=>{
    return isNaN(budget) || budget <= 0;
  },[budget])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (budget <= 0) {
     return Swal.fire({
        title: 'Presupuesto no valido!',
        text: 'Por favor, digte un presupuesto valido',
        icon: 'error',
        confirmButtonText: 'Close'
      })
    }
    
    // navigate('/admin/')
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
              value={budget}
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
