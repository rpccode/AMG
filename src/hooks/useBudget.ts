import { useAppSelector, useAppDispatch } from "../config/hooks";
import { BudgetSlice, addAllBudget, addBudget } from "../config/slices/BudgetSlices";
import { Budget } from "../interfaces/budget";


export const useBudget = () => {
    const budgetValue = useAppSelector((state: { budget: { budget: 0; }; }) => state.budget.budget)
    const budget = useAppSelector((state: { budget:Budget; }) => state.budget)

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
