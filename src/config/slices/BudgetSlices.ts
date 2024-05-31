import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Budget } from "../interfaces/budget";
import { RootState } from "../store";


const initialState: Budget = {
  id: "",
  name: "",
  budget: 0,
  spent: 0,
  percentage: 0,
  start_date:"",
  end_date: "",
  category: "",
  type: "",
  description: "",
  status: true,
  icon: "",
};

export const BudgetSlice = createSlice({
  name: "Budget",
  initialState,
  reducers: {
    addBudget: (state, action: PayloadAction<number>) => {
      state.budget = action.payload
    },
    addAllBudget: (state, action) => {
      return action.payload;
    }

  },
});

export const { addAllBudget, addBudget } = BudgetSlice.actions;

export const selectBudget = (state: RootState) => state.budget.budget


export default BudgetSlice.reducer;
