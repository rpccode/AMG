import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../config/hooks";
import { BudgetSlice, addAllBudget, addBudget } from "../config/slices/BudgetSlices";
import { Budget } from "../config/interfaces/budget";
import { useNavigate } from "react-router-dom";


export const useBudget = () => {
    const navigqate  = useNavigate()
    const budgetValue = useAppSelector((state: { budget:Budget }) => state.budget.budget)
    const budget = useAppSelector((state: { budget:Budget; }) => state.budget)


    useEffect(() => {
      if(budgetValue <= 0){
        navigqate('/')
      }
    
    }, [budget,budgetValue])
    
    const dispatch = useAppDispatch()
    const AddBudget = (data: Budget) => {
        dispatch(addBudget(data.budget))
    }


    const AddAllBudget = (data: Budget) => {
      console.log(data)
        dispatch(addAllBudget(data))
    }

    return {
        budget,
        budgetValue,
        AddBudget,
        AddAllBudget
    };
}
