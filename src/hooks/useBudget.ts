import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../config/hooks";
import { BudgetSlice, addAllBudget, addBudget } from "../config/slices/BudgetSlices";
import { Budget } from "../interfaces/budget";
import { useNavigate } from "react-router-dom";


export const useBudget = () => {
    const navigqate  = useNavigate()
    const budgetValue = useAppSelector((state: { budget: { budget: 0; }; }) => state.budget.budget)
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
        dispatch(addAllBudget(data))
    }

    return {
        budget,
        budgetValue,
        AddBudget,
        AddAllBudget
    };
}
