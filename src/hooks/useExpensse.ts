// src/hooks/useExpensse.ts
import { useAppSelector, useAppDispatch } from "../config/hooks";
import { Expensse } from "../config/interfaces/expensse";
import { selectCurrentExpensse, selectExpensses, setCurrentExpensse, addExpensse } from "../config/slices/ExpensseSlice";


export const useExpensse = () => {
  const currentExpensse = useAppSelector(selectCurrentExpensse);
  const expensses = useAppSelector(selectExpensses);
  const dispatch = useAppDispatch();

  const updateCurrentExpensse = (expensse: Expensse) => {
    dispatch(setCurrentExpensse(expensse));
  };

  const addNewExpensse = (expensse: Expensse) => {
    dispatch(addExpensse(expensse));
  };

  return {
    currentExpensse,
    expensses,
    updateCurrentExpensse,
    addNewExpensse
  };
};
