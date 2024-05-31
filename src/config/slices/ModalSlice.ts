import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    modals: { [key: string]: boolean };
  }
  
  const initialState: ModalState = {
    modals: {},
  };

  const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
      showModal: (state, action: PayloadAction<string>) => {
        state.modals[action.payload] = true;
      },
      hideModal: (state, action: PayloadAction<string>) => {
        state.modals[action.payload] = false;
      },
      toggleModal: (state, action: PayloadAction<string>) => {
        state.modals[action.payload] = !state.modals[action.payload];
      },
    },
  });
  
  export const { showModal, hideModal, toggleModal } = modalSlice.actions;
  
  export default modalSlice.reducer;