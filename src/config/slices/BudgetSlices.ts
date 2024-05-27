import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Budget } from "../../interfaces/budget";

// Define the initial state using that type
const initialState: Budget = {
  id: 0,
  name: "",
  budget: 0,
  spent: 0,
  percentage: 0,
  date: "",
  category: "",
  type: "",
  description: "",
  status: "",
  icon: "",
};

export const BudgetSlice = createSlice({
  name: "Budget",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    

  },
});

export const {  } = BudgetSlice.actions;




export default BudgetSlice.reducer;
