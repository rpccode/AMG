import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { Idata } from "../config/interfaces/IBills";
import { ExpesseFormData } from "../config/types";
import { categories } from "../config/data/Categories";
import { useExpensse } from "../hooks/useExpensse";
import { Expensse } from "../config/interfaces/expensse";
import { Icategories } from "../config/interfaces/ICategories";
import { useBudget } from "./useBudget";

const getInitialValue = (): ExpesseFormData => ({
  amount: 0,
  expensesName: "",
  expensesDate: new Date(),
  category: "",
});

const calculateData = (
  categories: Icategories[],
  expenseList: Expensse[],
  totalAmount: number,
  isEmpty: boolean
): Idata[] => {
  return categories.map((category) => {
    const expense = expenseList.find((exp) => exp.category === category.id);
    const amount: number = Number(expense ? expense.amount : 0);
    const share = isEmpty ? 0 : (amount / totalAmount) * 100;
    return {
      name: category.name,
      amount,
      share: `${share.toFixed(4)}%`,
      color: `bg-${category.color}`,
    };
  });
};

type expenseDataProp = {
  expensse?: Expensse;
};

export const useExpenseData = ({ expensse }: expenseDataProp = {}) => {
  const initialValue = getInitialValue();
  const {
    reset,
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });
  const { expensses } = useExpensse();
  const { budgetValue } = useBudget();

  const porcentaje = useMemo(() => {
    if (expensse && budgetValue) {
      return (expensse.amount / budgetValue) * 100;
    }
    return 0;
  }, [expensse, budgetValue]);

  const categorieInfo = useMemo(() => {
    if (expensse) {
      return categories.find((cat) => cat.id === expensse.category);
    }
    return undefined;
  }, [expensse]);

  const expenseList = useMemo(() => {
    return expensses.length ? expensses : [];
  }, [expensses]);

  const totalAmount = useMemo(() => {
    return expensses.reduce((acc, exp) => acc + exp.amount, 0);
  }, [expensses]);
  const totalBudget = useMemo(() => {
    return  budgetValue - totalAmount 
  }, [expensses]);


  const isEmpty = useMemo(() => {
    return expensses.length === 0;
  }, [expensses]);

  const data = useMemo(
    () => calculateData(categories, expenseList, totalAmount, isEmpty),
    [categories, expenseList, totalAmount, isEmpty]
  );

  return {
    reset,
    watch,
    setValue,
    register,
    handleSubmit,
    errors,
    data,
    isEmpty,
    expenseList,
    totalAmount,
    expensses,
    porcentaje,
    categorieInfo,
    totalBudget
  };
};