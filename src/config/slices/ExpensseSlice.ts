// src/slices/ExpensseSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Expensse } from "../interfaces/expensse";
import { RootState } from "../store";

interface ExpensseState {
  currentExpensse: Expensse;
  expensses: Expensse[];
}

const initialState: ExpensseState = {
  currentExpensse: {
    id: "",
    budgetId: "",
    expensesName: "",
    amount: 0,
    category: "",
    expensesDate: "",
    date: ""
  },
  expensses: []
};

export const ExpensseSlice = createSlice({
  name: "expensse",
  initialState,
  reducers: {
    setCurrentExpensse: (state, action: PayloadAction<Expensse>) => {
      state.currentExpensse = action.payload;
    },
    addExpensse: (state, action: PayloadAction<Expensse>) => {
      state.expensses.push(action.payload);
    },
  },
});

export const { setCurrentExpensse, addExpensse } = ExpensseSlice.actions;

export const selectCurrentExpensse = (state: RootState) => state.expensse.currentExpensse;
export const selectExpensses = (state: RootState) => state.expensse.expensses;

export default ExpensseSlice.reducer;
